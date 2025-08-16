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

export default function Form() {
  const { execute, isExecuting } = useAction(generatePortfolio, {
    onSuccess: ({ data }) => {
      toast.success("Portfolio generated successfully!");
      if (data?.html) {
        const blob = new Blob([data.html], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "portfolio.html";
        a.click();

        URL.revokeObjectURL(url);
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

  return (
    <section id="create-form" className="container max-w-3xl mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-center">
        Upload Your Resume
      </h2>

      {isExecuting ? (
        <div className="flex flex-col items-center justify-center w-full gap-3 py-16 border-2 border-dashed rounded-md text-gray-500">
          <Loader2 className="w-6 h-6 animate-spin" />
          <p className="text-sm">Generating your portfolio...</p>
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
