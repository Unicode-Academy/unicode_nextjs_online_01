type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="py-3">
      <div className="container">{children}</div>
    </main>
  );
}
