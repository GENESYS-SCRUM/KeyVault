import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignIn from './SignIn';
import CreateAccount from './component/CreateAccount';
import Nav from "./component/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
       <Router>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/CreateAccount" element={<CreateAccount/>}/>
        </Routes>
        {/* <CreateAccount/> */}
       </Router>
       
    </div>
  );
}

export default App;
