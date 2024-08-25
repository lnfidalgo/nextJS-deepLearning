interface CarrinhoLayoutProps {
  children: React.ReactNode;
}

export default function CarrinhoLayout({ children }: CarrinhoLayoutProps) {
  return <section className="bg-emerald-300 w-full">{children}</section>;
}
