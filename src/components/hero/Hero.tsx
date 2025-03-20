import Image from "next/image";
import styles from "./Hero.module.scss";
import { Button } from "../button/Button";
import classNames from "classnames";

interface HeroProps {
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  eyebrow?: string;
  date?: string;
  author?: string;
  buttonText: string;
  buttonHref: string;
  variant: "overlay" | "side-by-side";
  imagePosition?: "left" | "right";
  backgroundColor?: "black" | "white";
}

export default function Hero({ image, imageAlt, title, excerpt, eyebrow, date, author, buttonText, buttonHref, variant, imagePosition = "left", backgroundColor = "white" }: HeroProps) {
  return (
    <section className={classNames(styles.hero, styles[variant], styles[`image-${imagePosition}`], styles["full-width"], backgroundColor === "black" ? "background--black" : "background--white")}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={imageAlt}
          className={styles.heroImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          priority
          quality={90}
        />
      </div>
      <div className={styles.content}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {(date || author) && (
          <p className={styles.meta}>
            {date && <span className={styles.date}>{date}</span>}
            {author && <span className={styles.author}>by {author}</span>}
          </p>
        )}
        <p className={styles.excerpt}>{excerpt}</p>
        <Button
          href={buttonHref}
          variant="secondary"
          aria-label={buttonText}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
