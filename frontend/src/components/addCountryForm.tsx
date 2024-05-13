import { FormEvent, useState } from "react";
import styles from "@/styles/addCountryForm.module.css";
import { useQuery, useMutation } from "@apollo/client";
import { Country } from "@/types";
import { DataEntries } from "@/types";
import { CREATE_COUNTRY, GET_COUNTRIES } from "@/graphql/country";

export default function AddCountryForm(): React.ReactNode {
  const [country, setCountry] = useState<DataEntries>({
    name: "",
    code: "",
    emoji: "",
    continent: null,
  });

  const [createCountry, error] = useMutation<Country>(CREATE_COUNTRY, {
    refetchQueries: [GET_COUNTRIES],
  });

  async function postData(item: DataEntries) {
    try {
      await createCountry({
        variables: {
          data: item,
        },
      });
    } catch (error) {
      console.log(error);
      /*  setErrors({ ...errors, submit: true }); */
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newObject = Object.assign(country);
    postData(newObject);
  }

  return (
    <form onSubmit={(e) => submit(e)} className={styles.form}>
      <label htmlFor="Name">Name</label>
      <input
        className={styles.input}
        type="text"
        name="Name"
        onChange={(e) => setCountry({ ...country, name: e.target.value })}
        value={country.name}
      />
      <label htmlFor="Emoji">Emoji</label>
      <input
        className={styles.input}
        type="text"
        name="Emoji"
        onChange={(e) => setCountry({ ...country, emoji: e.target.value })}
        value={country.emoji}
      />
      <label htmlFor="Code">Code</label>
      <input
        className={styles.input}
        type="text"
        name="Code"
        onChange={(e) => setCountry({ ...country, code: e.target.value })}
        value={country.code}
      />
      <button className={styles.button} type="submit">
        OK
      </button>
    </form>
  );
}
