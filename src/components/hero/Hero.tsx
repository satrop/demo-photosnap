import Image from "next/image";
import { Button } from "../button/Button";
import classNames from "classnames";
import "./Hero.scss";

interface HeroProps {
  image: string;
  imageAlt: string;
  title: string;
  excerpt?: string;
  eyebrow?: string;
  date?: string;
  author?: string;
  buttonText?: string;
  buttonHref?: string;
  variant: "overlay" | "side-by-side";
  imagePosition?: "left" | "right";
  backgroundColor?: "black" | "white";
  standout?: boolean;
  short?: boolean;
}

export default function Hero({ image, imageAlt, title, excerpt, eyebrow, date, author, buttonText, buttonHref, variant, imagePosition = "right", backgroundColor = "white", standout = false, short = false }: HeroProps) {
  const content = (
    <>
      {eyebrow && (
        <p
          className="eyebrow h4"
          aria-level={2}
          role="heading"
        >
          {eyebrow}
        </p>
      )}
      <h1 className="title">{title}</h1>
      {(date || author) && (
        <div className="meta">
          {date && (
            <time
              className="date"
              dateTime={new Date(date).toISOString()}
            >
              {date}
            </time>
          )}
          {author && (
            <span className="author">
              <span className="visually-hidden">Article written </span>
              by {author}
            </span>
          )}
        </div>
      )}
      {excerpt && (
        <p
          className="excerpt"
          style={{ color: "var(--text-muted)" }}
        >
          {excerpt}
        </p>
      )}
      {buttonText && (
        <Button
          href={buttonHref}
          variant="secondary"
          aria-label={`${buttonText} - ${title}`}
        >
          {buttonText}
        </Button>
      )}
    </>
  );

  return (
    <section
      className={classNames("hero", variant, `image-${imagePosition}`, "full-width", backgroundColor === "black" ? "background--black" : "background--white", short ? "short" : "")}
      aria-labelledby={`hero-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div
        className="imageContainer"
        aria-hidden={variant === "overlay"}
      >
        <Image
          src={image}
          alt={imageAlt}
          className="heroImage"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          priority
          quality={90}
        />
      </div>
      <div className="content">
        {standout ? (
          <div
            className="standout-content"
            role="presentation"
          >
            {content}
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
