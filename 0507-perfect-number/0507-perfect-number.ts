function checkPerfectNumber(num: number): boolean {  
  let sum = 0;
  
  if (num === 0) return false;
  for (let i=1; i<=num/2; i++) {
    if (num % i === 0) sum += i;
  }
  
  return sum === num;
};