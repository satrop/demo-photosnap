import Hero from "@/components/hero/Hero";
import StoryCard from "@/components/story-card/StoryCard";

const stories = [
  {
    image: "/stories/desktop/mountains.jpg",
    date: "April 16th 2023",
    title: "The Mountains",
    author: "John Appleseed",
    href: "/stories/the-mountains",
  },
  {
    image: "/stories/desktop/cityscapes.jpg",
    date: "April 14th 2023",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    href: "/stories/sunset-cityscapes",
  },
  {
    image: "/stories/desktop/18-days-voyage.jpg",
    date: "April 11th 2023",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    href: "/stories/18-days-voyage",
  },
  {
    image: "/stories/desktop/architecturals.jpg",
    date: "April 9th 2023",
    title: "Architecturals",
    author: "Samantha Brooks",
    href: "/stories/architecturals",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        variant="side-by-side"
        image="/home/desktop/create-and-share.jpg"
        imageAlt="Create and share your photo stories."
        title="Create and share your photo stories."
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="View the stories"
        buttonHref="/pricing"
        backgroundColor="black"
        imagePosition="right"
        standout={true}
      />
      <Hero
        variant="side-by-side"
        image="/home/desktop/beautiful-stories.jpg"
        imageAlt="Create and share your photo stories."
        title="Create and share your photo stories."
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="View the stories"
        buttonHref="/pricing"
        backgroundColor="white"
      />
      <Hero
        variant="side-by-side"
        image="/home/desktop/designed-for-everyone.jpg"
        imageAlt="Create and share your photo stories."
        title="Create and share your photo stories."
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="View the stories"
        buttonHref="/pricing"
        backgroundColor="white"
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
