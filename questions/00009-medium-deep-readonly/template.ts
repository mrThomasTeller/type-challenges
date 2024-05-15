type DeepReadonly<T> =
  IsCollection<T> extends true ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T;
