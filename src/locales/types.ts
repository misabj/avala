type Widen<T> = T extends string ? string : T extends readonly unknown[] ? { readonly [K in keyof T]: Widen<T[K]> } : T extends object ? { [K in keyof T]: Widen<T[K]> } : T
export type Copy = Widen<typeof import('./en').en>
