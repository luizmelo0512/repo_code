export const removeCurrency: Function = (param: string) => {
  if (param.includes("-")) {
    return Number(
      "-".concat(param.replace(/[^\d,]/g, "").replaceAll(",", "."))
    );
  }
  return Number(param.replace(/[^\d,]/g, "").replaceAll(",", "."));
};
