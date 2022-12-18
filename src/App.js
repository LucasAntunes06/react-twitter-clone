import "./output.css"
import "./index.css"
import SideBar from "./components/sideBar"
import TrendsBar from "./components/trendsBar"
import Posts from "./components/posts"

function App() {
  return (
    <div className="bg-neutral-900 font-sans">
     <SideBar />
     {/* <Posts /> */}
     <TrendsBar />
    </div>
  );
}

// App()

export default App;
