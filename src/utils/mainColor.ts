export type StyleInfo<T> = {
  value: T;
  color: string;
};

type Query = (...args: never[]) => unknown;
export type WithStyle<T extends Query> = (...args: Parameters<T>) => StyleInfo<ReturnType<T>>;

export const mainColor = {
  navy: "#0a214f",
  teal: "#007989",
  crimson: "#a22041",
  orange: "#cd5e3c",
} as const;
export type MainColor = (typeof mainColor)[keyof typeof mainColor];
