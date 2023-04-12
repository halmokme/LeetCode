function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  
  let res = 0;
  for (const cookie of s) {
    if (cookie >= g[res]) res++;
  }

  return res;
};