import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export interface Proposal {
  id: string;
  name: string;
  filename: string;
  password: string;
  uploadedAt: string;
}

export interface ProposalsData {
  proposals: Proposal[];
}

const DATA_DIR = path.join(process.cwd(), "data");
export const PROPOSALS_DIR = path.join(DATA_DIR, "proposals");
const PROPOSALS_JSON = path.join(DATA_DIR, "proposals.json");

export async function ensureDirs() {
  await mkdir(PROPOSALS_DIR, { recursive: true });
}

export async function getProposals(): Promise<ProposalsData> {
  try {
    const raw = await readFile(PROPOSALS_JSON, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { proposals: [] };
  }
}

export async function saveProposals(data: ProposalsData) {
  await ensureDirs();
  await writeFile(PROPOSALS_JSON, JSON.stringify(data, null, 2), "utf-8");
}

export function isValidAdminPassword(provided: string | null) {
  const adminPassword = process.env.ADMIN_PASSWORD ?? "cxgadmin";
  return provided === adminPassword;
}
