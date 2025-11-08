import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../constants/data";
import { Card, CardContent } from "./ui/Card";

export function Education() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {EDUCATION.map((ed, i) => (
        <Card key={i} className="bg-white/5 border-white/10">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4" /> {ed.school}
            </div>
            <div className="text-sm text-white/70">{ed.degree}</div>
            <div className="text-xs text-white/60">Class of {ed.year}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

