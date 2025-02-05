import Image from "next/image";

export default function Divider({ title, styles }) {
  return (
    <div className={styles}>
      <h1>{title}</h1>
      <Image
        src="./addSquare.svg"
        width={20}
        height={20}
        alt="Vercel logomark"
      />
    </div>
  );
}
