import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import {
  getProposals,
  saveProposals,
  isValidAdminPassword,
} from "@/lib/proposals";

// POST /api/upload  body: { adminPassword, blobUrl, name, password }
// Called by the admin client AFTER the file has been uploaded directly to Vercel Blob.
export async function POST(request: NextRequest) {
  let body: {
    adminPassword?: string;
    blobUrl?: string;
    name?: string;
    password?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { adminPassword, blobUrl, name, password } = body;

  if (!isValidAdminPassword(adminPassword ?? null)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!blobUrl || !name?.trim() || !password) {
    return NextResponse.json(
      { error: "Missing required fields: blobUrl, name, password" },
      { status: 400 }
    );
  }

  if (!/^\d{6}$/.test(password)) {
    return NextResponse.json(
      { error: "Download password must be exactly 6 digits" },
      { status: 400 }
    );
  }

  const existing = await getProposals();
  if (existing.proposals.some((p) => p.password === password)) {
    return NextResponse.json(
      { error: "That password is already assigned to another proposal" },
      { status: 409 }
    );
  }

  const id = randomBytes(8).toString("hex");

  existing.proposals.push({
    id,
    name: name.trim(),
    blobUrl,
    password,
    uploadedAt: new Date().toISOString(),
  });

  try {
    await saveProposals(existing);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Metadata save failed: ${message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id });
}
