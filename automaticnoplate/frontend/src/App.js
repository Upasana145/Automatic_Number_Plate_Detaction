import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Layout from "./pages/Layout";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PlateRecognizerComponent from "./pages/PlateRecognizerComponent";

function App() {
  return (
    <>
      {/* <Sidebar />
      <Header /> */}
      {/* <Otppage /> */}

      <Layout />
      <Header />

      {/* <PlateRecognizerComponent /> */}
      <ToastContainer />
    </>
  );
}

export default App;
