import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Compass, Sparkles } from "lucide-react";
import { ExperienceCard } from "./components/experience-card";
import { HomeExperienceFilterBar } from "./components/experience-filter-bar";
import { experiences } from "@/src/data/experiences";

const featuredExperiences = [experiences[0], experiences[40], experiences[80]];

export default function Home() {
  return (
    <div className="home-page page-wrap">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> A little more local, a lot more memorable</p>
          <h1>Take the scenic route <span>to your next story.</span></h1>
          <p className="hero-description">
            Find thoughtful experiences hosted by people who know a place by heart. Your next favorite day is out there.
          </p>
          <HomeExperienceFilterBar />
          <div className="hero-footnote">
            <span className="mini-avatar-stack" aria-hidden="true"><i>J</i><i>M</i><i>A</i></span>
            <span>Made for curious people, by people who live there.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Featured sailing experience in Croatia">
          <div className="hero-photo-main">
            <Image
              alt="Sailboat on clear blue water beside a green island"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 42vw"
              src={experiences[1].imageUrl}
              unoptimized
            />
            <div className="hero-photo-caption">
              <span className="photo-caption-kicker">A favorite in Croatia</span>
              <strong>Find your own blue</strong>
            </div>
          </div>
          <div className="hero-note">
            <span className="hero-note-icon"><Compass size={18} aria-hidden="true" /></span>
            <span><strong>100 ways to wander</strong><small>Handpicked local moments</small></span>
          </div>
          <span className="hero-scribble" aria-hidden="true"><ArrowDownRight size={32} /></span>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A good place to begin</p>
            <h2 id="featured-heading">Little plans, big memories</h2>
          </div>
          <Link className="text-link" href="/experiences">See all experiences <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="experience-grid">
          {featuredExperiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.id} />
          ))}
        </div>
      </section>

      <section className="home-callout">
        <div>
          <p className="eyebrow">Your next story starts somewhere</p>
          <h2>Go beyond the guidebook.</h2>
        </div>
        <Link className="button button-dark" href="/experiences">Explore the collection <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
