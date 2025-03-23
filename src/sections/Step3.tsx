import { addons } from "../data";
import { Step3Data } from "../types";

type userAddons = Step3Data & {
  updateData: (data: { addonTypes: string[] }) => void;
};

const Step3 = ({ addonTypes, billing, updateData }: userAddons) => {
  const handleAddonToggle = (addonId: string) => {
    if (addonTypes.includes(addonId)) {
      // Remove the addon if it's already selected
      updateData({ addonTypes: addonTypes.filter((id) => id !== addonId) });
    } else {
      // Add the addon if it's not selected
      updateData({ addonTypes: [...addonTypes, addonId] });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-marineblue text-2xl md:text-3xl font-bold mb-2">
          Pick add-ons
        </h1>
        <p className="text-coolgray max-md:max-w-80">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="space-y-4">
        {addons.map((addon) => (
          <div
            key={addon.id}
            className={`border-2 rounded-lg ${
              addonTypes.includes(addon.id)
              ? "border-marineblue bg-lightblue/25"
              : "border-lightgray"
            }`}
            >
            <label
              htmlFor={`addon-${addon.id}`}
              className="flex gap-8 items-center p-4"
              >
              <input
                type="checkbox"
                name="addon"
                id={addon.id}
                onChange={() => handleAddonToggle(addon.id)}
                className="w-5 h-5 cursor-pointer"
                checked={addonTypes.includes(addon.id)}
              />
              <div>
                <h2 className="text-marineblue text-lg font-medium">
                  {addon.name}
                </h2>
                <span className="text-coolgray">{addon.description}</span>
              </div>
              <span className="ml-auto text-sm text-marineblue">
                ${billing === "monthly" ? addon.priceMonthly : addon.priceYearly}/ {billing === "monthly" ? "mo" : "yr"}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
