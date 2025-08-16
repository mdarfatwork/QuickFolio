"use client";

import {
  DropZoneArea,
  Dropzone,
  DropzoneMessage,
  DropzoneTrigger,
  useDropzone,
} from "@/components/ui/dropzone";
import { Loader2, UploadIcon } from "lucide-react";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { generatePortfolio } from "@/server/action";
import { Button } from "./ui/button";
import { useState } from "react";
import { portfolio } from "@/test/portfolio";

const isDev = process.env.NODE_ENV === "development";

export default function Form() {
  const [portfolioHTML, setPortfolioHTML] = useState<string | null>(
    isDev ? portfolio : null
  );
  const { execute, isExecuting } = useAction(generatePortfolio, {
    onSuccess: ({ data }) => {
      if (data?.html) {
        setPortfolioHTML(data.html);
        toast.success("Portfolio generated successfully!");
      } else {
        toast.info("No portfolio generated. Try another resume.");
      }
    },
    onError: () => {
      toast.error("Failed to generate portfolio!");
    },
  });

  const dropzone = useDropzone({
    onDropFile: async (file: File) => {
      execute({ resume: file });
      return { status: "success", result: file };
    },
    validation: {
      accept: {
        "application/pdf": [".pdf"],
      },
      maxSize: 2 * 1024 * 1024,
      maxFiles: 1,
    },
    shiftOnMaxFiles: true,
  });

  const handleDownload = () => {
    if (!portfolioHTML) return;
    const blob = new Blob([portfolioHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  const handlePreview = async () => {
    if (!portfolioHTML) return;
    await fetch("/api/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html: portfolioHTML }),
    });
    window.open("/api/preview", "_blank");
  };

  return (
    <section id="create-form" className="container max-w-3xl mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-center">
        Upload Your Resume
      </h2>

      {isExecuting ? (
        <div className="flex flex-col items-center justify-center w-full gap-3 py-16 text-gray-500 border-2 border-dashed rounded-md">
          <Loader2 className="w-6 h-6 animate-spin" />
          <p className="text-sm">Generating your portfolio...</p>
        </div>
      ) : portfolioHTML ? (
        <div className="flex flex-col gap-6">
          <div className="w-full overflow-hidden border rounded-lg shadow h-80">
            <iframe
              srcDoc={portfolioHTML}
              title="Portfolio Preview"
              className="w-full h-full border-0"
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button
              className="text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700"
              onClick={handleDownload}
            >
              Download
            </Button>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={handlePreview}
            >
              Preview Full
            </Button>
          </div>
        </div>
      ) : (
        <Dropzone value={dropzone}>
          <DropZoneArea className="p-0 border-0">
            <DropzoneTrigger className="flex flex-col items-center justify-center w-full gap-1 px-4 py-10 text-sm bg-transparent border-2 border-dashed rounded-md">
              <UploadIcon className="w-6 h-6 text-gray-500" />
              <p className="text-sm text-gray-500">
                Drag & drop or{" "}
                <span className="font-semibold text-indigo-600">
                  choose a PDF
                </span>{" "}
                to upload
              </p>
              <p className="text-xs text-gray-400">
                Only PDF files allowed (max 2MB)
              </p>
            </DropzoneTrigger>
          </DropZoneArea>
          <DropzoneMessage className="text-center" />
        </Dropzone>
      )}
    </section>
  );
}
