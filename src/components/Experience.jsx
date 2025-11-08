import { EXPERIENCE } from "../constants/data";
import { Card, CardContent } from "./ui/Card";

export function Experience() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {EXPERIENCE.map((e, idx) => (
        <Card key={idx} className="bg-white/5 border-white/10">
          <CardContent className="p-5">
            <div className="font-semibold">{e.org}</div>
            <div className="text-xs text-white/60">{e.when}</div>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-white/80">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

