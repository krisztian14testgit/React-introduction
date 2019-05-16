const personTemplate = (
  <div className="card-person">
    <p>
      I am {props.name} and I am {props.age}
    </p>
    <p>{props.children}</p>
  </div>
);

export default personTemplate;
