type EmptyObj = { [key: string]: never };

type IsTruthy<T> = T extends 0 | '' | false | [] | undefined | null | EmptyObj ? false : true;

// type t1 = IsTruthy<true>;
// type t2 = IsTruthy<[]>;
// type t22 = IsTruthy<[1]>;
// type t3 = IsTruthy<1>;
// type t4 = IsTruthy<{}>;
// type t5 = IsTruthy<null>;

// type AnyOf<T extends readonly any[]> = T extends [infer A, ...infer B]
//   ? IsTruthy<A> extends true
//     ? true
//     : AnyOf<B>
//   : false;

type AnyOf<T extends readonly any[]> = true extends IsTruthy<T[number]> ? true : false;

// type a1 = AnyOf<[0, 'test', false, [], {}]>;
