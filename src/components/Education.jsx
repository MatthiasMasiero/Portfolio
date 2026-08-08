import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../constants/data";
import { Card, CardContent } from "./ui/Card";

export function Education() {
  const handleCardClick = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.transform = 'translateY(-10px)';

    setTimeout(() => {
      card.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.transform = 'translateY(0)';

      setTimeout(() => {
        card.style.transition = '';
        card.style.transform = '';
      }, 300);
    }, 200);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {EDUCATION.map((ed, i) => (
        <Card
          key={i}
          className="cursor-pointer"
          onClick={handleCardClick}
        >
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4" /> {ed.school}
            </div>
            <div className="text-sm text-white/70">{ed.degree}</div>
            <div className="text-xs text-white/60">{ed.year}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

