type NumberRange<L extends number, H extends number> =
  | Exclude<ParseInt<StrRange<`${H}`>>, ParseInt<StrRange<`${L}`>>>
  | L;

type StrDigitTill<D extends StrDigit> = D extends '0' ? '0' : StrDigitTill<DecStrDigit<D>> | D;

type StrDigitUnTill<D extends StrDigit> = D extends '0'
  ? '0'
  : StrDigitTill<DecStrDigit<D>> | DecStrDigit<D>;

// type s1 = StrDigitTill<'6'>;
// type s2 = StrDigitUnTill<'6'>;

type _FullRange<S extends string> = S extends StrDigit
  ? StrDigit
  : S extends `${StrDigit}${infer B}`
    ? `${StrDigit}${_FullRange<B>}`
    : never;

type StrRange<S extends string> = S extends StrDigit
  ? StrDigitTill<S>
  : S extends `${infer A extends StrDigit}${infer B}`
    ? `${StrDigitUnTill<A>}${_FullRange<B>}` | `${A}${StrRange<B>}`
    : never;

// type r = NumberRange<0, 99999>;
