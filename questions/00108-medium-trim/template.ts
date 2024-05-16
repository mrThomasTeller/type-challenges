type Trim<S extends string> = S extends `${WhiteSpace}${infer A}`
  ? Trim<A>
  : S extends `${infer A}${WhiteSpace}`
    ? Trim<A>
    : S;
