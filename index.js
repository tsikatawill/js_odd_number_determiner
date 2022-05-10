const alertError = (title, message) => {
  return {
    response: "Error",
    title,
    message,
  };
};

const oddCheck = (number) => {
  if (typeof number === "number") {
    const results = number % 2;
    if (results === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return alertError("Illegal entry", `"${number}" is not a number`);
  }
};

export const isOdd = (number) => {
  return oddCheck(number);
};

export const isOddList = (list) => {
  const t = typeof list;

  try {
    const map = list.map((item) => {
      return oddCheck(item);
    });

    return map;
  } catch (error) {
    return alertError("Illegal entry", `${list} is not a list`);
  }
};
