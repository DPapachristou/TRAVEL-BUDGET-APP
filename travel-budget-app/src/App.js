import Header from "./COMPONENTS/Navbar";
import Home from "./PAGES/Home";
import Balance from "./PAGES/Balance";
import History from "./PAGES/History";
import Login from "./PAGES/ACCOUNT/Login";
import CreateAccount from "./PAGES/ACCOUNT/CreateAccount"
import MyAccount from "./PAGES/ACCOUNT/MyAccount";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/myAccount" element={<MyAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
