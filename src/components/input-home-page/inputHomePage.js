import "./inputHomePage.css";

function FormHomePage() {
  return (
    <div className="form-square">
      <div className="form-square__content">
        <h1 className="title">
          Preencha os dados para criar o card do colaborador
        </h1>
        <div className="input-section">
          <h3 className="input-section-text">Nome</h3>
          <input
            type="text"
            className="form-square__input"
            placeholder="Digite seu nome"
          ></input>
        </div>
        <div className="input-section">
          <h3 className="input-section-text">Cargo</h3>
          <input
            type="text"
            className="form-square__input"
            placeholder="Digite seu cargo"
          ></input>
        </div>
        <div className="input-section">
          <h3 className="input-section-text">Imagem</h3>
          <input
            type="text"
            className="form-square__input"
            placeholder="Informe o endereço da imagem"
          ></input>
        </div>
        <div className="input-section">
          <h3 className="input-section-text">Time</h3>
          <input type="search" className="form-square__input"></input>
        </div>
        <button className="button">
          <b>Criar card</b>
        </button>
      </div>
    </div>
  );
}

export default FormHomePage;
