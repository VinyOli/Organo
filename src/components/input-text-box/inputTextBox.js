import "./inputTextBox.css";

const InputTextComponent = (props) => {
  return (
    <div className="input-section">
      <label className="input-section__text-label">{props.name}</label>
      <input
        type={props.type}
        className="input-section__box"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default InputTextComponent;
