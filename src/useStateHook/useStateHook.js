import React, { useState } from "react";
import Person from "../Person/Person";

// Stateful component, as there is useState fuction
const useStateHook = props => {
  /** useState() come form 16.8-x version ir higher
   *  useState always returns ttwo array elements,
   *  The first element is the given object.
   *  Thhe second element is the function is allowed to update the given object,
   *  that is the first elemenet of the useState funciton.
   */
  const [myObj, setMyObj] = useState({
    person: { name: "MAtt", age: 20 },
    otherState: "text message"
  });

  const onClickButton = () => {
    // Does not merge the new property to the previous object, only updates it.
    setMyObj({
      person: { name: "New MAtt", age: 2000 }
      // otherState: 'text message' --> will be missing, as the person object will be updated
    });
  };

  return (
    <div>
      <hr />
      <h1>useStateHook example:</h1>
      <button onClick={onClickButton}>Click on me</button>
      <Person name={myObj.person.name} age={myObj.person.age} />
    </div>
  );
};

export default useStateHook;
