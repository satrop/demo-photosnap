import FeatureCard from "@/components/feature-card/FeatureCard";
import Hero from "@/components/hero/Hero";
import { features } from "@/data/features";

export default function Features() {
  return (
    <>
      <Hero
        image="/features/desktop/hero.jpg"
        imageAlt="Person taking a photo with a vintage camera"
        title="Features"
        excerpt="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
        variant="side-by-side"
        backgroundColor="black"
        standout
      />

      <section className="features-section">
        <div className="feature-cards-container">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              width={feature.width}
              height={feature.height}
            />
          ))}
        </div>
      </section>
    </>
  );
}
