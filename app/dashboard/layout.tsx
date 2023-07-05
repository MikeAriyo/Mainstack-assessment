import DashBoard from "./page";
import Nav from "../nav/nav";
// import "./globals.css";
import style from "../styles/sidebar.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${style.sidebar}`}>
      <main className={`flex min-w-[100vw] min-h-[100vh] ${style.sidebar}`}>
        <Nav />
        <main>
          <DashBoard />
        </main>
      </main>
    </div>
  );
}
