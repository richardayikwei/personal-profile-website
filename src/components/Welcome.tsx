import { useState } from "react";

const Welcome = () => {
  const [w, setW] = useState("opacity-0");
  const [e1, setE1] = useState("opacity-0");
  const [l, setL] = useState("opacity-0");
  const [c, setC] = useState("opacity-0");
  const [o, setO] = useState("opacity-0");
  const [m, setM] = useState("opacity-0");
  const [e2, setE2] = useState("opacity-0");
  const [_1, set_1] = useState("opacity-0");

  setTimeout(
    () => setW("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    1000
  );

  setTimeout(
    () =>
      setE1("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    1500
  );

  setTimeout(
    () => setL("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    2300
  );

  setTimeout(
    () => setC("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    3300
  );

  setTimeout(
    () => setO("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    3300
  );

  setTimeout(
    () => setM("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    3300
  );

  setTimeout(
    () =>
      setE2("transition-opacity opacity-0 duration-700 ease-in opacity-100"),
    3300
  );

  setTimeout(
    () =>
      set_1(
        "transition-opacity opacity-0 duration-700 ease-in opacity-100 animate-pulse"
      ),
    4300
  );

  return (
    <div className="flex my-10 container mx-auto text-[#1f3550]">
      <h1 className="text-7xl">
        <span className={`${w}`}>W</span>
        <span className={`${e1}`}>e</span>
        <span className={`${l}`}>l</span>
        <span className={`${c}`}>c</span>
        <span className={`${o}`}>o</span>
        <span className={`${m}`}>m</span>
        <span className={`${e2}`}>e</span>
      </h1>

      <div className="items-end flex">
        <div
          className={`${_1} justify-items-end h-3 w-14  border-2 bg-[#1f3550] `}
        ></div>
      </div>
    </div>
  );
};

export default Welcome;
