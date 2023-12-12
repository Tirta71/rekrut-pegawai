import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-3 mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
