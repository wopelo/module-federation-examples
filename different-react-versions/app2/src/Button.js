import React from "react";

const Button = (props) => (
  <div>
    <p>
      More react components from <strong>App2</strong> using non-legacy React to
      render
    </p>
    <p>Text form legacy React app: {props.input}</p>
    <button onClick={() => console.log(React.version)}>
      Get App2 React version
    </button>
  </div>
);

export default Button;
