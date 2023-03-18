import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { History } from "./components/history";
import { Newtransaction } from "./components/newtransaction";

import { GlobalProvider } from "./context/GlobalStats";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance balance="234" />
        <Newtransaction />
        <History />
      </div>

      
    </GlobalProvider>
  );
}

export default App;
