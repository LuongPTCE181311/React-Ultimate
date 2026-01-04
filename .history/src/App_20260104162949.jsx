
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/apiservice";


const App = () => {
  const fetchUserInfo = async() =>{
    const res = await getAccountAPI();
     if(res.data){
      
     }
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
