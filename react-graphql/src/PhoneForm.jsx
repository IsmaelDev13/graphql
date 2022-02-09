import { useMutation } from "@apollo/client";
import { useState } from "react";
import { EDIT_NUMBER } from "./Persons/graphql-mutations";

export const PhoneForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [changeNumber] = useMutation(EDIT_NUMBER);

  const handleSubmit = (e) => {
    e.preventDefault();

    changeNumber({ variables: { name, phone } });

    setName("");
    setPhone("");
  };

  return (
    <div>
      <h2>Edit phone number</h2>
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

        <button>Change Phone</button>
      </form>
    </div>
  );
};
