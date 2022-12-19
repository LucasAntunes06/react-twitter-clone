import "./output.css"
import "./index.css"
import SideBar from "./components/sideBar"
import TrendsBar from "./components/trendsBar"
import Posts from "./components/posts"
import Post from "./components/post"
import Header from "./components/header"
import Trend from "./components/trend"

function App() {
  return (
    <div className="bg-neutral-900 font-sans flex flex-row">
      <div className="w-12">
        <SideBar />
      </div>

      <div className="bg-red-600 h-screen w-96 mx-auto z-0">
        {/* <Posts /> */}
        <Header />
      </div>
      {/* <Post /> */}
      <div className="w-4/12">
        <TrendsBar />
      </div>
    </div>
  );
}

// App()

export default App;
