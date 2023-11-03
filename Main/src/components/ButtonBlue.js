import "./ButtonBlue.css";

function ButtonBlue(props) {
  return (
    <div>
      <button className="blue-b">
        <h4>{props.text}</h4>
        <img
          className="arrow-wh"
          src="https://i.ibb.co/nnpKnWq/arrow-right-1.png"
          alt="right-arrow"
        />
      </button>
    </div>
  );
}

export default ButtonBlue;
