import "@/index.css";
import HomePage from "@/pages/HomePage";
import { GlobalStateProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalStateProvider>
      <HomePage />
    </GlobalStateProvider>
  );
}

export default App;
