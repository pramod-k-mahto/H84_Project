import AppRoutes from "./components/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="   min-h-117.5  ">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
