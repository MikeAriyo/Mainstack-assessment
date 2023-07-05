import DashBoard from "./components/dashboard";
import Nav from "./components/nav/nav/nav";
import "./globals.css";
import Head from "next/head";
import style from "./styles/sidebar.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${style.sidebar}`}>
      <Head>
        <title>Dashboard | Mainstack</title>
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
      </Head>
      <main className={`flex min-w-[100vw] min-h-[100vh] ${style.sidebar}`}>
        <Nav />
        <main>
          <DashBoard />
        </main>
      </main>
    </div>
  );
}
