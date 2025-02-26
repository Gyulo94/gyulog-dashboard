import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="flex-1 bg-secondary dark:bg-bgSoft p-5">
        <Sidebar />
      </div>
      <div className="flex-4 p-5">
        <Header />
        {children}
      </div>
    </div>
  );
}
