import React from "react";
import { useState } from "react";

const Form = ({ postData, searchTerm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search by location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default Form;
