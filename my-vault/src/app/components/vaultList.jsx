export default function VaultList() {
  return (
    <div className="w-full overflow-scroll max-h-[240px]">
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
      <VaultItem />
    </div>
  );
}

const VaultItem = () => {
  return (
    <div className="bg-uiBG w-full p-2 my-1.5">
      <p>test</p>
    </div>
  );
};
