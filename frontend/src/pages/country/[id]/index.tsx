import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { Country } from "@/types";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_ID } from "@/graphql/country";

export default function CountryDetail(): React.ReactNode {
  const router = useRouter();
  const query = router.query.code;

  const { data } = useQuery<{ item: Country | null }>(GET_COUNTRY_BY_ID, {
    variables: { code: query },
    skip: query === undefined,
  });

  console.log(data)

  if (data?.item) {
    return (
      <Layout title={data.item.name}>
        <div className={styles.container}>
          <section className={styles.flexColumn}>
            <span>{data.item.emoji} </span>
            <h2>{data.item.name}</h2>
          </section>
        </div>
      </Layout>
    );
  } else {
    return;
  }
}
