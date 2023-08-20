import React, { useState } from "react";
import Card from "./Card";

const MainDisplay = ({ postData, searchTerm }) => {
  const filteredLocations = postData.filter((location) =>
    location.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredLocations.map((location) => (
        <div key={location.id}>
          <Card location={location} />
        </div>
      ))}
    </>
  );
};

export default MainDisplay;
