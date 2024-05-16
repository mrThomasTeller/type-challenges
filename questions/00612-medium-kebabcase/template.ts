type IsCapital<L extends string> =
  Uppercase<L> extends Lowercase<L> ? false : Uppercase<L> extends L ? true : false;

type KebabCase<S, _Result extends string = ''> = S extends `${infer A}${infer B}`
  ? _Result extends ''
    ? KebabCase<B, Lowercase<A>>
    : IsCapital<A> extends true
      ? KebabCase<B, `${_Result}-${Lowercase<A>}`>
      : KebabCase<B, `${_Result}${A}`>
  : _Result;

// type r = KebabCase<'HHHIHoIhIHoiHoiHIOhIOhIhnJNUYYggHiHoJoL:mJlioHoHHkNLHLKh lH klH'>;
// type r2 = KebabCase<'-'>;
