type PercentageParser<A extends string> = A extends `${infer Num}%`
  ? [...NumberParser<Num>, '%']
  : [...NumberParser<A>, ''];

type NumberParser<A extends string> = A extends `${infer Sign extends '+' | '-'}${infer Num}`
  ? [Sign, Num]
  : ['', A];

// type p = PercentageParser<'+100%'>;

// type p1 = '+100%' extends `${infer Sign extends '+' | '-'}${infer Num}%` ? [Sign, Num, '%'] : never;
