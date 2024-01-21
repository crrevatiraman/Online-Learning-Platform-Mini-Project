import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Navigationbar}from './Components/Navigationbar.jsx';
import {Home} from './Components/Home.jsx';
import {About} from './Components/About.jsx';
import {Contact} from './Components/Contact.jsx';
import { Footer } from "./Components/Footer.jsx";
import { RegistrationForm } from './Components/RegistrationForm.jsx';
import { Cplusplus } from './Components/Cplusplus.jsx';
import { Java } from './Components/Java.jsx';
import { Python} from './Components/Python.jsx';
import { HTML} from './Components/HTML.jsx';
import { CSS} from './Components/CSS.jsx';
import { JavaScript} from './Components/JavaScript.jsx';
import { SignInAdmin} from './Components/SignInAdmin.jsx';
import { Admin} from './Components/Admin.jsx';
import { EditForm} from './Components/EditForm.jsx';
import { LearnerList } from './Components/LearnerList.jsx';
import { Loginpage } from './Components/Loginpage.jsx';
function App() {
  return (
    <BrowserRouter>
    
    <Navigationbar></Navigationbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/registration" element={<RegistrationForm/>}></Route>
        <Route path="/signinadmin" element={<SignInAdmin/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/edit/:Phone" element={<EditForm/>}></Route>
        <Route path="/cplusplus" element={<Cplusplus/>}></Route>
        <Route path="/java" element={<Java/>}></Route>
        <Route path="/python" element={<Python/>}></Route>
        <Route path="/html" element={<HTML/>}></Route>
        <Route path="/css" element={<CSS/>}></Route>
        <Route path="/javascript" element={<JavaScript/>}></Route>
        <Route path="/learnerlist" element={<LearnerList/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
