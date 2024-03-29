"use client";

import React from "react";
import { PlansProps } from "@/data/plans.data";
import styles from "./styles.module.scss";

export const PlansCard: React.FC<PlansProps> = ({
  id,
  name,
  price,
  features,
  bestChoice,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardPrice}>${price}</p>
      <div className={styles.cardFeatures}>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      {bestChoice && <p>Best Choice</p>}
      <button
        className={styles.cardButton}
        onClick={() => alert("Button clicked!")}
      >
        Choose Plan
      </button>
    </div>
  );
};
