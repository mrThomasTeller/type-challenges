// type Flatten<T extends any[]> = T extends [infer A, ...infer B]
//   ? [...(A extends any[] ? Flatten<A> : [A]), ...Flatten<B>]
//   : [];

type Flatten<T extends any[], Rest extends any[] = []> = T extends [...infer A, infer B]
  ? B extends any[]
    ? Flatten<[...A, ...B], Rest>
    : Flatten<A, [B, ...Rest]>
  : Rest;
