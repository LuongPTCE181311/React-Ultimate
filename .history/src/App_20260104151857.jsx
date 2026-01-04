
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const ParentComponent = () =>{
  return (
    <div>parent component</div>
  )
}
const ParentComponent = () =>{
  return (
    <div>parent component</div>
  )
}
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
