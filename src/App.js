import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Route from "./components/Route";
import SideBar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />

      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
