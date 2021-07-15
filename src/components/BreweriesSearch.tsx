import { useState } from "react";
import React from "react";
import { SyntheticEvent } from "react";
import ListContainer from "./ListContainer";
import FilterContainer from "./FilterContainer";

type SearchProps = {
  searchInput: string;
};

export default function BreweriesSearch({ searchInput }: SearchProps) {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    selectedCities: [],
    selectedType: "",
  });

  const updateFilters = (e: SyntheticEvent) => {
    let { name, value, checked, type } = e.target;

    if (type === "checkbox")
      value = checked
        ? [...filters.selectedCities, value]
        : filters.selectedCities.filter((c) => c !== value);

    setFilters({ ...filters, [name]: value });
  };
  return (
    <main className="main-search">
      <ListContainer
        stateInput={searchInput}
        setCities={setCities}
        filters={filters}
      />
      <FilterContainer
        cities={cities}
        filterSelections={filters}
        updateFilter={updateFilters}
      />
    </main>
  );
}
