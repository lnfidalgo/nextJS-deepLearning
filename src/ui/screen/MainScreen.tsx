"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MainScreen() {
  const router = useRouter();
  return (
    <div className="w-full bg-red-100">
      <h1>Home</h1>
      <Button onClick={() => router.push("/carrinho#testeID")}>Teste ID</Button>
    </div>
  );
}
