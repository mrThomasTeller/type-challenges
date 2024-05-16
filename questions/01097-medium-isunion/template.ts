type IsUnion<T, _T = T> = [T] extends [never]
  ? false
  : T extends T
    ? [Exclude<_T, T>] extends [never]
      ? false
      : true
    : never;
