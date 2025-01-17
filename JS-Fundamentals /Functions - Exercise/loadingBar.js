function solve(percent) {
  const endLine = [`${percent}%`];
  
  const bar = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  
  const interval = percent / 10;
  
  for (let i = 0; i < interval; i++) {
    bar[i] = "%";
  }
  
  if (percent < 100) {
    endLine.push(`[${bar.join("")}]`);
    console.log(endLine.join(" "));
    console.log("Still loading...")
  }

  else {
    endLine.push("Complete!");
    console.log(endLine.join(" "));
    console.log(`[${bar.join("")}]`);
  }
}
