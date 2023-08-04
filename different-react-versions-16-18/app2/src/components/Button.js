import React, { useState } from 'react';

console.log(`APP2 React version: ${React.version}`);

const Button = () => {
  const [num, setNum] = useState(0)

  return <div>
    <p>
      More react components from <strong>App2</strong> using non-legacy React to render
    </p>
    <button onClick={() => setNum(num + 1)}>App 2 Button { num }</button>
  </div>
};

export default Button;
