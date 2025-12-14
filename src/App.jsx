import { Suspense } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import Pricing from "./Component/Pricing";
const pricingPromise = fetch("/pricingData.json").then((res) => res.json());
function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>
    </>
  );
}

export default App;
