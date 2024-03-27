import Sidebar from "@/components/sidebar/Sidebar";

;

export default function  DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="text-gray-950   overflow-y-scroll w-screen h-screen antialiased  selection:bg-blue-600 ">
    <div className="flex">
        
        <Sidebar  />
        <div className="w-full  font-semibold ml-96 ">
                    {children}
                </div>
           
    </div>
</div>
    );
}
