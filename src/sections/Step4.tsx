import { StepsData } from "../types";
import { plans, addons } from "../data.ts";

const Step4 = ({ planType, billing, addonTypes }: Partial<StepsData>) => {
  const selectedPlan = plans.find((plan) => plan.id === planType);

  const planPrice =
    billing === "monthly"
      ? selectedPlan?.priceMonthly
      : selectedPlan?.priceYearly;

    const selectedAddons = addons?.filter(addon => addonTypes?.includes(addon.id))

    const addonPrice = billing === "monthly"
    ? selectedAddons?.reduce((total, addon) => total + addon.priceMonthly, 0)
    : selectedAddons?.reduce((total, addon) => total + addon.priceYearly, 0)

    const totalPrice = (planPrice ?? 0) + addonPrice

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-marineblue text-2xl md:text-3xl font-bold mb-2">
          Finishing up
        </h1>
        <p className="text-coolgray max-md:max-w-80">
          Double check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-magnolia p-4 rounded-xl">
        <section className="flex justify-between items-center pb-2 border-b border-coolgray">
          <span>
            <h2 className="font-medium text-marineblue text-lg">
              {planType} ({billing})
            </h2>
            <p className="text-coolgray underline">Change</p>
          </span>
          <p className="font-bold text-marineblue">
            ${planPrice}/{billing === "monthly" ? "mo" : "yr"}
          </p>
        </section>
        <section className="space-y-2 pt-2">
          {selectedAddons?.map((addon) => (
            <span key={addon.id} className="flex justify-between">
              <p className="text-coolgray">{addon.name}</p>
                <p className="text-marineblue">${billing === "monthly" ? addon.priceMonthly : addon.priceYearly}/
                    {billing === "monthly" ? "mo" : "yr"}
                </p>
            </span>
          ))}
        </section>
      </div>

        <span className="flex justify-between px-4">
            <p className="text-coolgray">Total (per {billing === "monthly" ? 'month' : 'year'})</p>
            <p className="font-bold text-blue">${totalPrice}/{billing === "monthly" ? "mo" : "yr"}</p>
        </span>
    </div>
  );
};

export default Step4;
