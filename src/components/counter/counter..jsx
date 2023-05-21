import { useState } from "react";
import "./counter.css"
const Counter = ({className,singleProductCounter}) => {
  const [count, setCount] = useState(1);
  const inc = () => setCount(count + 1);
  const dec = () => (count > 1 ? setCount(count - 1) : setCount(1));
  console.log(singleProductCounter);
  singleProductCounter ? singleProductCounter(count):""
  return (
    <>
      <div className={`inline-flex counter`}>
        <div
          className="text-inner counter__inc text-extra-dark font-serif font-medium inline-flex items-center justify-center"
          onClick={inc}
        >
          +
        </div>
        <div className={`text-inner counter__number text-extra-dark font-serif font-medium inline-flex items-center justify-center ${className}`}>
          {count}
        </div>
        <div
          className="text-inner counter__dec text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__decrement"
          onClick={dec}
        >
          -
        </div>
      </div>
    </>
  );
};

export default Counter;
