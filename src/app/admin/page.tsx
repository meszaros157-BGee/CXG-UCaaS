"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Upload, Trash2, Eye, EyeOff, Lock, FileText, LogOut, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Proposal {
  id: string;
  name: string;
  filename: string;
  password: string;
  uploadedAt: string;
}

type View = "login" | "dashboard";

export default function AdminPage() {
  const [view, setView] = useState<View>("login");
  const [adminPassword, setAdminPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loadingProposals, setLoadingProposals] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState<Set<string>>(new Set());

  // Upload form state
  const [file, setFile] = useState<File | null>(null);
  const [proposalName, setProposalName] = useState("");
  const [downloadPassword, setDownloadPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchProposals = useCallback(async (pwd: string) => {
    setLoadingProposals(true);
    try {
      const res = await fetch(`/api/proposals?adminPassword=${encodeURIComponent(pwd)}`);
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setProposals(data.proposals ?? []);
    } catch {
      setProposals([]);
    } finally {
      setLoadingProposals(false);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch(`/api/proposals?adminPassword=${encodeURIComponent(adminPassword)}`);
    if (!res.ok) {
      setLoginError("Incorrect admin password.");
      return;
    }
    const data = await res.json();
    setProposals(data.proposals ?? []);
    setView("dashboard");
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setUploadError("");
    setUploadSuccess("");

    if (!file) { setUploadError("Please select a PDF file."); return; }
    if (!proposalName.trim()) { setUploadError("Please enter a proposal name."); return; }
    if (!/^\d{6}$/.test(downloadPassword)) { setUploadError("Download password must be exactly 6 digits."); return; }

    setUploading(true);
    const formData = new FormData();
    formData.append("adminPassword", adminPassword);
    formData.append("file", file);
    formData.append("name", proposalName.trim());
    formData.append("password", downloadPassword);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      let data: { error?: string; success?: boolean } = {};
      try { data = await res.json(); } catch { /* non-JSON response */ }
      if (!res.ok) {
        setUploadError(data.error ?? `Upload failed (HTTP ${res.status}).`);
        return;
      }
      setUploadSuccess(`"${proposalName.trim()}" uploaded successfully.`);
      setFile(null);
      setProposalName("");
      setDownloadPassword("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      fetchProposals(adminPassword);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/proposals", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, adminPassword }),
      });
      if (res.ok) fetchProposals(adminPassword);
    } finally {
      setDeletingId(null);
    }
  }

  function togglePasswordVisibility(id: string) {
    setVisiblePasswords((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  // Refresh on mount if already have a password
  useEffect(() => {
    if (view === "dashboard") fetchProposals(adminPassword);
  }, [view, adminPassword, fetchProposals]);

  /* ── Login Screen ── */
  if (view === "login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="size-6 text-primary" />
            </div>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter the admin password to manage proposals.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="admin-pw">Admin Password</Label>
                <Input
                  id="admin-pw"
                  type="password"
                  placeholder="Enter admin password"
                  value={adminPassword}
                  onChange={(e) => { setAdminPassword(e.target.value); setLoginError(""); }}
                  autoFocus
                />
              </div>
              {loginError && <p className="text-xs text-destructive">{loginError}</p>}
              <Button type="submit" className="w-full" disabled={!adminPassword}>
                <Lock className="size-4" />
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ── Dashboard ── */
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src="/cxg-logo.png" alt="CXG" className="h-7 w-auto" />
            <Separator orientation="vertical" className="h-5" />
            <span className="text-sm font-medium text-muted-foreground">Proposal Admin</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => { setView("login"); setAdminPassword(""); }}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-10">

        {/* Upload Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Upload className="size-4 text-primary" />
              Upload Proposal PDF
            </CardTitle>
            <CardDescription>
              Attach a PDF and set a 6-digit download password. Share the password with your client.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="proposal-name">Proposal Name</Label>
                  <Input
                    id="proposal-name"
                    placeholder="e.g. Acme Corp Proposal"
                    value={proposalName}
                    onChange={(e) => setProposalName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="dl-password">Download Password (6 digits)</Label>
                  <Input
                    id="dl-password"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="e.g. 123456"
                    value={downloadPassword}
                    onChange={(e) => setDownloadPassword(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="pdf-file">PDF File</Label>
                <div
                  className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-8 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {file ? (
                    <>
                      <FileText className="size-8 text-primary" />
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </>
                  ) : (
                    <>
                      <Upload className="size-8 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground">Click to select a PDF file</p>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    id="pdf-file"
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => { setFile(e.target.files?.[0] ?? null); setUploadError(""); setUploadSuccess(""); }}
                  />
                </div>
              </div>

              {uploadError && <p className="text-sm text-destructive">{uploadError}</p>}
              {uploadSuccess && <p className="text-sm text-green-600">{uploadSuccess}</p>}

              <Button type="submit" disabled={uploading} className="gap-2">
                {uploading ? (
                  <>
                    <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Uploading…
                  </>
                ) : (
                  <>
                    <Upload className="size-4" />
                    Upload Proposal
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Proposals Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">
              Uploaded Proposals
              <Badge variant="secondary" className="ml-2">{proposals.length}</Badge>
            </h2>
            <Button variant="ghost" size="sm" onClick={() => fetchProposals(adminPassword)}>
              Refresh
            </Button>
          </div>

          {loadingProposals ? (
            <Card>
              <CardContent className="py-12 text-center text-sm text-muted-foreground">
                Loading proposals…
              </CardContent>
            </Card>
          ) : proposals.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="mx-auto mb-3 size-8 text-muted-foreground/40" />
                <p className="text-sm text-muted-foreground">No proposals uploaded yet.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <div className="divide-y">
                {proposals.map((proposal, idx) => (
                  <div
                    key={proposal.id}
                    className={`flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                      idx === 0 ? "rounded-t-xl" : ""
                    } ${idx === proposals.length - 1 ? "rounded-b-xl" : ""}`}
                  >
                    <div className="space-y-1">
                      <p className="font-medium leading-tight">{proposal.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Uploaded {new Date(proposal.uploadedAt).toLocaleDateString("en-ZA", {
                          day: "numeric", month: "short", year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Password display */}
                      <div className="flex items-center gap-1.5 rounded-md border bg-muted/50 px-3 py-1.5">
                        <Lock className="size-3 text-muted-foreground" />
                        <span className="font-mono text-sm tracking-widest">
                          {visiblePasswords.has(proposal.id) ? proposal.password : "••••••"}
                        </span>
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility(proposal.id)}
                          className="ml-1 text-muted-foreground hover:text-foreground"
                          aria-label="Toggle password visibility"
                        >
                          {visiblePasswords.has(proposal.id)
                            ? <EyeOff className="size-3.5" />
                            : <Eye className="size-3.5" />}
                        </button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                        disabled={deletingId === proposal.id}
                        onClick={() => handleDelete(proposal.id, proposal.name)}
                      >
                        <Trash2 className="size-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
