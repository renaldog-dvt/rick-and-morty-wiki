import { Outlet } from "react-router";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-base-200 h-dvh w-dvw p-4">
        <NavigationBar />
        <div className="max-h-full max-w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
