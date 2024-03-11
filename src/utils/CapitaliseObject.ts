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

/// lowercase first letter of object keys
export function LowercaseObject<T extends object>(
  obj: T,
): LowercaseObjectKeys<T> {
  const newObj = {} as LowercaseObjectKeys<T>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newkey = `${key.charAt(0)!.toLowerCase()}${key.slice(
        1,
      )}` as keyof LowercaseObjectKeys<T>;

      newObj[newkey] = obj[
        key
      ] as LowercaseObjectKeys<T>[keyof LowercaseObjectKeys<T>];
    }
  }
  return newObj;
}

// generic type transform object keys to lowercase first letter

export type LowercaseObjectKeys<T> = {
  [P in keyof T as Uncapitalize<string & P>]: T[P];
};

const testObjectUpper = {
  Some: 1,
  Data: 2,
  TestDasd: "asdasd",
};

const asdfUpper = LowercaseObject(testObjectUpper);