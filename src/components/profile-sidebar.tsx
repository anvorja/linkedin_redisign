import React, { useState } from 'react';
import { Bookmark, Plus, ChevronUp, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ProfileSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showAllShortcuts, setShowAllShortcuts] = useState(true);
  
  if (isCollapsed) {
    return (
      <Card className="text-center p-4">
        <Avatar className="h-12 w-12 mx-auto mb-2">
          <AvatarFallback>CA</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">Carlos A.</p>
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-2 mx-auto" 
          onClick={() => setIsCollapsed(false)}
        >
          Expandir
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="p-0">
          <div className="bg-blue-100 h-14 relative"></div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 h-6 w-6" 
            onClick={() => setIsCollapsed(true)}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <div className="px-4 pt-8 pb-2 text-center relative">
            <Avatar className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-12 w-12 border-4 border-white">
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <CardTitle className="text-base">Catalina Melo</CardTitle>
            <CardDescription className="text-xs mt-1">
              Software Engineering | Back-end Developer | Python | Django
            </CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="p-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Quién ha visto tu perfil</span>
              <span className="font-medium text-blue-600">26</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Impresiones de tu publicación</span>
              <span className="font-medium text-blue-600">143</span>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardContent className="p-4">
          <p className="text-xs text-gray-500 mb-3">Accede a herramientas y estadísticas exclusivas</p>
          <Button variant="ghost" className="w-full justify-start text-xs h-auto py-1">
            <span className="text-amber-600 font-medium mr-1">⭐</span> Prueba Premium gratis
          </Button>
        </CardContent>
        <Separator />
        <CardContent className="p-4">
          <div className="space-y-2">
            <Button variant="link" className="p-0 h-auto text-blue-600 justify-start">
              <Bookmark className="h-4 w-4 mr-2" />
              Mis elementos
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="py-3 px-4">
          <CardTitle className="text-sm">Mis accesos directos</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-1 text-sm">
            <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
              <span className="bg-blue-100 text-blue-800 w-6 h-6 flex items-center justify-center rounded mr-2 text-xs">G</span>
              Grupos
            </Button>
            <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
              <span className="bg-green-100 text-green-800 w-6 h-6 flex items-center justify-center rounded mr-2 text-xs">C</span>
              Conexiones
            </Button>
            {showAllShortcuts && (
              <>
                <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
                  <span className="bg-yellow-100 text-yellow-800 w-6 h-6 flex items-center justify-center rounded mr-2 text-xs">E</span>
                  Eventos
                </Button>
                <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
                  <span className="bg-purple-100 text-purple-800 w-6 h-6 flex items-center justify-center rounded mr-2 text-xs">P</span>
                  Páginas
                </Button>
                <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
                  <span className="bg-red-100 text-red-800 w-6 h-6 flex items-center justify-center rounded mr-2 text-xs">B</span>
                  Boletines
                </Button>
                <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
                  <span className="bg-gray-100 text-gray-800 w-6 h-6 flex items-center justify-center rounded mr-2 text-xs">H</span>
                  Hashtags
                </Button>
              </>
            )}
            <Button variant="ghost" className="w-full justify-start px-2 py-1 h-8">
              <Plus className="h-4 w-4 mr-2" />
              Añadir acceso directo
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-500 mt-2 w-full flex items-center justify-center"
            onClick={() => setShowAllShortcuts(!showAllShortcuts)}
          >
            {showAllShortcuts ? (
              <>
                Ver menos <ChevronUp className="h-3 w-3 ml-1" />
              </>
            ) : (
              <>
                Ver más <ChevronDown className="h-3 w-3 ml-1" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};


export default ProfileSidebar;
