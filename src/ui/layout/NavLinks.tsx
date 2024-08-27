"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavLinks() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex gap-5">
      <Button
        onClick={() => router.push("/")}
        className={`link ${pathname === "/" ? "active" : ""}`}
      >
        Home
      </Button>

      <Button
        onClick={() => router.push("/carrinho")}
        className={`link ${pathname === "/carrinho" ? "active" : ""}`}
      >
        Carrinho
      </Button>

      <Button
        onClick={() => router.push("/blog")}
        className={`link ${pathname === "/carrinho" ? "active" : ""}`}
      >
        Blog
      </Button>
      <Button
        onClick={() => router.push("/dashboard")}
        className={`link ${pathname === "/carrinho" ? "active" : ""}`}
      >
        Dashboard
      </Button>
    </div>
  );
}
