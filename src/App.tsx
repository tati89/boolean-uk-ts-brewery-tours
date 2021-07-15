import React, { useState } from "react";
// import "./";
import Header from "./components/Header";
import BreweriesSearch from "./components/BreweriesSearch";
import BookingsContainer from "./components/BookingsContainer";

import "./index.css";
import "./reset.css";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [showBookings, setShowBookings] = useState<boolean>(false);

  return (
    <>
      <Header submitForm={setSearchInput} setShowBookings={setShowBookings} />
      {/* {!searchInput || (showBookings && <BookingsContainer />)} */}
      {searchInput && <BreweriesSearch searchInput={searchInput} />}
    </>
  );
}

export default App;
