import { EXPERIENCE } from "../constants/data";
import { Card, CardContent } from "./ui/Card";

export function Experience() {
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
      {EXPERIENCE.map((e, idx) => (
        <Card
          key={idx}
          className="cursor-pointer"
          onClick={handleCardClick}
        >
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

