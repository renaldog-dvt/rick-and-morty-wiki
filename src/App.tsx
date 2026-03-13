import { Outlet } from "react-router";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";

function App() {
  return (
    <>
      <div className="bg-base-200 h-dvh w-dvw p-4">
        <NavigationBar />
        <div className="p-2 max-h-max max-w-max">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
