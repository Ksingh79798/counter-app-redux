import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  reset,
} from "../counter/Store/counterSlice.jsx";

export const Counter = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const value = useSelector((item) => item?.show?.value);
  return (
    <>
      <div className="py-14 p-2 space-y-6 w-152 max-w-xl rounded-xl overflow-hidden shadow-lg bg-lime-100">
        <h1 className="text-center text-4xl text-green-600">
          Counter App with Redux(RTK)
        </h1>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl">
            Current Value is :{" "}
            <span className="text-red-600 font-bold">{value}</span>
          </h2>
          <span className="space-x-4">
            <button
              className="bg-green-500 hover:bg-green-800 hover:shadow-md text-white font-bold py-2 px-4 rounded-md"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="bg-red-500 hover:bg-red-800 hover:shadow-md text-white font-bold
              py-2 px-4 rounded-md"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <button
              className="reset-btn mx-5 py-3 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </span>
          <input
            className="border-red-300 border-2 text-gray-800 text-sm rounded-lg block w-4/5 p-2.5"
            placeholder="Type any value"
            type="text"
            value={val}
            onChange={(e) => setVal(+e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dispatch(incrementByValue(val))}
          >
            Increment by Value
          </button>
          <button
            className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => dispatch(decrementByValue(val))}
          >
            Decrement by Value
          </button>
        </div>
      </div>
    </>
  );
};
