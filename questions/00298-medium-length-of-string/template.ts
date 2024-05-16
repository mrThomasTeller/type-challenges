type LengthOfString1<S extends string, Arr extends string[] = []> = S extends `${string}${infer B}`
  ? LengthOfString1<B, ['', ...Arr]>
  : Arr['length'];
