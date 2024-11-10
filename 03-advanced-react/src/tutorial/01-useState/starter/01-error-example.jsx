const ErrorExample = () => {
  let Count = 0;

  const Increment = () => {
    Count++;
    console.log(Count);
  };

  return (
    <div>
      <h2>{Count}</h2>
      <button className="btn" type="button" onClick={Increment}>Increment</button>
    </div>
  );
};

export default ErrorExample;
