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
    <article>
      <Link
        href={href}
        className="story-card"
        aria-labelledby={`story-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="story-card__image-container">
          <Image
            src={image}
            alt="" // Decorative image, content described in title/text
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="story-card__image"
            aria-hidden="true"
          />
        </div>
        <div className="story-card__content">
          {date && <time className="story-card__date">{date}</time>}
          <h3
            id={`story-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="story-card__title"
          >
            {title}
          </h3>
          <p className="story-card__author">by {author}</p>
          <hr
            className="story-card__divider"
            aria-hidden="true"
          />
          <div className="story-card__cta">
            <Button
              variant="secondary"
              aria-label={`Read story about ${title}`}
              aria-hidden="true"
              tabIndex={-1}
            >
              Read Story
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
