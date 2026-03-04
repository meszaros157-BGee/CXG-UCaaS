import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { randomBytes } from "crypto";
import {
  getProposals,
  saveProposals,
  isValidAdminPassword,
} from "@/lib/proposals";

export async function POST(request: NextRequest) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const adminPassword = formData.get("adminPassword") as string;
  const file = formData.get("file") as File | null;
  const name = (formData.get("name") as string)?.trim();
  const password = formData.get("password") as string;

  if (!isValidAdminPassword(adminPassword)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!file || !name || !password) {
    return NextResponse.json(
      { error: "Missing required fields: file, name, password" },
      { status: 400 }
    );
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json(
      { error: "Only PDF files are accepted" },
      { status: 400 }
    );
  }

  if (!/^\d{6}$/.test(password)) {
    return NextResponse.json(
      { error: "Download password must be exactly 6 digits" },
      { status: 400 }
    );
  }

  // Check password is not already in use
  const existing = await getProposals();
  if (existing.proposals.some((p) => p.password === password)) {
    return NextResponse.json(
      { error: "That password is already assigned to another proposal" },
      { status: 409 }
    );
  }

  const id = randomBytes(8).toString("hex");

  // Upload PDF directly to Vercel Blob
  const blob = await put(`cxg-proposals/pdfs/${id}.pdf`, file, {
    access: "public",
    contentType: "application/pdf",
    addRandomSuffix: false,
  });

  existing.proposals.push({
    id,
    name,
    blobUrl: blob.url,
    password,
    uploadedAt: new Date().toISOString(),
  });

  await saveProposals(existing);

  return NextResponse.json({ success: true, id });
}
