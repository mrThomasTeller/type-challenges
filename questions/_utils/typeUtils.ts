type IsCollection<T> = T extends Function
  ? false
  : T extends string
    ? false
    : T extends number
      ? false
      : T extends boolean
        ? false
        : true;

type ParseInt<S extends string> = S extends '0'
  ? 0
  : S extends `0${infer A}`
    ? ParseInt<A>
    : S extends `${infer V extends number}`
      ? V
      : never;

type ps1 = ParseInt<'12'>;
type ps2 = ParseInt<'012'>;
type ps3 = ParseInt<'00012'>;
type ps4 = ParseInt<'0'>;

type StrToArray<S extends string, _Arr extends string[] = []> = S extends `${infer A}${infer B}`
  ? StrToArray<B, [..._Arr, A]>
  : _Arr;

type ArrayToStr<Arr extends unknown[]> = Arr extends []
  ? ''
  : Arr extends [...infer A, infer B extends string]
    ? `${ArrayToStr<A>}${B}`
    : never;

type InitAndLast<S extends string> =
  StrToArray<S> extends [...infer A, infer B] ? [ArrayToStr<A>, B] : [];

// type s1 = InitAndLast<'123'>;
// type s2 = InitAndLast<'1'>;

type StrDigit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type StrDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
type StrDigitsRev = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

type IncStrDigit<D extends StrDigit, Next extends string[] = StrDigits> = D extends Next[0]
  ? Next[1]
  : Next extends [any, ...infer Rest extends string[]]
    ? IncStrDigit<D, Rest>
    : never;

type IncStr<S extends string> = S extends '9'
  ? '10'
  : S extends StrDigit
    ? IncStrDigit<S>
    : IncStr_<InitAndLast<S>>;

type IncStr_<T> = T extends [string, StrDigit]
  ? T[1] extends '9'
    ? `${IncStr<T[0]>}0`
    : `${T[0]}${IncStrDigit<T[1]>}`
  : never;

// type r = IncStr<'100'>;
// type r2 = IncStr<'34'>;
// type r3 = IncStr<'99'>;
// type r4 = IncStr<'9'>;

type Inc<V extends number> = ParseInt<IncStr<`${V}`>>;

// type i1 = Inc<34>;
// type i2 = Inc<2000000000000009>;
// type i3 = Inc<1>;

type DecStrDigit<D extends StrDigit> = IncStrDigit<D, StrDigitsRev>;

// type d1 = DecStrDigit<'9'>;

type DecStr<S extends string> = S extends StrDigit ? DecStrDigit<S> : DecStr_<InitAndLast<S>>;

type DecStr_<T> = T extends [string, StrDigit]
  ? T[1] extends '0'
    ? `${T[0] extends '1' ? '' : DecStr<T[0]>}9`
    : `${T[0]}${DecStrDigit<T[1]>}`
  : never;

// type r = DecStr<'100'>;
// type r2 = DecStr<'34'>;
// type r3 = DecStr<'99'>;

type Dec<V extends number> = ParseInt<DecStr<`${V}`>>;

// type i1 = Dec<34>;
// type i2 = Dec<2000000000000009>;
// type i3 = Dec<1>;

type Add<A extends number, B extends number> = B extends 0 ? A : Add<Inc<A>, Dec<B>>;

// type a1 = Add<3, 5>;
// type a2 = Add<10, 15>;
// type a3 = Add<1234, 999>;

type Sub<A extends number, B extends number> = B extends 0 ? A : Sub<Dec<A>, Dec<B>>;

// type s1 = Sub<5, 3>;
// type s2 = Sub<15, 10>;
// type s3 = Sub<1234, 999>;

type MyIsNever<T> = [T] extends [never] ? true : false;
