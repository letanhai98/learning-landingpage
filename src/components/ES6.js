import React, { useState, useEffect } from "react";
import ToDo from "./Todo";

function ES6() {
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
  };
  //   function makeList(arr) {
  //     // Only change code below this line
  //     const failureItems = arr.map(
  //       (item) => `<li class="text-warning">${item}</li>`
  //     );
  //     // Only change code above this line

  //     return failureItems;
  //   }

  //   const failuresList = makeList(result.failure);

  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender,
    };
    // Only change code above this line
  };

  return <div></div>;
}
export default ES6;
