import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

/* Input Search Box */

function SearchBox({ input, setInput }) {
  return (
    <center id="searchEngine">
      <div class="input-group ">
        <DebounceInput
          type="search"
          class="form-control rounded searchBox"
          placeholder="Search for photos"
          aria-label="Search"
          minLength={3} /* minimum length input by user */
          debounceTimeout={300}
          aria-describedby="search-addon"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </center>
  );
}

export default SearchBox;
