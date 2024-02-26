export const bgColor = (percent) => {
    if (percent >= 80) {
      return "linear-gradient(90.00deg,rgb(25,186,22)0.159%,rgb(105,224,10)99.962%)";
    } else if (percent >= 65) {
      return "linear-gradient(90.00deg,rgb(255,116,0),rgba(255,116,0,0)94.758%)";
    } else if (percent < 65) {
      return "linear-gradient(90.00deg,rgb(255,0,0)-0.053%,rgba(255,0,0,0)79.939%)";
    }
  };
  