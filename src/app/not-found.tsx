import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Não existe</h1>
      <Link href={"/"}>Voltar home</Link>
    </div>
  );
}
