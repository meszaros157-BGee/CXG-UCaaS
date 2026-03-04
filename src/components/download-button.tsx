"use client";

import { useState, useRef } from "react";
import { Download, Lock, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DownloadButtonProps {
  variant?: "default" | "ghost" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function DownloadButton({
  variant = "ghost",
  size = "sm",
  className,
}: DownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const password = digits.join("");

  function handleOpen() {
    setDigits(["", "", "", "", "", ""]);
    setError("");
    setOpen(true);
    // Focus first input after render
    setTimeout(() => inputRefs.current[0]?.focus(), 50);
  }

  function handleDigit(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    setError("");
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    // Auto-submit when last digit filled
    if (digit && index === 5) {
      const full = next.join("");
      if (full.length === 6) submitPassword(full);
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter" && password.length === 6) {
      submitPassword(password);
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setDigits(pasted.split(""));
      setError("");
      submitPassword(pasted);
    }
    e.preventDefault();
  }

  async function submitPassword(pwd: string) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error ?? "Incorrect password. Please try again.");
        setDigits(["", "", "", "", "", ""]);
        setTimeout(() => inputRefs.current[0]?.focus(), 50);
        return;
      }

      // Trigger file download
      const blob = await response.blob();
      const disposition = response.headers.get("Content-Disposition") ?? "";
      const match = disposition.match(/filename="?([^"]+)"?/);
      const filename = match?.[1] ?? "CXG-Proposal.pdf";

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setOpen(false);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={handleOpen}
      >
        <Download className="size-4" />
        <span>Download PDF</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <KeyRound className="size-4 text-primary" />
              Proposal Access
            </DialogTitle>
            <DialogDescription>
              Enter your 6-digit access code to download this proposal.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 pt-2">
            {/* OTP-style digit inputs */}
            <div className="flex justify-center gap-2.5" onPaste={handlePaste}>
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={d}
                  disabled={loading}
                  onChange={(e) => handleDigit(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={[
                    "h-12 w-10 rounded-md border text-center text-xl font-bold tracking-widest",
                    "bg-background outline-none transition-all",
                    "focus:border-primary focus:ring-2 focus:ring-primary/20",
                    error ? "border-destructive" : "border-input",
                    loading ? "opacity-50 cursor-not-allowed" : "",
                  ].join(" ")}
                />
              ))}
            </div>

            {error && (
              <p className="text-center text-xs text-destructive flex items-center justify-center gap-1">
                <Lock className="size-3" />
                {error}
              </p>
            )}

            <Button
              className="w-full"
              onClick={() => submitPassword(password)}
              disabled={loading || password.length !== 6}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Downloading…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Download className="size-4" />
                  Download PDF
                </span>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
