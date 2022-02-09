import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      id
      phone
      address {
        city
        street
      }
    }
  }
`;
