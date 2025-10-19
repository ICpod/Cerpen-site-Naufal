import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from public folder
  app.use(express.static(path.join(process.cwd(), "public"), {
    setHeaders: (res, filepath) => {
      if (filepath.endsWith('.pdf')) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Access-Control-Allow-Origin', '*');
      }
    }
  }));

  // API routes can be added here with /api prefix
  // e.g. app.get('/api/pdf-metadata', async (req, res) => { ... });

  const httpServer = createServer(app);

  return httpServer;
}
