import { badges } from "@/providers/constants.js";

export default function Header() {
  return (
    <div className="mb-4">
      <h1 className="w-full mb-4 text-4xl font-bold">
        🪟 React Browser Components ✨
      </h1>
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <a
            key={index}
            href={badge.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt={badge.alt} src={badge.src} />
          </a>
        ))}
      </div>
    </div>
  );
}
