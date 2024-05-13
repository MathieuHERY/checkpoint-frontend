import { Country } from "@/types";
import styles from "@/styles/countryCard.module.css";

export default function CountryCard(props: Country): React.ReactNode {
  return (
    <a className={styles.countryCardContainer} href={`/country/${props.code}`}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </a>
  );
}
