import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import Inventory from "./Inventory";
import SampleSurvey from "./SampleSurvey";
import InventoryReport from "./InventoryReport";

const SurveyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavLink to="/">home</NavLink>|
          <NavLink to="/sample">sample</NavLink>|
          <NavLink to="/inventory">inventory</NavLink>|
          <NavLink to="/report">report</NavLink>
        </div>
        <Switch>
          <Route path="/sample">
            <SampleSurvey />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/report">
            <InventoryReport />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default SurveyRoutes;
