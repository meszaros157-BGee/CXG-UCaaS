"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DownloadButton from "@/components/download-button";
import type { NavItem } from "@/content/types";

interface NavBarProps {
  items: NavItem[];
}

export default function NavBar({ items }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <img
            src="/cxg-logo.png"
            alt="CXG Customer Experience Group"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
          <div className="ml-2 border-l pl-3">
            <DownloadButton variant="default" size="sm" />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <DownloadButton variant="outline" size="sm" />
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {items.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
