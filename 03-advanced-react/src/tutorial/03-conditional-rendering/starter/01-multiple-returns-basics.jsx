import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 3000)
  }, [])

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
