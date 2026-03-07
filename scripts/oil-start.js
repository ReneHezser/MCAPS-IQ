#!/usr/bin/env node

/**
 * OIL MCP Server launcher.
 *
 * Loads environment variables from the repo-root .env file (if present)
 * then starts the Obsidian Intelligence Layer server.
 *
 * This wrapper ensures a consistent startup path for both
 * VS Code MCP hosting and Copilot CLI (`copilot` / `mcaps`).
 *
 * Priority order for OBSIDIAN_VAULT_PATH:
 *   1. Already set in process environment (e.g. shell profile)
 *   2. Defined in <repo-root>/.env
 *   3. Not set → server exits with a helpful message
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const envFile = resolve(ROOT, ".env");

// ── Load .env (simple key=value, no dependency on dotenv) ──────────
if (existsSync(envFile)) {
  const lines = readFileSync(envFile, "utf-8").split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    // Don't override values already in the environment
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

// ── Start OIL server ───────────────────────────────────────────────
await import("../mcp/oil/dist/index.js");
