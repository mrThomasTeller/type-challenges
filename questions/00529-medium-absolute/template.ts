type Absolute<T extends number | string | bigint, _T = `${T}`> = _T extends `-${infer N}` ? N : _T;

type a = Absolute<-1_000_000n>;
