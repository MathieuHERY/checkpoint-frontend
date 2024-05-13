import Layout from "@/components/Layout";
import CountryList from "@/components/CountryList";
import styles from "@/styles/base.module.css";
import AddCountryForm from "@/components/addCountryForm";

export default function Home(): React.ReactNode {
  return (
    <Layout title={"Accueil"}>
      <div className={styles.mainContainer}>
        <AddCountryForm />
        <CountryList />
      </div>
    </Layout>
  );
}
