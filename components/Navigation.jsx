"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Users, BarChart2, UserPlus, Camera, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-6 w-6" />
            <span className="font-bold text-xl">FaceTrack</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/attendance">
              <Button variant="ghost">
                <Camera className="mr-2 h-4 w-4" />
                Take Attendance
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost">
                <BarChart2 className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/users">
              <Button variant="ghost">
                <Users className="mr-2 h-4 w-4" />
                Users
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="ghost">
                <UserPlus className="mr-2 h-4 w-4" />
                Register
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isOpen ? "flex" : "hidden"
          } flex-col space-y-2 pt-4`}
        >
          <Link href="/attendance" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              <Camera className="mr-2 h-4 w-4" />
              Take Attendance
            </Button>
          </Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart2 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/users" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              <UserPlus className="mr-2 h-4 w-4" />
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
