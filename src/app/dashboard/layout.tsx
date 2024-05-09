import Navbar from '../ui/dashboard/navbar';
import Sidebar from '../ui/dashboard/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <div className="w-1/4 bg-[--bgSoft] p-5 min-h-screen">
        <Sidebar />
      </div>
      <div className="w-3/4 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
