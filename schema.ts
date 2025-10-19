import { z } from "zod";

// PDF Flipbook viewer doesn't require complex data models
// since it's a static PDF viewing application

// Optional: Define types for future enhancements
export const pdfMetadataSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  pageCount: z.number().optional(),
});

export type PDFMetadata = z.infer<typeof pdfMetadataSchema>;
