import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextRequest, NextResponse } from "next/server";
import { isValidAdminPassword } from "@/lib/proposals";

// POST /api/blob-token  — issues a short-lived client upload token
export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        const { adminPassword } = JSON.parse(clientPayload ?? "{}");
        if (!isValidAdminPassword(adminPassword ?? null)) {
          throw new Error("Unauthorized");
        }
        return {
          allowedContentTypes: ["application/pdf"],
          addRandomSuffix: false,
        };
      },
      onUploadCompleted: async () => {
        // Metadata is saved separately by the client after upload
      },
    });
    return NextResponse.json(jsonResponse);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Token generation failed" },
      { status: 400 }
    );
  }
}
