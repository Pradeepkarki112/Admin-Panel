import Income from "./component/Income";
import Notes from "./component/Notes";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";

function App() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <Notes />
      <Income />
    </div>
  );
}

export default App;
