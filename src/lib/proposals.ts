import { put, del, list } from "@vercel/blob";

export interface Proposal {
  id: string;
  name: string;
  blobUrl: string; // Vercel Blob URL for the stored PDF
  password: string;
  uploadedAt: string;
}

export interface ProposalsData {
  proposals: Proposal[];
}

const METADATA_PATH = "cxg-proposals/metadata.json";

export async function getProposals(): Promise<ProposalsData> {
  try {
    const { blobs } = await list({ prefix: METADATA_PATH });
    if (blobs.length === 0) return { proposals: [] };
    const res = await fetch(blobs[0].url, { cache: "no-store" });
    if (!res.ok) return { proposals: [] };
    return await res.json();
  } catch {
    return { proposals: [] };
  }
}

export async function saveProposals(data: ProposalsData): Promise<void> {
  await put(METADATA_PATH, JSON.stringify(data, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function deletePdf(blobUrl: string): Promise<void> {
  try {
    await del(blobUrl);
  } catch {
    // Blob may already be deleted — proceed regardless
  }
}

export function isValidAdminPassword(provided: string | null): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD ?? "cxgadmin";
  return provided === adminPassword;
}
