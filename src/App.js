import "./App.css";
import Banner from "./components/banner/banner";
import FormHomePage from "./components/input-home-page/inputHomePage";

function App() {
  return (
    <div className="App">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <FormHomePage></FormHomePage>
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
