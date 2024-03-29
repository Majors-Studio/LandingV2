import React from "react";
import styles from "./styles.module.scss";
import { plansData } from "@/data/plans.data";
import { PlansCard } from "@/components/PlansCard";

export const Plans: React.FC = () => {
  return (
    <section className={styles.plansSection}>
      <h2>Plans</h2>
      <div className={styles.plansCards}>
        {plansData.map((plan) => (
          <PlansCard
            key={plan.id}
            id={plan.id}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            bestChoice={plan.bestChoice}
          />
        ))}
      </div>
    </section>
  );
};
