import { type PDFMetadata } from "@shared/schema";

// Storage interface for future PDF metadata features
// Currently not used as the PDF viewer is static

export interface IStorage {
  getPDFMetadata(): Promise<PDFMetadata | undefined>;
}

export class MemStorage implements IStorage {
  private metadata?: PDFMetadata;

  constructor() {
    this.metadata = undefined;
  }

  async getPDFMetadata(): Promise<PDFMetadata | undefined> {
    return this.metadata;
  }
}

export const storage = new MemStorage();
