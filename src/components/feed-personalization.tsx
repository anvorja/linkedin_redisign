import React, { useState } from 'react';
import { Settings, Home, Users, BookOpen, TrendingUp, X, Plus } from 'lucide-react';

// Importaciones de Shadcn UI
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FeedPersonalization = () => {
  // Estados para configuraciones
  const [networkBalance, setNetworkBalance] = useState(70);
  const [updateFrequency, setUpdateFrequency] = useState(100);
  const [interests, setInterests] = useState(['UX/UI', 'Desarrollo Web', 'Python', 'Tecnología']);
  const [newInterest, setNewInterest] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState('all');
  const [selectedView, setSelectedView] = useState('general');
  
  // Preferencias
  const [preferences, setPreferences] = useState({
    prioritizeNetwork: true,
    showIndustryNews: true,
    showLearningContent: true,
    showJobs: false
  });
  
  // Manejador para añadir nuevo interés
  const handleAddInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };
  
  // Manejador para eliminar interés
  const handleRemoveInterest = (interest) => {
    setInterests(interests.filter(item => item !== interest));
  };
  
  // Manejador para cambiar preferencias
  const handleTogglePreference = (key) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key]
    });
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Filtros rápidos del feed */}
      <div className="mb-6 overflow-x-auto bg-white rounded-md p-3 shadow-sm">
        <div className="flex gap-2 pb-2">
          <Button 
            variant={activeFilterTab === 'all' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveFilterTab('all')}
          >
            Todo
          </Button>
          <Button 
            variant={activeFilterTab === 'network' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveFilterTab('network')}
          >
            Mi red
          </Button>
          <Button 
            variant={activeFilterTab === 'tech' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full whitespace-nowrap"
            onClick={() => setActiveFilterTab('tech')}
          >
            Tecnología
          </Button>
          <Button 
            variant={activeFilterTab === 'ux' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveFilterTab('ux')}
          >
            UX/UI
          </Button>
          <Button 
            variant={activeFilterTab === 'dev' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full whitespace-nowrap"
            onClick={() => setActiveFilterTab('dev')}
          >
            Desarrollo
          </Button>
          <Button 
            variant={activeFilterTab === 'jobs' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveFilterTab('jobs')}
          >
            Empleos
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <Settings className="h-4 w-4 mr-1" />
                Personalizar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Personaliza tu feed</DialogTitle>
                <DialogDescription>
                  Ajusta qué contenido ves y cómo se organiza tu feed de LinkedIn.
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="content" className="mt-4">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="content">Contenido</TabsTrigger>
                  <TabsTrigger value="balance">Balance</TabsTrigger>
                  <TabsTrigger value="views">Vistas</TabsTrigger>
                </TabsList>
                
                {/* Pestaña de Contenido */}
                <TabsContent value="content" className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-600">Preferencias de contenido</h3>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="prioritize-network" className="flex flex-col">
                        <span>Priorizar conexiones</span>
                        <span className="text-xs text-gray-500">Muestra más contenido de tu red profesional</span>
                      </Label>
                      <Switch 
                        id="prioritize-network" 
                        checked={preferences.prioritizeNetwork}
                        onCheckedChange={() => handleTogglePreference('prioritizeNetwork')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="show-news" className="flex flex-col">
                        <span>Mostrar noticias del sector</span>
                        <span className="text-xs text-gray-500">Incluye actualizaciones relevantes de la industria</span>
                      </Label>
                      <Switch 
                        id="show-news" 
                        checked={preferences.showIndustryNews}
                        onCheckedChange={() => handleTogglePreference('showIndustryNews')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="show-learning" className="flex flex-col">
                        <span>Contenido educativo</span>
                        <span className="text-xs text-gray-500">Muestra cursos y contenido de aprendizaje</span>
                      </Label>
                      <Switch 
                        id="show-learning" 
                        checked={preferences.showLearningContent}
                        onCheckedChange={() => handleTogglePreference('showLearningContent')}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="show-jobs" className="flex flex-col">
                        <span>Ofertas de empleo</span>
                        <span className="text-xs text-gray-500">Muestra oportunidades laborales relevantes</span>
                      </Label>
                      <Switch 
                        id="show-jobs" 
                        checked={preferences.showJobs}
                        onCheckedChange={() => handleTogglePreference('showJobs')}
                      />
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <h3 className="text-sm font-medium text-gray-600">Temas de interés</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {interests.map(interest => (
                        <Badge key={interest} variant="outline" className="bg-blue-50 text-blue-600 py-1">
                          {interest}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-4 w-4 ml-1 hover:bg-blue-100 rounded-full"
                            onClick={() => handleRemoveInterest(interest)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 mt-2">
                      <Input 
                        placeholder="Añadir nuevo interés" 
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={handleAddInterest}>
                        <Plus className="h-4 w-4 mr-1" />
                        Añadir
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Pestaña de Balance */}
                <TabsContent value="balance" className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium">Conexiones vs. Descubrimiento</Label>
                        <span className="text-sm font-medium text-blue-600">{networkBalance}%</span>
                      </div>
                      <Slider 
                        defaultValue={[networkBalance]} 
                        max={100} 
                        step={10}
                        onValueChange={(value) => setNetworkBalance(value[0])}
                        className="mb-1"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Solo red</span>
                        <span>Equilibrado</span>
                        <span>Descubrir</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-sm font-medium">Frecuencia de actualización</Label>
                        <span className="text-sm font-medium text-blue-600">
                          {updateFrequency === 0 ? 'Diario' : 
                           updateFrequency === 50 ? 'Cada hora' : 
                           'Tiempo real'}
                        </span>
                      </div>
                      <Slider 
                        defaultValue={[updateFrequency]} 
                        max={100} 
                        step={50}
                        onValueChange={(value) => setUpdateFrequency(value[0])}
                        className="mb-1"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Diario</span>
                        <span>Cada hora</span>
                        <span>Tiempo real</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Pestaña de Vistas */}
                <TabsContent value="views" className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-600">Vistas personalizadas</h3>
                  
                  <RadioGroup 
                    value={selectedView} 
                    onValueChange={setSelectedView} 
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="general"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${selectedView === 'general' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}
                    >
                      <RadioGroupItem value="general" id="general" className="sr-only" />
                      <Home className="h-10 w-10 mb-2 text-blue-600" />
                      <span className="font-medium">General</span>
                      <span className="text-xs text-gray-500 text-center mt-1">Vista balanceada de todo el contenido</span>
                    </Label>
                    
                    <Label
                      htmlFor="network"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${selectedView === 'network' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}
                    >
                      <RadioGroupItem value="network" id="network" className="sr-only" />
                      <Users className="h-10 w-10 mb-2 text-blue-600" />
                      <span className="font-medium">Solo Mi Red</span>
                      <span className="text-xs text-gray-500 text-center mt-1">Exclusivamente contenido de tus conexiones</span>
                    </Label>
                    
                    <Label
                      htmlFor="trends"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${selectedView === 'trends' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}
                    >
                      <RadioGroupItem value="trends" id="trends" className="sr-only" />
                      <TrendingUp className="h-10 w-10 mb-2 text-blue-600" />
                      <span className="font-medium">Tendencias</span>
                      <span className="text-xs text-gray-500 text-center mt-1">Lo más relevante de tu sector</span>
                    </Label>
                    
                    <Label
                      htmlFor="learning"
                      className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${selectedView === 'learning' ? 'border-2 border-blue-500 bg-blue-50' : ''}`}
                    >
                      <RadioGroupItem value="learning" id="learning" className="sr-only" />
                      <BookOpen className="h-10 w-10 mb-2 text-blue-600" />
                      <span className="font-medium">Aprendizaje</span>
                      <span className="text-xs text-gray-500 text-center mt-1">Contenido educativo y formativo</span>
                    </Label>
                  </RadioGroup>
                  
                  <Button variant="outline" className="w-full mt-2">
                    <Plus className="h-4 w-4 mr-1" />
                    Crear nueva vista
                  </Button>
                </TabsContent>
              </Tabs>
              
              <DialogFooter className="mt-6">
                <Button type="submit">Guardar preferencias</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* Tarjeta de demo del feed */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl">Tu feed personalizado</CardTitle>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Configurar
          </Button>
        </CardHeader>
        <CardContent>
          {/* Post de ejemplo */}
          <div className="space-y-6">
            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">Elena Gómez</h3>
                    <Badge className="ml-2 bg-blue-100 text-blue-800 text-xs font-normal">Relevante para ti</Badge>
                  </div>
                  <p className="text-gray-500 text-sm">UX/UI Designer at Creative Labs</p>
                  <p className="mt-2">Acabo de publicar un nuevo estudio sobre patrones de diseño para aplicaciones móviles en 2025. ¡Los invito a leerlo!</p>
                  <div className="mt-3 h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                    Imagen del estudio de UX
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">TechNews</h3>
                    <Badge className="ml-2 bg-amber-100 text-amber-800 text-xs font-normal">Noticias</Badge>
                  </div>
                  <p className="text-gray-500 text-sm">Plataforma de noticias tecnológicas</p>
                  <p className="mt-2">Las 10 tendencias en desarrollo web que dominarán 2025. Frameworks modernos, microservicios y más.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Información sobre la personalización del feed */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">Personalización del Feed</h2>
        <p className="text-gray-600 mb-6 text-center">
          Un sistema completo para personalizar tu experiencia en LinkedIn y ver contenido realmente relevante.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col h-full">
            <h3 className="font-medium text-blue-700 mb-2">Controles intuitivos</h3>
            <p className="text-sm text-gray-600 mb-auto">
              Ajusta fácilmente qué tipo de contenido aparece en tu feed con controles simples pero potentes.
            </p>
            <div className="mt-3 text-xs text-blue-600">
              Sliders, toggles y botones fáciles de usar
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col h-full">
            <h3 className="font-medium text-blue-700 mb-2">Temas de interés</h3>
            <p className="text-sm text-gray-600 mb-auto">
              Gestiona los temas que te interesan para recibir contenido más relevante a tus necesidades profesionales.
            </p>
            <div className="mt-3 text-xs text-blue-600">
              Añade o elimina intereses fácilmente
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col h-full">
            <h3 className="font-medium text-blue-700 mb-2">Vistas personalizadas</h3>
            <p className="text-sm text-gray-600 mb-auto">
              Cambia rápidamente entre diferentes configuraciones del feed según lo que quieras ver en cada momento.
            </p>
            <div className="mt-3 text-xs text-blue-600">
              Vistas preconfiguradas para diferentes contextos
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col h-full">
            <h3 className="font-medium text-blue-700 mb-2">Filtros rápidos</h3>
            <p className="text-sm text-gray-600 mb-auto">
              Acceso inmediato a filtros que te permiten enfocar tu atención en categorías específicas de contenido.
            </p>
            <div className="mt-3 text-xs text-blue-600">
              Cambia entre filtros con un solo clic
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-lg mb-2">
            <div className="flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Todas estas configuraciones se guardan automáticamente en tu perfil y pueden cambiarse en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedPersonalization;
