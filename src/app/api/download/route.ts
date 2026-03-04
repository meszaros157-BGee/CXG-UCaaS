import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { getProposals, PROPOSALS_DIR } from "@/lib/proposals";

export async function POST(request: NextRequest) {
  let password: string;

  try {
    const body = await request.json();
    password = body.password;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!password || !/^\d{6}$/.test(password)) {
    return NextResponse.json({ error: "Password must be exactly 6 digits" }, { status: 400 });
  }

  const data = await getProposals();
  const proposal = data.proposals.find((p) => p.password === password);

  if (!proposal) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const filePath = path.join(PROPOSALS_DIR, proposal.filename);

  try {
    const fileBuffer = await readFile(filePath);
    const safeName = proposal.name.replace(/[^a-zA-Z0-9 _-]/g, "").trim() || "CXG-Proposal";
    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${safeName}.pdf"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Proposal file not found" }, { status: 404 });
  }
}
