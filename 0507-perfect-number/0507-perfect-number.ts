function checkPerfectNumber(num: number): boolean {  
  let sqrt = Math.sqrt(num), sum = 1;
    
  if (num < 2) return false;
    
  for (let i=2; i<=sqrt; i++) {
    if (num % i === 0) sum += (i === sqrt) ? i : i + num/i 
  }
    
  console.log(sum)
  return sum === num;
};