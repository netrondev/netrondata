import packageInfo from "package.json";
export function AppVersion() {
  return (
    <div className="text-right text-xs">version: {packageInfo.version}</div>
  );
}
export function AppName() {
  return <span>{packageInfo.name}</span>;
}
