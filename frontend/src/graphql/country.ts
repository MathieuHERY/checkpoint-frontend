import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    items: countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const CREATE_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      code
      name
      emoji
    }
  }
`;

export const GET_COUNTRY_BY_ID = gql`
  query country($code: String!) {
    item: country(code: $code) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
