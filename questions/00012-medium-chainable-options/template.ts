type Chainable<O = {}> = {
  option<K extends string, V>(
    key: K extends keyof O ? never : K,
    value: V
  ): Chainable<Omit<O, K> & { [P in K]: V }>;
  get(): O;
};
