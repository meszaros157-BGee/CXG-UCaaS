import { NextRequest, NextResponse } from "next/server";
import {
  getProposals,
  saveProposals,
  deletePdf,
  isValidAdminPassword,
} from "@/lib/proposals";

// GET /api/proposals?adminPassword=xxx  — list all proposals
export async function GET(request: NextRequest) {
  const provided = request.nextUrl.searchParams.get("adminPassword");

  if (!isValidAdminPassword(provided)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getProposals();
  return NextResponse.json(data);
}

// DELETE /api/proposals  body: { id, adminPassword }  — remove a proposal
export async function DELETE(request: NextRequest) {
  let body: { id?: string; adminPassword?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isValidAdminPassword(body.adminPassword ?? null)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getProposals();
  const proposal = data.proposals.find((p) => p.id === body.id);

  if (!proposal) {
    return NextResponse.json({ error: "Proposal not found" }, { status: 404 });
  }

  // Delete the PDF from Vercel Blob
  await deletePdf(proposal.blobUrl);

  data.proposals = data.proposals.filter((p) => p.id !== body.id);
  await saveProposals(data);

  return NextResponse.json({ success: true });
}
