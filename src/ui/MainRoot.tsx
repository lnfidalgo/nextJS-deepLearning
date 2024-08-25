interface MainRootProps {
  children: React.ReactNode;
}

export default function MainRoot({ children }: MainRootProps) {
  return (
    <div className="flex flex-col w-full px-6 min-h-screen items-center bg-sky-400">
      {children}
    </div>
  );
}
