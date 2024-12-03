import Account from "./_components/Account";
import Logo from "./_components/Logo";
import Menu from "./_components/Menu";
import Topbar from "./_components/Topbar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Topbar />
        <div className="flex justify-between items-center py-10">
          <Logo />
          <Menu />
          <Account />
        </div>
      </div>
    </header>
  );
}
