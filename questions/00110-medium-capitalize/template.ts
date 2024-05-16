type MyCapitalize<S extends string> = S extends `${infer A}${infer B}`
  ? `${Uppercase<A>}${B}`
  : Uppercase<S>;
