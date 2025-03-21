import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero
        variant="side-by-side"
        image="/home/desktop/create-and-share.jpg"
        imageAlt="Create and share your photo stories."
        title="Create and share your photo stories."
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="Get an invite"
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
        buttonText="Get an invite"
        buttonHref="/pricing"
        backgroundColor="white"
      />
      <Hero
        variant="side-by-side"
        image="/home/desktop/designed-for-everyone.jpg"
        imageAlt="Create and share your photo stories."
        title="Create and share your photo stories."
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="Get an invite"
        buttonHref="/pricing"
        backgroundColor="white"
      />
      <Hero
        variant="overlay"
        image="/stories/desktop/moon-of-appalacia.jpg"
        imageAlt="Create and share your photo stories"
        eyebrow="Last month's featured story"
        title="Hazy full moon of Appalachia"
        date="March 2nd 2020"
        author="by John Doe"
        excerpt="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
        buttonText="Read the story"
        buttonHref="/pricing"
        backgroundColor="black"
      />
      <Hero
        variant="side-by-side"
        image="/features/desktop/hero.jpg"
        imageAlt="Create and share your photo stories"
        title="Features"
        excerpt="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        backgroundColor="black"
        standout={true}
        short={true}
      />
    </>
  );
}
