import type { Call, Strings } from 'hotscript';

type DropChar<S extends string, C extends string> = C extends ''
  ? never
  : Call<Strings.Replace<C, '', S>>;

// type DropChar<S extends string, C extends string, _Result extends string = ''> = C extends ''
//   ? never
//   : S extends `${infer A}${infer B}`
//     ? DropChar<B, C, A extends C ? _Result : `${_Result}${A}`>
//     : _Result;

type dc = DropChar<' b u t t e r f l y ! ', ''>;
