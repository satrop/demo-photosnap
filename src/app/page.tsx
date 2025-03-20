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
      />
      <Hero
        variant="side-by-side"
        image="/home/desktop/create-and-share.jpg"
        imageAlt="Create and share your photo stories."
        title="Create and share your photo stories"
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="Get an invite"
        buttonHref="/pricing"
        backgroundColor="black"
      />
      <Hero
        variant="overlay"
        image="/home/desktop/create-and-share.jpg"
        imageAlt="Create and share your photo stories"
        title="Create and share your photo stories"
        excerpt="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="Get an invite"
        buttonHref="/pricing"
      />
    </>
  );
}
