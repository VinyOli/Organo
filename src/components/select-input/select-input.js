import "./select-input.css";

const SelectInput = (props) => {
  return (
    <div className="form-square">
      <label>{props.name}</label>
      <select></select>
    </div>
  );
};

export default SelectInput;
