"use client";

import React, { useState } from 'react';
import { Camera, Video, Calendar, FileText, Globe, ChevronDown, Hash, Image, BarChart2, HelpCircle, Users, Lock, Clock, Plus } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const PostCreator = () => {
  const [postText, setPostText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('analysis');
  const [previewDevice, setPreviewDevice] = useState('mobile');
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* Componente de creación simplificado (en el feed) */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-10 flex-1 justify-start text-gray-500 font-normal">
                  Crear publicación...
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Crear publicación</DialogTitle>
                  <DialogDescription>
                    Comparte tus ideas, experiencias o noticias con tu red profesional.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {/*<AvatarImage src="/api/placeholder/48/48" alt="Carlos Andrés" />*/}
                      <AvatarFallback>CA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Catalina Melo</p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="h-6 mt-1 text-xs">
                            <Globe className="h-3 w-3 mr-1" /> Cualquiera
                            <ChevronDown className="h-3 w-3 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem>
                            <Globe className="h-4 w-4 mr-2" /> Cualquiera
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" /> Conexiones
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Lock className="h-4 w-4 mr-2" /> Solo yo
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  
                  <textarea 
                    className="w-full min-h-[150px] border-none resize-none focus:outline-none text-base"
                    placeholder="¿Sobre qué quieres hablar?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                  ></textarea>
                  
                  {/* Plantillas */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Plantillas</p>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <Card 
                        className={`min-w-[140px] cursor-pointer hover:border-blue-500 transition-colors ${selectedTemplate === 'idea' ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedTemplate('idea')}
                      >
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl mb-2">💡</div>
                          <p className="text-sm font-medium">Idea</p>
                          <p className="text-xs text-gray-500">Comparte un consejo o insight</p>
                        </CardContent>
                      </Card>
                      <Card 
                        className={`min-w-[140px] cursor-pointer hover:border-blue-500 transition-colors ${selectedTemplate === 'analysis' ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedTemplate('analysis')}
                      >
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl mb-2">📊</div>
                          <p className="text-sm font-medium">Análisis</p>
                          <p className="text-xs text-gray-500">Comparte datos o tendencias</p>
                        </CardContent>
                      </Card>
                      <Card 
                        className={`min-w-[140px] cursor-pointer hover:border-blue-500 transition-colors ${selectedTemplate === 'question' ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedTemplate('question')}
                      >
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl mb-2">❓</div>
                          <p className="text-sm font-medium">Pregunta</p>
                          <p className="text-xs text-gray-500">Genera conversación</p>
                        </CardContent>
                      </Card>
                      <Card 
                        className={`min-w-[140px] cursor-pointer hover:border-blue-500 transition-colors ${selectedTemplate === 'job' ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => setSelectedTemplate('job')}
                      >
                        <CardContent className="p-3 text-center">
                          <div className="text-2xl mb-2">💼</div>
                          <p className="text-sm font-medium">Oferta laboral</p>
                          <p className="text-xs text-gray-500">Publica una vacante</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Hashtags sugeridos */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer">#UXDesign</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer">#Desarrollo</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer">#Python</Badge>
                    <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 cursor-pointer">+ Añadir hashtag</Badge>
                  </div>
                  
                  {/* Vista previa */}
                  <div className="border rounded-md mt-4">
                    <Tabs defaultValue={previewDevice} onValueChange={setPreviewDevice}>
                      <div className="border-b px-4">
                        <TabsList className="bg-transparent h-10">
                          <TabsTrigger value="mobile" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-10">
                            Vista móvil
                          </TabsTrigger>
                          <TabsTrigger value="desktop" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-10">
                            Vista escritorio
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      
                      <TabsContent value="mobile" className="p-4 border-l-4 border-gray-200 m-4 space-y-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          <div className="ml-2">
                            <p className="text-sm font-medium">Catalina Melo</p>
                            <p className="text-xs text-gray-500">Software Engineering | Back-end Developer</p>
                          </div>
                        </div>
                        <p className="text-sm mt-2">
                          {postText || "Acabo de analizar las tendencias en diseño UX para 2025. El minimalismo y la accesibilidad serán fundamentales."}
                        </p>
                        {selectedTemplate === 'analysis' && (
                          <div className="bg-gray-100 h-24 flex items-center justify-center text-xs text-gray-500 rounded">
                            [Gráfico o imagen del análisis]
                          </div>
                        )}
                        <p className="text-xs text-blue-600">
                          {selectedTemplate === 'analysis' ? '#UXDesign #Tendencias2025 #Análisis' : selectedTemplate === 'idea' ? '#Ideas #Innovación' : selectedTemplate === 'question' ? '#Opiniones #Debate' : '#Empleo #Oportunidades'}
                        </p>
                      </TabsContent>
                      
                      <TabsContent value="desktop" className="p-4 m-4 border rounded space-y-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                          <div className="ml-3">
                            <p className="font-medium">Catalina Melo</p>
                            <p className="text-sm text-gray-500">Software Engineering | Back-end Developer • 1h</p>
                          </div>
                        </div>
                        
                        {selectedTemplate === 'analysis' && (
                          <h3 className="font-semibold text-lg">Análisis: Tendencias UX 2025</h3>
                        )}
                        
                        <p className="text-base">
                          {postText || "Acabo de analizar las tendencias en diseño UX para 2025. El minimalismo y la accesibilidad serán fundamentales."}
                        </p>
                        
                        {selectedTemplate === 'analysis' && (
                          <div className="bg-gray-100 h-40 flex items-center justify-center text-sm text-gray-500 rounded">
                            [Gráfico o imagen del análisis]
                          </div>
                        )}
                        
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="outline" className="bg-blue-50 text-blue-600">
                            {selectedTemplate === 'analysis' ? '#UXDesign' : selectedTemplate === 'idea' ? '#Ideas' : selectedTemplate === 'question' ? '#Opiniones' : '#Empleo'}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-600">
                            {selectedTemplate === 'analysis' ? '#Tendencias2025' : selectedTemplate === 'idea' ? '#Innovación' : selectedTemplate === 'question' ? '#Debate' : '#Oportunidades'}
                          </Badge>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
                
                <DialogFooter className="border-t pt-4">
                  <div className="flex gap-2 mr-auto">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <BarChart2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Programar
                    </Button>
                    <Button type="submit">Publicar</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="flex border-t mt-3 pt-3">
            <Button variant="ghost" className="flex-1">
              <Camera className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm text-gray-600">Foto</span>
            </Button>
            <Button variant="ghost" className="flex-1">
              <Video className="h-5 w-5 mr-2 text-green-600" />
              <span className="text-sm text-gray-600">Video</span>
            </Button>
            <Button variant="ghost" className="flex-1">
              <Calendar className="h-5 w-5 mr-2 text-amber-600" />
              <span className="text-sm text-gray-600">Evento</span>
            </Button>
            <Button variant="ghost" className="flex-1">
              <FileText className="h-5 w-5 mr-2 text-red-600" />
              <span className="text-sm text-gray-600">Artículo</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Descripción de características */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Creación de Contenido Mejorada</h2>
        <p className="text-gray-600 mb-4">Este rediseño ofrece una experiencia más intuitiva y potente para compartir contenido en LinkedIn.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 flex items-center">
              <Plus className="h-5 w-5 mr-2"/>
              Plantillas profesionales
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Acceso rápido a plantillas para diferentes tipos de contenido: ideas, análisis, preguntas y ofertas de trabajo.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 flex items-center">
              <Hash className="h-5 w-5 mr-2"/>
              Hashtags inteligentes
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Sugerencias contextuales basadas en tu industria y el contenido que estás compartiendo.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2"/>
              Vista previa en diferentes dispositivos
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Visualiza cómo se verá tu publicación tanto en móvil como en escritorio antes de publicarla.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-700 flex items-center">
              <Clock className="h-5 w-5 mr-2"/>
              Programación integrada
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Programa tus publicaciones para el momento óptimo y maximiza su alcance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
