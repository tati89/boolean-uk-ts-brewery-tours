import { useState } from "react";
import React from "react";
import BreweriesListItem from "./BreweriesListItem";

type BreweriesProps = {
  breweries: [];
};

export default function BreweriesList({ breweries }: BreweriesProps) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <article>
      <ul className="breweries-list">
        {breweries.map((brewery) => (
          <BreweriesListItem
            key={brewery.id}
            brewery={brewery}
            setOpenForm={setOpenForm}
            isFormOpen={brewery.id === openForm}
          />
        ))}
      </ul>
    </article>
  );
}
