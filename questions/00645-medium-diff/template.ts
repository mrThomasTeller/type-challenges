// type Diff<O, O1, _Ok extends keyof O = keyof O, _O1k extends keyof O1 = keyof O1> = {
//   [P in _Ok | _O1k as P extends _Ok ? (P extends _O1k ? never : P) : P]: P extends _Ok
//     ? O[P]
//     : P extends _O1k
//       ? O1[P]
//       : never;
// };

type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;

// type a1 = 'a' | 'b';
// type b1 = 'b' | 'c';
// type c1 = a1 & b1;
