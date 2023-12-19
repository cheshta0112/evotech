import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SunHeader from "./components/SunHeader";
import Tabs from "./components/Tabs";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <SunHeader />
      <Tabs />
      <Middle />
    </div>
  );
}

export default App;
