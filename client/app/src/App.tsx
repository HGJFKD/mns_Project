import SideBar from "./featchers/global/layout/sideBar/SideBar";
import ErrorBoundary from "./featchers/global/layout/main/ErrorBoundary";
import { Hamburger } from "./featchers/global/layout/main/Hamburger";

function App() {

  return (
    <>
      <ErrorBoundary>
        {/* <Hamburger/> */}
        <SideBar/>
      </ErrorBoundary>
    </>
  );
}

export default App;
