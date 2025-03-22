import Link from "next/link";
import Image from "next/image";
import { Button } from "../button/Button";
import "./StoryCard.scss";

interface StoryCardProps {
  image: string;
  date?: string;
  title: string;
  author: string;
  href: string;
}

export default function StoryCard({ image, date, title, author, href }: StoryCardProps) {
  return (
    <Link
      href={href}
      className="story-card"
    >
      <div className="story-card__image-container">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="story-card__image"
        />
      </div>
      <div className="story-card__content">
        {date && <p className="story-card__date">{date}</p>}
        <h3 className="story-card__title">{title}</h3>
        <p className="story-card__author">by {author}</p>
        <hr className="story-card__divider" />
        <div className="story-card__cta">
          <Button
            variant="secondary"
            aria-label={`Read story about ${title}`}
          >
            Read Story
          </Button>
        </div>
      </div>
    </Link>
  );
}
