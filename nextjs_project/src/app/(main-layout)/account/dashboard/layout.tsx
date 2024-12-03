import AccountDashboardSidebar from "./_components/AccountDashboardSidebar";

export default function AccountDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AccountDashboardSidebar />
      {children}
    </div>
  );
}
