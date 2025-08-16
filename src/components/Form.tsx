"use client";

import { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { generatePortfolio } from "@/server/action";
import { toast } from "sonner";
import { Loader2, UploadIcon, X, Plus, Trash } from "lucide-react";
import { portfolio } from "@/sample/portfolio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropZoneArea,
  Dropzone,
  DropzoneMessage,
  DropzoneTrigger,
  useDropzone,
} from "@/components/ui/dropzone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  generatePortfolioSchema,
  GeneratePortfolioSchemaType,
} from "@/lib/zod-schema";

const isDev = process.env.NODE_ENV === "development";

export default function PortfolioForm() {
  const [portfolioHTML, setPortfolioHTML] = useState<string | null>(
    isDev ? portfolio : null
  );

  const form = useForm<GeneratePortfolioSchemaType>({
    resolver: zodResolver(generatePortfolioSchema),
    defaultValues: {
      preferredName: "",
      role: "",
      googleFont: "",
      instructions: "",
      socialLinks: [""],
      resume: undefined,
    },
  });

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
      form.setValue("resume", file);
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
    a.download = "index.html";
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
    <section id="create-form" className="container max-w-4xl mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-center">
        Create Your Portfolio
      </h2>

      {isExecuting ? (
        <div className="flex flex-col items-center justify-center w-full gap-3 py-16 text-gray-500 border-2 border-dashed rounded-md">
          <Loader2 className="w-6 h-6 animate-spin" />
          <p className="text-sm">Generating your portfolio...</p>
        </div>
      ) : portfolioHTML ? (
        <div className="relative flex flex-col gap-6">
          <div className="relative w-full overflow-hidden border rounded-lg shadow h-80">
            <iframe
              srcDoc={portfolioHTML}
              title="Portfolio Preview"
              className="w-full h-full border-0"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute text-white rounded-full shadow-md cursor-pointer bg-rose-600 top-3 right-3 hover:bg-rose-700"
              onClick={() => setPortfolioHTML(null)}
            >
              <X className="w-4 h-4" />
            </Button>
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(execute)}
            className="p-6 space-y-6 bg-indigo-100 rounded-md shadow-sm"
          >
            <FormField
              control={form.control}
              name="preferredName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role / Profession *</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Stack Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="googleFont"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Google Font URL (optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://fonts.google.com/specimen/Poppins"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Instructions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special requests..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="socialLinks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Social Links (up to 5)</FormLabel>
                  <div className="space-y-2">
                    {field.value?.map((link, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Input
                          value={link}
                          placeholder="https://example.com"
                          onChange={(e) => {
                            const newLinks = [...(field.value || [])];
                            newLinks[idx] = e.target.value;
                            field.onChange(newLinks);
                          }}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            const newLinks =
                              field.value?.filter((_, i) => i !== idx) || [];
                            field.onChange(newLinks);
                          }}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    {field.value && field.value.length < 5 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          field.onChange([...(field.value || []), ""])
                        }
                      >
                        <Plus className="w-4 h-4 mr-1" /> Add Link
                      </Button>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="resume"
              render={() => (
                <FormItem>
                  <FormLabel>Upload Resume *</FormLabel>
                  {form.watch("resume") ? (
                    <div className="flex items-center justify-between w-full p-4 bg-white border rounded-md shadow-sm">
                      <div className="flex items-center gap-3">
                        <UploadIcon className="w-5 h-5 text-indigo-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {form.watch("resume")?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(form.watch("resume")!.size / 1024 / 1024).toFixed(
                              2
                            )}{" "}
                            MB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => form.setValue("resume", undefined)}
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </Button>
                    </div>
                  ) : (
                    <Dropzone value={dropzone}>
                      <DropZoneArea className="p-0 border-0">
                        <DropzoneTrigger className="flex flex-col items-center justify-center w-full gap-1 px-4 py-8 text-sm bg-transparent border-2 border-dashed rounded-md">
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Generate Portfolio
            </Button>
          </form>
        </Form>
      )}
    </section>
  );
}
