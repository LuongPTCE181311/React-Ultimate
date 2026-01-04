
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const ParentComponent = (props) =>{
  return (
    <div>parent component</div>
  )
}
const ChildComponent = (props) =>{
  return (
    <div>child component</div>
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
