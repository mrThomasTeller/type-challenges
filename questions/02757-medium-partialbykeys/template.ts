type PartialByKeys<T, K extends keyof T = keyof T> = Rebuild<Partial<Pick<T, K>> & Omit<T, K>>;

type Rebuild<T> = { [P in keyof T]: T[P] };
