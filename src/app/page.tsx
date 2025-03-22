import Hero from "@/components/hero/Hero";
import StoryCard from "@/components/story-card/StoryCard";
import FeatureCard from "@/components/feature-card/FeatureCard";

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

const threeFeatures = [
  {
    icon: "/features/desktop/responsive.svg",
    title: "100% Responsive",
    description: "No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.",
    width: 72,
    height: 72,
  },
  {
    icon: "/features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    width: 72,
    height: 36,
  },
  {
    icon: "/features/desktop/embed.svg",
    title: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    width: 71,
    height: 72,
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
      <section className="features-section">
        <div className="feature-cards-container">
          {threeFeatures.map((feature, index) => (
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
