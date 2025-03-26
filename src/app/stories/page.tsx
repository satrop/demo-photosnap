import Hero from "@/components/hero/Hero";
import StoryCard from "@/components/story-card/StoryCard";
import { stories, featuredStory } from "@/data/stories";

export default function Stories() {
  return (
    <>
      <Hero
        variant="overlay"
        image={featuredStory.image}
        imageAlt={featuredStory.title}
        eyebrow="Last month's featured story"
        title={featuredStory.title}
        date={featuredStory.date}
        author={featuredStory.author}
        excerpt={featuredStory.excerpt}
        buttonText="Read the story"
        buttonHref={featuredStory.href}
        backgroundColor="black"
      />

      <section
        className="stories-section full-width"
        data-featured
      >
        <div className="story-cards-grid">
          {stories.map((story) => (
            <StoryCard
              key={story.href}
              {...story}
            />
          ))}
        </div>
      </section>
    </>
  );
}
