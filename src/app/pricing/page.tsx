"use client";
import { useState } from "react";
import Hero from "@/components/hero/Hero";
import PriceCard from "@/components/price-card/PriceCard";
import PriceToggle from "@/components/price-toggle/PriceToggle";
import FeatureTable from "@/components/feature-table/FeatureTable";
import "./pricing.scss";
import BetaSection from "@/components/beta-section/BetaSection";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Basic",
      description: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      price: 19,
      popular: false,
    },
    {
      title: "Pro",
      description: "More advanced features available. Recommended for photography veterans and professionals.",
      price: 39,
      popular: true,
    },
    {
      title: "Business",
      description: "Additional features available such as more detailed metrics. Recommended for business owners.",
      price: 99,
      popular: false,
    },
  ];

  const features = [{ title: "UNLIMITED STORY POSTING" }, { title: "UNLIMITED PHOTO UPLOAD" }, { title: "EMBEDDING CUSTOM CONTENT" }, { title: "CUSTOMIZE METADATA" }, { title: "ADVANCED METRICS" }, { title: "PHOTO DOWNLOADS" }, { title: "SEARCH ENGINE INDEXING" }, { title: "CUSTOM ANALYTICS" }];

  const featurePlans = [
    {
      name: "Basic",
      features: [true, true, false, false, false, false, false, false],
    },
    {
      name: "Pro",
      features: [true, true, true, true, true, false, false, false],
    },
    {
      name: "Business",
      features: [true, true, true, true, true, true, true, true],
    },
  ];

  return (
    <>
      <Hero
        variant="side-by-side"
        image="/pricing/desktop/hero.jpg"
        imageAlt="Professional camera on a tripod"
        title="Pricing"
        excerpt="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
        backgroundColor="black"
        standout
        short
      />

      <section className="pricing-section main-width">
        <PriceToggle
          isYearly={isYearly}
          onChange={setIsYearly}
        />

        <div className="pricing-cards">
          {plans.map((plan) => (
            <PriceCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              isYearly={isYearly}
              popular={plan.popular}
            />
          ))}
        </div>

        <h2 className="section-title h1">Compare</h2>

        <FeatureTable
          features={features}
          plans={featurePlans}
        />
      </section>
      <BetaSection />
    </>
  );
}
