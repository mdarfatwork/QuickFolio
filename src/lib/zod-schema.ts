import { z } from "zod";
import { checkFileType } from "./check-file-type";

export const generatePortfolioSchema = z.object({
  resume: z
    .instanceof(File)
    .refine((file) => !file || file.size < 2_000_000, "Max size is 2MB.")
    .refine(
      (file) => !file || checkFileType(file),
      "Only PDF formats are allowed."
    ),
});

export type GeneratePortfolioSchemaType = z.infer<
  typeof generatePortfolioSchema
>;
