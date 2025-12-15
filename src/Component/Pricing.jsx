import React, { use } from "react";
import { CheckCheck } from "lucide-react";
const Pricing = ({ pricingPromise }) => {
  const buttonClassByPlan = {
    basic: "bg-gray-200 text-gray-500 hover:bg-gray-300 active:bg-gray-400",
    pro: "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700",

    enterprise: "bg-gray-800 text-white hover:bg-gray-700 active:bg-black",
  };

  const pricingData = use(pricingPromise);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Pricing
          </h2>
          <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
            {pricingData.map((item, index, array) => (
              <div
                key={index}
                className={
                  `flex flex-col overflow-hidden rounded-lg border-2  ` +
                  (item.id !== "pro" ? "sm:mt-8 border" : "border-indigo-500")
                }
              >
                {item.id == "pro" && (
                  <div className="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">
                    Popular choise
                  </div>
                )}
                {item.id == "basic" && <div class="h-2 bg-pink-500"></div>}
                {item.id == "enterprise" && <div class="h-2 bg-gray-800"></div>}
                <div className="flex flex-1 flex-col p-6 pt-8">
                  <div className="mb-12">
                    <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                      {item.name}
                    </div>

                    <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                      {item.description}
                    </p>

                    <div className="space-y-4">
                      {item.features.map((feature, index) => {
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-black">{<CheckCheck />}</span>

                            <span className="text-gray-600">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="#"
                      className={`block rounded-lg  px-8 py-3 text-center text-sm font-semibold  outline-none ring-indigo-300 transition duration-100  focus-visible:ring  md:text-base ${
                        buttonClassByPlan[item.id]
                      }`}
                    >
                      ${item.price.amount}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
