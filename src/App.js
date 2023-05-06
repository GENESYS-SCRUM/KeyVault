import SavedKeys from "./SavedKeys/SavedKeys";
import { Route, Routes } from "react-router";
import AddKey from "./AddKey/AddKey";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import CreateAccount from "./component/CreateAccount";
import Nav from "./component/Nav";
import Logs from "./component/Logs";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Logs" element={<Logs/>} />
        <Route path="/" element={<SavedKeys />} />
        <Route path="/addkey" element={<AddKey />} />
      </Routes>

      {/* <CreateAccount/> */}
    </div>

  );
}

export default App;
