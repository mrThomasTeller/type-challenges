declare function PromiseAll<T extends any[]>(
  values: [...T]
): Promise<{ [P in keyof T]: Awaited<T[P]> }>;
