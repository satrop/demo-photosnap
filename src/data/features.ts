export interface FeatureCardData {
  icon: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export const features: FeatureCardData[] = [
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
  {
    icon: "/features/desktop/custom-domain.svg",
    title: "Custom Domain",
    description: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    width: 81,
    height: 72,
  },
  {
    icon: "/features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    description: "Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
    width: 72,
    height: 72,
  },
  {
    icon: "/features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    description: "Easily drag and drop your image and get beautiful shots every time. No over the top tooling to add friction to creating stories.",
    width: 91,
    height: 72,
  },
];
