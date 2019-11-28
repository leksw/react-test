import React, { useReducer } from "react";
import Button from "./Button";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

function Liker({ count }) {
  const [state, dispatch] = useReducer(reducer, { count });

  return (
    <Button onClick={() => dispatch({ type: "increment" })}>
      Like {state.count}
    </Button>
  );
}

export default Liker;
