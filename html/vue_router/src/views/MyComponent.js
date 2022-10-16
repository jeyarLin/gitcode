// MyComponent.js
import useCounter from "./useCounter.js";

export default {
  setup() {
    const { count, double, increment } = useCounter();
    return {
      count,
      double,
      increment,
    };
  },
};
