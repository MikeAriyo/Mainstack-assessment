import Nav from "./components/nav/nav/nav";
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Dashboard | Mainstack</title>
        <link
          rel="shortcut icon"
          href="mainstack-logo.svg"
          type="image/x-icon"
        />
      </Head>
      <main className="flex min-w-[100vw] min-h-[100vh]">
        <Nav />
        <main>{children}</main>
      </main>
    </>
  );
}
