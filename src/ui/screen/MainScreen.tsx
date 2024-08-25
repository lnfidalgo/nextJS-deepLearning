import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainScreen() {
  return (
    <div className="w-full bg-red-100">
      <h1>Home</h1>
      <Link href={"/carrinho#testeID"}>
        <Button>Teste ID</Button>
      </Link>
    </div>
  );
}
