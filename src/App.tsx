import React from "react";
import ProposalView from "./views/ProposalView";
import NavBar from "./components/NavBar";
import WalletView from "./views/WalletView";
import { useNavigation } from "./providers/theme/navigation/NavigationContext";

const Pages = () => {
  const { currentPage } = useNavigation()

  switch(currentPage) {
    case "/":
      return <ProposalView/>
    case "/wallet":
      return <WalletView/>
    default:
      return <div className="text-center">
        Page not found
      </div>
  }
}

const App: React.FC = () => {

  return (
    <div className="">
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <NavBar/>
        <div className="m-auto pt-16">
          <h1 className="text-4xl font-bold mb-4">Proposal view</h1>
          {<Pages/>}
        </div>
      </div>
    </div>
  );
};

export default App;
