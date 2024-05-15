type IsCollection<T> = T extends Function
  ? false
  : T extends string
    ? false
    : T extends number
      ? false
      : T extends boolean
        ? false
        : true;
