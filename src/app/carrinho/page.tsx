"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Carrinho() {
  const searchParams = useSearchParams();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  const pathname = usePathname();

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
        <h2 id="testeID">Teste de rota com ID</h2>
      </div>
    </div>
  );
}
