import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "@/graphql/country";
import { Country } from "@/types";
import styles from "@/styles/countryList.module.css";
import CountryCard from "./CountryCard";

export default function CountryList(): React.ReactNode {
  const { data, loading, error } = useQuery<{
    items: Country[];
  }>(GET_COUNTRIES);

  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <div className={styles.container}>
        <section className={styles.countryGrid}>
          {data?.items.map((item) => (
            <div key={item.id}>
              <CountryCard
                id={item.id}
                name={item.name}
                emoji={item.emoji}
                code={item.code}
                continent={item.continent}
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}
