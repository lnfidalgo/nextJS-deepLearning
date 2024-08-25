"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";

export default function Carrinho() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  const pathname = usePathname();

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <div>
      <div className="h-[900px]">
        <h2>Carrinho</h2>
      </div>
      <div className="h-[900px]">
        <Button onClick={() => updateSorting("asc")}>Sort Ascending</Button>
        <Button onClick={() => updateSorting("desc")}>Sort Descending</Button>
      </div>
      <div className="h-[900px]">
        <Button onClick={() => switchLocale("en")}>English</Button>
        <Button onClick={() => switchLocale("fr")}>French</Button>
      </div>
      <div className="h-[900px]">
        <h2 id="testeID">Teste de rota com ID</h2>
      </div>
    </div>
  );
}
