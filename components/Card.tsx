import Link from "next/link";
import styles from "../styles/Card.module.css";
import CardIcon, { Icon } from "./CardIcon";

type AppProps = {
  text: string;
  icon: Icon;
  to: string;
};

const Card = ({ text, icon, to }: AppProps) => {
  return (
    <Link href={{ pathname: to }} passHref>
      <a className={styles.container}>
        <div className={styles.content}>
          <div className={styles.front}>
            <div className={styles.icon}>
              <CardIcon icon={icon} />
            </div>
            <div className={styles.text}>{text}</div>
          </div>
          <div className={styles.back}>
            <div>dylan.tools</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
