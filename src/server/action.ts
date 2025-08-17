"use server";

import { actionClient } from "@/lib/safe-action";
import { generatePortfolioSchema } from "@/lib/zod-schema";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export const generatePortfolio = actionClient
  .inputSchema(generatePortfolioSchema)
  .action(async ({ parsedInput: { resume, preferredName, role, googleFont, instructions, socialLinks } }) => {
    if (!resume) throw new Error("Resume is required");
    const bytes = new Uint8Array(await resume.arrayBuffer());
    const b64 = Buffer.from(bytes).toString("base64");

    const customization = `
User Customizations:
- Preferred name: ${preferredName}
- Role / Profession: ${role}
${googleFont ? `- Font: ${googleFont}` : ""}
${socialLinks?.length ? `- Social links: ${socialLinks.join(", ")}` : ""}
${instructions ? `- Extra instructions: ${instructions}` : ""}
`;

    const prompt = `
You are QuickFolio, a generator that turns a user's resume (PDF) into a modern, single-file personal website.

🎨 Requirements:
- Output ONLY one complete HTML document string.
- All CSS must be inside a <style> tag. Do not reference external CSS/fonts.
- If any JavaScript is necessary, include it in a <script> tag (no external scripts).
- No features that require a backend (no contact forms, no newsletter, no analytics).
- Make it accessible (semantic HTML, proper headings, alt text placeholders, aria labels).
- Mobile-first, responsive layout with clean modern design, Ensure it is accessible to every decives and browsers.
- Use a minimalist, professional look with soft shadows, rounded corners, and subtle accent colors.
- Add smooth **scroll animations** (fade-in, slide-up, etc.) using CSS and/or a tiny inline JS scroll observer.
- Sections to include if present in the resume: Name & Role, Summary, Experience, Projects, Skills, Education, Links.
- Highlight skills and projects in card-like layouts.
- Add basic SEO <meta> tags inside <head> based on the resume content (title, description, keywords) & OpenGraph tags.
- Ensure it feels like a **modern portfolio** (not old-style resumes).
- Keep it under ~400 lines if possible.
- if user want any font you can only import it from google fonts.
- if user want social media icon, don't import it from any where, instead use inline svg.
- Ensure the performance and optimization of the portfolio.

${customization}

Return JUST the HTML (no Markdown fences).
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: prompt }] },
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: "application/pdf",
                data: b64,
              },
            },
          ],
        },
      ],
    });

    const html = response.text?.trim();
    if (!html || !html.includes("<html")) {
      throw new Error("Failed to generate portfolio HTML. Try another resume.");
    }

    return {
      status: "success" as const,
      html,
    };
  });
