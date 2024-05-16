type Last<T extends any[]> = T extends [...any[], infer V] ? V : never
