import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { UserSidebar } from '@/components/user-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <SidebarInset>
        <div className="min-h-screen">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
