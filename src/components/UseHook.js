import React, { useEffect, useRef, useState, useMemo, useReducer } from "react";
import Form from "./Form";

// use reducer
//1. init State: 0
//2. actions:
//3. reduce
//4. dispatch

// //1. init state
// const initState = {
//   job: "",
//   jobs: [],
// };

// //2. actions
// const SET_JOB = "set_job";
// const ADD_JOB = "add_job";
// const DELETE_JOB = "delete_job";

// const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload,
//   };
// };

// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload,
//   };
// };

// // console.log(setJob("Rua bat"));

// //3. reducer
// const reducer = (state, action) => {
//   console.log("action: ", action);
//   console.log("state: ", state);
//   switch (action.type) {
//     case SET_JOB:
//       return {
//         ...state,
//         job: action.payload,
//       };
//       break;
//     case ADD_JOB:
//       return {
//         ...state,
//         jobs: [...state.jobs, , action.payload],
//       };
//       break;
//     default:
//       throw new Error("Invalid action");
//   }
// };

//4. Dispatch

function UseHook() {
  //   const [state, dispatch] = useReducer(reducer, initState);
  //   const { job, jobs } = state;
  //   const handleSubmit = () => {
  //     dispatch(addJob(job));
  //     dispatch(setJob(""));
  //   };
  //   console.log("initState: ", state);

  const [count, setCount] = useState(0);

  function fibo(n) {
    if (n < 2) {
      return n;
    }
    return fibo(n - 1) + fibo(n - 2);
  }

  console.time("fibo");
  const result = useMemo(() => {
    return fibo(40);
  }, []);
  console.timeEnd("fibo");

  const [total] = useState(30);

  //   const prevCount = useEffect;
  //   const timeId = useRef();

  //   useEffect(() => {
  //     prevCount.current = count;
  //   }, [count]);

  //   const handleStrart = () => {
  //     timeId.current = setInterval(() => {
  //       setCount((prevCount) => prevCount - 1);
  //     }, 1000);

  //     console.log("handleStrart: ", timeId.current);
  //   };

  //   const handleStop = () => {
  //     clearInterval(timeId.current);

  //     console.log("handleStop: ", timeId.current);
  //   };

  //   console.log(count, prevCount.current);
  //   return (
  //     <div className=" p-[20px] flex justify-center items-center flex-col gap-5">
  //       <h2 className=" font-bold">{count}</h2>
  //       <button onClick={handleStrart} className=" bg-green-500 rounded-[100%]">
  //         Start
  //       </button>
  //       <button onClick={handleStop} className=" bg-red-500 rounded-[100%]">
  //         Stop
  //       </button>
  //     </div>
  //   );

  return (
    <div className=" p-[ 0 20px] items-center  w-[100%] flex flex-col gap-5">
      {/* <h3 className=" font-bold">Todo</h3>
      <input
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          // e.target.value
          dispatch(setJob(e.target.value));
        }}
        className="border rounded-[10px] "
      ></input>
      <button onClick={handleSubmit} className=" bg-blue-400 rounded-[10px]">
        Add
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} &times;</li>
        ))}
      </ul> */}
      <p>Count: {count}</p>
      <p> Result : {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Form total={total} />
    </div>
  );
}

export default UseHook;
