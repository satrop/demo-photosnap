import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/demo">Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
