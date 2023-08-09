import React from "react";

export default function Form(submitForm, total) {
  console.log("form-render");
  return (
    <div className="flex justify-center flex-row">
      <div>Form</div>
      <p>Total: {total}</p>
      <input type="text" id="name" />
      <label htmlFor="name">Name</label>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
