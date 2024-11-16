import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Users, BarChart2, UserPlus, Camera } from "lucide-react";

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-6 w-6" />
            <span className="font-bold text-xl">FaceTrack</span>
          </Link>

          <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
}
