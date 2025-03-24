"use client";
import { useState } from "react";
import Hero from "@/components/hero/Hero";
import PriceCard from "@/components/price-card/PriceCard";
import PriceToggle from "@/components/price-toggle/PriceToggle";
import "./pricing.scss";

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
      </section>
    </>
  );
}
