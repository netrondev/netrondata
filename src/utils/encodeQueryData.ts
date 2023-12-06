export default function encodeQueryData(data: Record<string, string | number>) {
  const ret = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in data) {
    ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key]!)}`);
  }
  return ret.join("&");
}

// export function encodeQueryData<
//   O extends { [index: string]: string | number | undefined }
// >(data: O): string {
//   const ret: (string | number | undefined)[] = [];
//   Object.keys(data).forEach((d) => {
//     const val = data[d];
//     if (!val) return;
//     ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(val)}`);
//   });

//   return ret.join("&");
// }
