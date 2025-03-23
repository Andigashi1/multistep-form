import Arcade from "../src/assets/images/icon-arcade.svg"
import Advanced from "../src/assets/images/icon-advanced.svg"
import Pro from "../src/assets/images/icon-pro.svg"

export const steps = [
  { id: 1, title: "Your Info" },
  { id: 2, title: "Select Plan" },
  { id: 3, title: "Add-ons" },
  { id: 4, title: "Summary" },
];

export const plans = [
  { id: "arcade", name: "Arcade", priceMonthly: 9, priceYearly: 90, image: Arcade },
  { id: "advanced", name: "Advanced", priceMonthly: 12, priceYearly: 120, image: Advanced },
  { id: "pro", name: "Pro", priceMonthly: 15, priceYearly: 150, image: Pro },
];

export const addons = [
  {
    id: "online",
    name: "Online service",
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: "storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
  },
  {
    id: "profile",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
  },
];
