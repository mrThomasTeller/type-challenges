type AppendToObject<T, U extends keyof any, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V;
};

// type O = AppendToObject<
//   {
//     key: 'cat';
//     value: 'green';
//   },
//   'home',
//   boolean
// >;
