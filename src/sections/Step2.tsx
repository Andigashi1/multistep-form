import { plans } from "../data";
import { Step2Data } from "../types";

type userPlan = Step2Data & {
  updateData: (data: { planType?: "arcade" | "advanced" | "pro"; billing?: "monthly" | "yearly"; }) => void;
}

const Step2 = ({ planType, billing, updateData }: userPlan) => {

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-marineblue text-2xl md:text-3xl font-bold mb-2">
          Select your plan
        </h1>
        <p className="text-coolgray max-md:max-w-80">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border-2 rounded-lg cursor-pointer grow ${
                planType === plan.id
                  ? "border-marineblue bg-lightblue/25"
                  : "border-lightgray"
              }`}
            >
              <label
                htmlFor={`plan-${plan.id}`}
                className="flex md:flex-col items-start gap-4 p-4 cursor-pointer"
              >
                <input
                  type="radio"
                  id={`plan-${plan.id}`}
                  name="plan"
                  className="sr-only"
                  onChange={() => updateData({ planType: plan.id as "arcade" | "advanced" | "pro" })}
                  checked={planType === plan.id}
                />
                <img src={plan.image} alt={`${plan.name} icon`} />
                <div className="flex flex-col gap-0.5 md:mt-2">
                  <span className="font-medium text-lg text-marineblue">
                    {plan.name}
                  </span>
                  {billing === "yearly" ? (
                    <span className="text-coolgray">
                      ${plan.priceYearly}/year
                    </span>
                  ) : (
                    <span className="text-coolgray">
                      ${plan.priceMonthly}/month
                    </span>
                  )}
                  {billing === "yearly" && <span className="text-marineblue text-sm">2 months free</span>}
                </div>
              </label>
            </div>
          ))}
        </div>

        <label htmlFor="billing-toggle">
          <input
          id="billing-toggle"
            type="checkbox"
            className="sr-only"
            value={billing}
            onChange={() => updateData({ billing: billing === "monthly" ? "yearly" : "monthly" })}
            checked={billing === "yearly"}
          />
          <div className="md:bg-pastelblue/25 rounded-lg md:mt-10">
            <div className="flex justify-between items-center w-1/2 mx-auto py-2">
              <span className={`transition-all duration-200 ${billing === "yearly" ? "text-coolgray" : null}`}>
                Monthly
              </span>
              <span className="w-14 h-6 bg-marineblue rounded-full relative cursor-pointer">
                <span
                  className={`w-4 h-4 bg-white absolute top-1/2 -translate-y-1/2 rounded-full left-1 transition-all duration-200
                  ${billing === "yearly" ? "translate-x-8" : "translate-x-0"}`}
                ></span>
              </span>
              <span className={`transition-all duration-200 ${billing !== "yearly" ? "text-coolgray" : null}`}>
                Yearly
              </span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Step2;
