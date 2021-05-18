import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { NameCard } from "../../components/NameCard/NameCard";
import "./Searchpage.css";
export const Searchpage = () => {
  const [input, setInput] = useState("");
  const createUser = useSelector((state) => state.createUser);
  const onSearchChange = (event) => {
    event.target.value.length >= 3
      ? setInput(event.target.value)
      : setInput("");
  };
  const filteredData = createUser.filter(
    (user) =>
      user.name.toLowerCase().includes(input.toLowerCase()) ||
      user.profileName.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div>
      <SearchBox onSearchChange={onSearchChange} />
      <div className="container">
        <NameCard userData={filteredData} />
      </div>
    </div>
  );
};
