const PLAN_ID_PREFIX = "plan-";

export type PlansProps = {
  id: string;
  name: string;
  price: number;
  features: string[];
  bestChoice?: boolean;
};

export const plansData: PlansProps[] = [
  {
    id: `${PLAN_ID_PREFIX}1`,
    name: "Basic",
    price: 10,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    bestChoice: false,
  },
  {
    id: `${PLAN_ID_PREFIX}2`,
    name: "Standard",
    price: 20,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    bestChoice: true,
  },
  {
    id: `${PLAN_ID_PREFIX}3`,
    name: "Premium",
    price: 30,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    bestChoice: false,
  },
];
