import "./App.css";
import SavedKeys from "./SavedKeys/SavedKeys";
import { Route, Routes } from "react-router";
import AddKey from "./AddKey/AddKey";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SavedKeys />} />
        <Route path="/addkey" element={<AddKey />} />
      </Routes>
    </div>
  );
}

export default App;
