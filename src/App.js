import "./App.css";
import Banner from "./components/banner/banner";
import FormSquare from "./components/form-square/form-square";

function App() {
  return (
    <div className="App">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <FormSquare></FormSquare>
      </main>
      <footer>
        Developed by{" "}
        <a
          target="_blank"
          href="https://www.instagram.com/viny.oli13"
          rel="noreferrer"
        >
          Vinny
        </a>
      </footer>
    </div>
  );
}

export default App;
