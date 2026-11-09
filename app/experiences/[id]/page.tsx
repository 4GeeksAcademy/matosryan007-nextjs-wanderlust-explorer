import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { experiences } from "@/src/data/experiences";
import { FavoriteButton } from "../../components/favorite-button";
import { ExperienceCard } from "../../components/experience-card";

export function generateStaticParams() {
  return experiences.map(({ id }) => ({ id }));
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === id);

  if (!experience) {
    notFound();
  }

  const relatedExperiences = experiences
    .filter((item) => item.category === experience.category && item.id !== experience.id)
    .slice(0, 3);

  return (
    <div className="page-wrap detail-page">
      <Link className="back-link" href="/experiences"><ArrowLeft size={16} aria-hidden="true" /> Back to experiences</Link>
      <section className="detail-hero">
        <div className="detail-image-wrap">
          <Image
            alt={experience.title}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 70vw"
            src={experience.imageUrl}
            unoptimized
          />
          <FavoriteButton experienceId={experience.id} />
          <span className="detail-category">{experience.category}</span>
        </div>
        <aside className="detail-booking">
          <p className="eyebrow">A local experience</p>
          <h1>{experience.title}</h1>
          <p className="detail-location"><MapPin size={16} aria-hidden="true" /> {experience.destination}</p>
          <div className="detail-rating"><Star size={16} fill="currentColor" aria-hidden="true" /> <strong>{experience.rating.toFixed(1)}</strong><span>Guest rating</span></div>
          <div className="booking-price"><strong>${experience.price}</strong><span>per person</span></div>
          <p className="booking-note">A thoughtful way to get to know the place, led by someone who calls it home.</p>
          <Link className="button button-blue" href="/experiences">Find another experience <ArrowRight size={17} aria-hidden="true" /></Link>
        </aside>
      </section>

      <div className="detail-content-grid">
        <section className="detail-about">
          <p className="eyebrow">The experience</p>
          <h2>A different view of {experience.destination.split(",")[0]}.</h2>
          <p>{experience.description}</p>
          <p>Spend time beyond the usual itinerary and take home a closer connection to the people and rhythms of this place.</p>
        </section>
        <aside className="detail-facts">
          <h2>At a glance</h2>
          <div><span>Experience type</span><strong>{experience.category}</strong></div>
          <div><span>Destination</span><strong>{experience.destination}</strong></div>
          <div><span>Guest rating</span><strong>{experience.rating.toFixed(1)} / 5</strong></div>
          <div><span>Price</span><strong>${experience.price} per person</strong></div>
        </aside>
      </div>

      <section className="related-section">
        <div className="section-heading">
          <div><p className="eyebrow">Keep wandering</p><h2>More {experience.category.toLowerCase()} experiences</h2></div>
          <Link className="text-link" href={`/experiences?category=${experience.category.toLowerCase()}`}>Browse category <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="experience-grid">
          {relatedExperiences.map((item) => <ExperienceCard experience={item} key={item.id} />)}
        </div>
      </section>
    </div>
  );
}