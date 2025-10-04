'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { CineWriteIcon } from './icons';
import {
    BookOpen,
    CheckCheck,
    ChevronUp,
    Lightbulb,
    LogOut,
    Palette,
    Settings,
    Sparkles,
} from 'lucide-react';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';

const menuItems = [
    { href: '/dashboard/chapter-generator', label: 'Chapter Generator', icon: <Sparkles /> },
    { href: '/dashboard/literary-styler', label: 'Literary Styler', icon: <Palette /> },
    { href: '/dashboard/cover-generator', label: 'AI Cover Generator', icon: <BookOpen /> },
    { href: '/dashboard/consistency-analyzer', label: 'Consistency Analyzer', icon: <CheckCheck /> },
    { href: '/dashboard/idea-organizer', label: 'Idea Organizer', icon: <Lightbulb /> },
];

export function UserSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const getInitials = (name?: string | null) => {
    if (!name) return '';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return names[0].substring(0, 2);
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex w-full items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 font-headline text-lg">
            <CineWriteIcon className="h-6 w-6" />
            <span className="text-sidebar-foreground">CineWrite AI</span>
          </Link>
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href)}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col gap-2">
            {user && (
              <div className='flex flex-row items-center gap-2 p-2 rounded-md bg-sidebar-accent/50 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:justify-center'>
                  <Avatar className="h-8 w-8 group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-10">
                      <AvatarImage src={user.photoURL || `https://avatar.vercel.sh/${user.uid}.png`} alt={user.displayName || 'User'} />
                      <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 group-data-[collapsible=icon]:hidden">
                      <p className="text-sm font-semibold text-sidebar-foreground">{user.displayName}</p>
                      <p className="text-xs text-sidebar-foreground/70">Pro Plan - 3,450 credits</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 group-data-[collapsible=icon]:hidden"><ChevronUp /></Button>
              </div>
            )}
          
            <SidebarMenu>
                <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                    <Link href="/dashboard/settings">
                    <Settings />
                    <span>Settings</span>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                    <LogOut />
                    <span>Logout</span>
                </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
