// type RemoveIndexSignature<T> = {
//   [P in keyof T as IsOneOf<P, PropertyKey, never, P>]: T[P];
// };

type IsOneOf<Value, Types, Then = true, Else = false> = IsUnknown<
  Types extends Types ? (Types extends Value ? unknown : false) : never,
  Then,
  Else
>;

type IsUnknown<T, Then = true, Else = false> = unknown extends T ? Then : Else;

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};

// type RemoveIndexSignature<T, _K = PropertyKey> = {
//   [P in keyof T as unknown extends (_K extends _K ? (_K extends P ? unknown : false) : never)
//     ? never
//     : P]: T[P];
// };

// type u1 = IsUnknown<unknown>;
// type u2 = IsUnknown<any>;
// type u3 = IsUnknown<1>;

// type i1 = IsOneOf<string, string | number>;
// type i2 = IsOneOf<symbol, string | number>;
// type i3 = IsOneOf<'a', string | number>;
// type i4 = IsOneOf<'a', 'a' | 'b'>;

// type Foo = {
//   [key: string]: any;
//   foo(): void;
// };

// type r = RemoveIndexSignature<Foo>;
