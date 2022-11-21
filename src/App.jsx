import DropDown from "../components/DropDown";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dropdown for BOOKVALA D2D INDIA PRIVATE LIMITED</h1>
      <h4>
        <a
          target="_blank"
          href="https://github.com/kalpadhwaryu/dropdown_for_bookvala"
        >
          Source Code
        </a>
      </h4>
      <h4>
        Made by{" "}
        <a target="_blank" href="https://github.com/kalpadhwaryu">
          Kalp Adhwaryu
        </a>
      </h4>
      <div style={{ marginLeft: 30, marginRight: 30 }}>
        <DropDown />
      </div>
    </div>
  );
}

export default App;
