export type SnakeCaseObject = {
  [key: string]: any
}

export type CamelCase<K extends string> = K extends `${infer P1}_${infer P2}`
  ? `${Lowercase<P1>}${Uppercase<P2> extends ''
      ? ''
      : `${CamelCase<Capitalize<P2>>}`}`
  : Lowercase<K>

export type CamelCaseObject<T extends SnakeCaseObject> = {
  [K in keyof T as CamelCase<K>]: T[K] extends Array<infer U>
    ? Array<CamelCaseObject<U>>
    : T[K] extends SnakeCaseObject
    ? CamelCaseObject<T[K]>
    : T[K]
} & { [key: string]: any } // Add index signature here