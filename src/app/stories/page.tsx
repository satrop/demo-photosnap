import Hero from "@/components/hero/Hero";
import StoryCard from "@/components/story-card/StoryCard";
import "./stories.scss";

const stories = [
  {
    image: "/stories/desktop/mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
    href: "/stories/the-mountains",
  },
  {
    image: "/stories/desktop/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    href: "/stories/sunset-cityscapes",
  },
  {
    image: "/stories/desktop/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    href: "/stories/18-days-voyage",
  },
  {
    image: "/stories/desktop/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooks",
    href: "/stories/architecturals",
  },
];

export default function Stories() {
  return (
    <>
      <Hero
        variant="overlay"
        image="/stories/desktop/moon-of-appalacia.jpg"
        imageAlt="Hazy full moon of Appalachia"
        eyebrow="Last month's featured story"
        title="Hazy full moon of Appalachia"
        date="March 2nd 2020"
        author="John Doe"
        excerpt="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
        buttonText="Read the story"
        buttonHref="/stories/moon-of-appalacia"
        backgroundColor="black"
      />

      <section className="stories-section full-width">
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
