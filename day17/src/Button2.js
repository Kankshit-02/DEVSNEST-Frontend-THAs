import React from 'react';

export default function Button2() {
  let [value, setValue] = React.useState(0);

  let handleCount = () => {
    setValue(prevCount => {
      return prevCount + 1;
    });
  };

  return <button onClick={handleCount}>{value}</button>;
}
