import React, { useState, useEffect } from "react";

function UseEffect() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/user/5")
      .then((res) => res.json())
      .then((data) => {
        data = data.todos;
        setPosts(data);
        console.log("data: ", data);
        // if (Array.isArray(data)) {

        // } else {
        //   console.error("Data is not an array:", data);
        // }
      });
  }, []);

  return (
    <div className="w-[100%] flex justify-center flex-col">
      <h2 className="flex justify-center items-center font-extrabold text-[50px] mb-[50px] ">
        List
      </h2>
      <ul>
        {/* <li>{posts.description}</li>
        <li>{posts.discountPercentage}</li>
        <li>{posts.images[4]}</li> */}
        {posts.map((post) => (
          <li key={post.id}>{post.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffect;
