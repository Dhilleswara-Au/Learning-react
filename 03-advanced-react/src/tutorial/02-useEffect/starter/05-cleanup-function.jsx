import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Component
      </button>
      {toggle && <SomeComponent />}
    </>
  );
};

// const SomeComponent = () => {
//   useEffect(() => {
//     console.log("Hello World");
//     setInterval(() => {
//       console.log("New One");
//     }, 1000)
//   }, [])
//   return <h4>Hello World</h4>
// }

const SomeComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //sonething
    }
    window.addEventListener('scroll', someFunc)
    return () => window.removeEventListener('scroll', someFunc)
  }, [])
  return <h3>Hello World</h3>
}

export default CleanupFunction;
