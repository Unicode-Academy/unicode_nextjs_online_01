import Menu from "./_components/Menu";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h2>Menu</h2>
            <Menu />
          </div>
          <div className="col-9">{children}</div>
        </div>
      </div>
    </main>
  );
}
