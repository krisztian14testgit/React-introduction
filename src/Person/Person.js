import React from "react";
import "./Person.css";
import PropTypes, { number } from "prop-types";
//import personTemplate from "./Person";

// Stateless component, as the is no any state handler function (useSate())
const Person = props => {
  return (
    <div className="card-person">
      <p>
        I am {props.name} and I am {props.age}
      </p>
      <div>{props.children}</div>
    </div>
  );
  // return personTemplate;
};

//Check the type of the props
Person.propTypes = {
  name: PropTypes.string,
  age: number,
  chagned: PropTypes.func,
  onChange: PropTypes.func
};

export default Person;
