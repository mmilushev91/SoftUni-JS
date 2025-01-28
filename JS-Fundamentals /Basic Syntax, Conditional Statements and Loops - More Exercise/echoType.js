function solve(parameter) {
  const parameterType = typeof parameter;
  
  console.log(parameterType);
  
  parameterType === "string" || parameterType === "number" ? console.log(parameter) : console.log("Parameter is not suitable for printing");
}
