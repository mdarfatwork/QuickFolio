import { z } from "zod";

const checkFileType = (file: File) =>
  file.type === "application/pdf" || file.name.endsWith(".pdf");

export const generatePortfolioSchema = z.object({
  preferredName: z.string().min(1, "Preferred name is required"),
  role: z.string().min(1, "Role/Profession is required"),
  googleFont: z.url().optional(),
  instructions: z.string().optional(),
  socialLinks: z.array(z.url("Must be a valid URL")).max(5).optional(),
  resume: z
  .instanceof(File)
  .optional()
  .refine((file) => file !== undefined, {
    message: "Resume is required",
  })
  .refine((file) => !file || file.size < 2_000_000, {
    message: "Max size is 2MB.",
  })
  .refine((file) => !file || checkFileType(file), {
    message: "Only PDF formats are allowed.",
  }),
});

export type GeneratePortfolioSchemaType = z.infer<
  typeof generatePortfolioSchema
>;
