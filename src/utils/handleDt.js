export const handleDt = (value, func) => {
  if (value === "percentage") {
    func("%");
  } else {
    func("$");
  }
};
