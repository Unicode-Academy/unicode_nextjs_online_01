export const metadata = {
  title: "Unicode Academy",
  description: "Học lập trình tại Unicode Academy",
  keywords: "học lập trình, front-end, back-end",
  openGraph: {
    images: [
      "https://unicodeacademy.com/images/og-1.png",
      "https://unicodeacademy.com/images/og-2.png",
      "https://unicodeacademy.com/images/og-3.png",
    ],
  },
  // icons: [
  //   {
  //     rel: "icon",
  //     url: "https://static-00.iconduck.com/assets.00/file-type-favicon-icon-2048x2048-q7lmo5fn.png",
  //   },
  // ],
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};
import Menu from "./_components/Menu";
import Provider from "./_components/Provider";

export default function RootLayout({ children }) {
  const token = "ahihi";
  return (
    <html lang="en">
      <body>
        <Menu />
        <hr />
        <Provider token={token}>{children}</Provider>
      </body>
    </html>
  );
}
