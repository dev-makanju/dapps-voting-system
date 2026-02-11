import React from "react";
import ProposalView from "./views/ProposalView";
import NavBar from "./components/NavBar";

const App: React.FC = () => {

  return (
    <div className="">
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <NavBar/>
        <div className="m-auto pt-16">
          <h1 className="text-4xl font-bold mb-4">Proposal view</h1>
          <ProposalView/>
        </div>
      </div>
    </div>
  );
};

export default App;
