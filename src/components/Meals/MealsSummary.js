import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>너도 미래의 라이더다. 시켜라</h2>
      <p>배달은 사랑, 사랑은 배달</p>
      <p>빠르고 안전하게 음식을 전달합니다</p>
    </section>
  );
};

export default MealsSummary;
