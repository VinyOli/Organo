import "./card-forms.css";
import InputTextComponent from "../input-text-box/inputTextBox";
import SelectInput from "./../select-input/select-input";
import Button from "./../buttom/button";

const Form = () => {
  return (
    <section className="forms">
      <h1>Preencha os dados para criar o card do colaborador</h1>
      <form>
        <InputTextComponent
          name="Nome"
          placeholder="Digite seu nome"
          type="text"
        ></InputTextComponent>
        <InputTextComponent
          name="Cargo"
          placeholder="Digite seu cargo"
          type="text"
        ></InputTextComponent>
        <InputTextComponent
          name="Imagem"
          placeholder="Coloque aqui a URL da sua imagem"
          type="text"
        ></InputTextComponent>
      </form>
      <SelectInput name="Time"></SelectInput>
      <Button name="Criar card"></Button>
    </section>
  );
};

export default Form;
