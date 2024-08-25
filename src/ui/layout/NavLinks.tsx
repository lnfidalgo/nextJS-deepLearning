"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div>
      <Link href={"/"}>
        <Button className={`link ${pathname === "/" ? "active" : ""}`}>
          Home
        </Button>
      </Link>
      <Link href={"/carrinho"}>
        <Button className={`link ${pathname === "/carrinho" ? "active" : ""}`}>
          Carrinho
        </Button>
      </Link>
    </div>
  );
}
