
import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./component/admin/Admin";
import Login from './component/admin/Login';
import Menu from "./component/admin/MenuDisplay22222";
import About from "./component/navbar2/About";
import Pricing from "./component/navbar2/Pricing";
import Home from "./component/user/Home";
import Navbar from "./component/user/navbar/Navbar";

function App() {
  let url = window.location.pathname
  console.log(url)
  return (
    <>
      <div>
        {url==='/admin' || url==='/admin/' ?
        <div>
        <Routes>
        <Route exact  path='/admin/*' element={<AdminDashboard />} />
        </Routes>
        </div>
        :
        <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
        </Routes>
        </div>}
        
      </div>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<AdminDashboard />}>
          <Route path="/menu" element={<Menu/>}/>
        </Route>
      </Routes> */}
    </>

  );
}

export default App;
