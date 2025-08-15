"use client";

import {
  DropZoneArea,
  Dropzone,
  DropzoneMessage,
  DropzoneTrigger,
  useDropzone,
} from "@/components/ui/dropzone";
import { UploadIcon } from "lucide-react";
import { toast } from "sonner";

export default function Form() {
  const dropzone = useDropzone({
    onDropFile: async (file: File) => {
      console.log("Uploaded resume:", file.name);
      toast.success("Resume uploaded successfully!");
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
    </section>
  );
}
