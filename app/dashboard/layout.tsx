import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        {children}
      </div>
    </main>
  );
}
