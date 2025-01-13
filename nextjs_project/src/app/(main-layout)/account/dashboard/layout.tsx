import PageTitle from "../../_components/PageTitle/PageTitle";
import AccountDashboardSidebar from "./_components/AccountDashboardSidebar";

export default function AccountDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PageTitle pageName="Tài khoản" />
      <div className="container py-20">
        <div className="flex">
          <div className="w-[25%] px-10">
            <AccountDashboardSidebar />
          </div>
          <div className="w-[75%] px-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
