import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Accounts from "./pages/settings/Accounts";
import Single from "./pages/single/Single";
import AddBike from "./pages/addbike/Add-bike";
import ContactUs from "./pages/contactus/contactus";
import About from "./pages/about/about";
import { Route, Routes} from "react-router-dom";
import { useContext } from "react";

import { UsersContext, UsersContextProvider } from "./helpers/UserContext/UserDataContext";

function App() {
  let flag;
  const { users } = useContext(UsersContext);
  console.log(flag)
  console.log(users);
  return (
    <>
    <Topbar />
    <div></div>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/posts" element={<Homepage/>}/> 
        <Route path="/login" element={users ? <Homepage /> : <UsersContextProvider><Login /></UsersContextProvider>}/>
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/addbike" element={users ? <AddBike /> :<UsersContextProvider><Login /></UsersContextProvider>}/>
        <Route path="/accounts" element={users ? <Accounts /> : <Login />}/>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
