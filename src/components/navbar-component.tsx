import React from 'react';
import { Bell, Book, Briefcase, Home, MessageCircle, Search, Users, ChevronDown, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  focusMode: boolean;
  setFocusMode: (mode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, focusMode, setFocusMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <a href="#" className="text-blue-600 font-bold text-3xl">in</a>
          <div className="relative w-60 hidden md:flex">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="search" placeholder="Buscar" className="pl-9 bg-gray-100 border-none" />
          </div>
        </div>
        
        <nav className="ml-auto flex items-center gap-1 md:gap-4">
          <Button variant="ghost" className="flex flex-col items-center justify-center p-2 h-14" onClick={() => setCurrentTab('feed')}>
            <Home className={`h-5 w-5 ${currentTab === 'feed' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${currentTab === 'feed' ? 'text-blue-600' : 'text-gray-500'}`}>Inicio</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center p-2 h-14" onClick={() => setCurrentTab('network')}>
            <Users className={`h-5 w-5 ${currentTab === 'network' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${currentTab === 'network' ? 'text-blue-600' : 'text-gray-500'}`}>Mi Red</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center p-2 h-14" onClick={() => setCurrentTab('jobs')}>
            <Briefcase className={`h-5 w-5 ${currentTab === 'jobs' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${currentTab === 'jobs' ? 'text-blue-600' : 'text-gray-500'}`}>Empleos</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center p-2 h-14 relative" onClick={() => setCurrentTab('messages')}>
            <MessageCircle className={`h-5 w-5 ${currentTab === 'messages' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${currentTab === 'messages' ? 'text-blue-600' : 'text-gray-500'}`}>Mensajes</span>
            <Badge className="absolute top-2 right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center justify-center p-2 h-14 relative" onClick={() => setCurrentTab('notifications')}>
            <Bell className={`h-5 w-5 ${currentTab === 'notifications' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs mt-1 ${currentTab === 'notifications' ? 'text-blue-600' : 'text-gray-500'}`}>Notificaciones</span>
            <Badge className="absolute top-2 right-1 h-5 w-5 flex items-center justify-center p-0">5</Badge>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex flex-col items-center justify-center p-2 h-14">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/api/placeholder/32/32" alt="Perfil" />
                  <AvatarFallback>CA</AvatarFallback>
                </Avatar>
                <span className="text-xs mt-1 flex items-center">Tú <ChevronDown className="h-3 w-3 ml-1" /></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Ver perfil</DropdownMenuItem>
              <DropdownMenuItem>Configuración y privacidad</DropdownMenuItem>
              <DropdownMenuItem>Ayuda</DropdownMenuItem>
              <DropdownMenuItem>Idioma</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" className="ml-2 hidden md:flex" onClick={() => setFocusMode(!focusMode)}>
            {focusMode ? <X className="h-4 w-4 mr-2" /> : <Book className="h-4 w-4 mr-2" />}
            {focusMode ? 'Salir del modo enfocado' : 'Modo enfocado'}
          </Button>
        </nav>
      </div>
    </header>
  );
};



export default Navbar;
