import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";
import {
  getProposals,
  saveProposals,
  ensureDirs,
  PROPOSALS_DIR,
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
    return NextResponse.json({ error: "Missing required fields: file, name, password" }, { status: 400 });
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json({ error: "Only PDF files are accepted" }, { status: 400 });
  }

  if (!/^\d{6}$/.test(password)) {
    return NextResponse.json({ error: "Download password must be exactly 6 digits" }, { status: 400 });
  }

  // Check password is not already in use
  const existing = await getProposals();
  if (existing.proposals.some((p) => p.password === password)) {
    return NextResponse.json({ error: "That password is already assigned to another proposal" }, { status: 409 });
  }

  await ensureDirs();

  const id = randomBytes(8).toString("hex");
  const filename = `${id}.pdf`;
  const filePath = path.join(PROPOSALS_DIR, filename);

  const bytes = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  existing.proposals.push({
    id,
    name,
    filename,
    password,
    uploadedAt: new Date().toISOString(),
  });
  await saveProposals(existing);

  return NextResponse.json({ success: true, id });
}
