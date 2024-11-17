import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Users, BarChart2, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 py-8">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          FaceTrack Attendance
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Simple Yet Smart Attendance System
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4">
        <Link href="/attendance" className="block">
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
            <div className="space-y-3 md:space-y-4">
              <Camera className="w-8 h-8 md:w-12 md:h-12 text-primary" />
              <h2 className="text-lg md:text-xl font-semibold">Take Attendance</h2>
              <p className="text-sm text-muted-foreground">
                Quick face recognition for attendance tracking
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/dashboard" className="block">
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
            <div className="space-y-3 md:space-y-4">
              <BarChart2 className="w-8 h-8 md:w-12 md:h-12 text-primary" />
              <h2 className="text-lg md:text-xl font-semibold">Dashboard</h2>
              <p className="text-sm text-muted-foreground">
                View attendance statistics and reports
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/users" className="block">
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
            <div className="space-y-3 md:space-y-4">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-primary" />
              <h2 className="text-lg md:text-xl font-semibold">Manage Users</h2>
              <p className="text-sm text-muted-foreground">
                Add and manage student/faculty profiles
              </p>
            </div>
          </Card>
        </Link>

        <Link href="/reports" className="block">
          <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full">
            <div className="space-y-3 md:space-y-4">
              <FileSpreadsheet className="w-8 h-8 md:w-12 md:h-12 text-primary" />
              <h2 className="text-lg md:text-xl font-semibold">Reports</h2>
              <p className="text-sm text-muted-foreground">
                Generate and export attendance reports
              </p>
            </div>
          </Card>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 w-full sm:w-auto">
        <Link href="/register" className="w-full sm:w-auto">
          <Button size="lg" className="w-full">
            Register New User
          </Button>
        </Link>
        <Link href="/attendance" className="w-full sm:w-auto">
          <Button size="lg" variant="secondary" className="w-full">
            Start Taking Attendance
          </Button>
        </Link>
      </div>
    </div>
  );
}
