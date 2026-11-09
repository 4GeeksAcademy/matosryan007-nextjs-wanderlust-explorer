import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import type { Experience } from "@/src/data/experiences";
import { FavoriteButton } from "./favorite-button";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <div className="experience-card-media">
        <Link href={`/experiences/${experience.id}`} aria-label={`View ${experience.title}`}>
          <Image
            alt={experience.title}
            className="experience-card-image"
            fill
            sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 30vw"
            src={experience.imageUrl}
            unoptimized
          />
        </Link>
        <FavoriteButton experienceId={experience.id} />
        <span className="category-chip">{experience.category}</span>
      </div>
      <div className="experience-card-body">
        <div className="experience-card-heading">
          <Link className="experience-card-title" href={`/experiences/${experience.id}`}>
            {experience.title}
          </Link>
          <span className="rating"><Star size={14} fill="currentColor" aria-hidden="true" /> {experience.rating.toFixed(1)}</span>
        </div>
        <p className="card-destination"><MapPin size={14} aria-hidden="true" /> {experience.destination}</p>
        <div className="card-footer">
          <span className="card-duration">Local favorite</span>
          <span className="card-price"><strong>${experience.price}</strong> / person</span>
        </div>
      </div>
    </article>
  );
}