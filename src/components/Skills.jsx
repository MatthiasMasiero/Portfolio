import { Globe, Cpu } from "lucide-react";
import { SKILLS } from "../constants/data";
import { Card, CardContent } from "./ui/Card";
import { Chip } from "./ui/Chip";

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <Globe className="w-4 h-4" /> Languages
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.languages.map((s, i) => (
              <Chip key={i}>{s}</Chip>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <Cpu className="w-4 h-4" /> Tools & Platforms
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.tools.map((s, i) => (
              <Chip key={i}>{s}</Chip>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

