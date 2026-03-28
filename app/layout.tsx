import type { Metadata } from 'next';
import './globals.css';
import { Home, BookOpen, Heart, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maobai - Learn Chinese',
  description: 'Gamified HSK Chinese learning app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream min-h-screen flex flex-col">
        {/* Main content area */}
        <main className="flex-1 pb-20 max-w-md mx-auto w-full">
          {children}
        </main>

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-md mx-auto flex justify-around items-center h-16">
            <NavItem icon={<Home size={24} />} label="Home" href="/" active />
            <NavItem icon={<BookOpen size={24} />} label="Learn" href="/learn" />
            <NavItem icon={<Heart size={24} />} label="Mend Hearts" href="/hearts" />
            <NavItem icon={<User size={24} />} label="Profile" href="/profile" />
          </div>
        </nav>
      </body>
    </html>
  );
}

function NavItem({ 
  icon, 
  label, 
  href, 
  active = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  href: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
        active ? 'text-bamboo' : 'text-gray-400 hover:text-gray-600'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
}
