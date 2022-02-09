import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PERSON } from "./Persons/graphql-mutations";
import { ALL_PERSONS } from "./Persons/graphql-queries";

export const PersonForm = ({ notifyError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({ variables: { name, phone, street, city } });

    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };

  return (
    <div>
      <h2>Create new Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Add Person</button>
      </form>
    </div>
  );
};
