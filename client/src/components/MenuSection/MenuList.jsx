import MenuItem from "./MenuItem";
// This is a Menu-List component consisting of Menu-Items that it receives from the backend server

export default function MenuList() {
  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-24">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </>
  );
}
