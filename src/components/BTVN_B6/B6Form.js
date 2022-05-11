import React, { useState } from "react";

export default function B6Form({ onAddItem }) {

  const [name, setName] = useState();
  const handleB6Item = (event) => {
    event.preventDefault();
    if (!name) {
      alert("Nhập vào Tiêu Đề");
      return;
    }
    onAddItem(name);
  };

  return (
    <form onSubmit={handleB6Item}>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button>Post</button>
    </form>
  );
}
