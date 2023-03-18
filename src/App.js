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
        <div className="md:flex w-full my-5 overflow-auto">
          <div className=" h-auto flex-grow card rounded-box place-items-center overflow-auto">
            <Balance balance="234" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-auto flex-grow card  rounded-box place-items-center overflow-auto">
            <Newtransaction />
          </div>
        </div>

        <History />
      </div>
    </GlobalProvider>
  );
}

export default App;
