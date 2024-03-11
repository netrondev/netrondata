// capitalize first letter of object keys
export function CapitaliseObject<T extends object>(
  obj: T,
): CapitaliseObjectKeys<T> {
  const newObj = {} as CapitaliseObjectKeys<T>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newkey = `${key.charAt(0)!.toUpperCase()}${key.slice(
        1,
      )}` as keyof CapitaliseObjectKeys<T>;

      newObj[newkey] = obj[
        key
      ] as CapitaliseObjectKeys<T>[keyof CapitaliseObjectKeys<T>];
    }
  }
  return newObj;
}

// generic type transform object keys to uppercase first letter
export type CapitaliseObjectKeys<T> = {
  [P in keyof T as Capitalize<string & P>]: T[P];
};

// const testObject = {
//     some: 1,
//     data: 2,
//     testDasd: "asdasd",
//   } as const;

// const asdf = CapitaliseObject(testObject);
