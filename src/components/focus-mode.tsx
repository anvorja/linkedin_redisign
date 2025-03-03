import React, { useState } from 'react';
import { X, ThumbsUp, MessageSquare, Share2, Bookmark, Book, ChevronLeft, Plus, Minus } from 'lucide-react';

// Importaciones de Shadcn UI
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const ArticleInFocusMode = () => {
  //const [isInFocusMode, setIsInFocusMode] = useState(true);
  const [fontSize, setFontSize] = useState('medium');
  
  // Función para controlar el cambio de tamaño de fuente
  const handleFontSize = (size) => {
    setFontSize(size);
  };
  
  // Estilos de fuente basados en la selección
  const getFontSize = () => {
    switch(fontSize) {
      case 'small': return 'text-base';
      case 'medium': return 'text-lg';
      case 'large': return 'text-xl';
      default: return 'text-lg';
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Barra de progreso de lectura */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="bg-blue-600 h-full" style={{ width: '35%' }}></div>
      </div>
      
      {/* Cabecera en modo enfocado */}
      <div className="max-w-3xl mx-auto flex justify-between items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-600"
          onClick={() => setIsInFocusMode(false)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver al feed
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-600"
          onClick={() => setIsInFocusMode(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Contenido principal */}
      <Card className="max-w-3xl mx-auto shadow-lg mb-16">
        <CardHeader className="p-6">
          <div className="flex items-start">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/api/placeholder/32/32" alt="María Rodríguez" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <h3 className="font-medium text-lg">María Rodríguez</h3>
              <p className="text-gray-500 text-sm">Design Lead at Innovation Labs • Publicado hace 2 días</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-3">Diseño centrado en el usuario: La clave para experiencias digitales exitosas</h1>
            <p className="text-gray-600">Un análisis de cómo el enfoque centrado en las necesidades del usuario está transformando el diseño de productos digitales.</p>
          </div>
        </CardHeader>
        
        <div className="px-6">
          <div className="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 mb-6">
            Imagen principal del artículo
          </div>
        </div>
        
        <CardContent className={`px-6 pt-4 space-y-6 ${getFontSize()} leading-relaxed`}>
          <p>En un mundo digital cada vez más saturado, crear experiencias que resuenen con los usuarios se ha convertido en el factor diferenciador clave para el éxito de cualquier producto. El diseño centrado en el usuario (UCD) no es solo una metodología; es una filosofía que pone las necesidades, limitaciones y preferencias del usuario final en el centro de cada decisión de diseño.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Por qué el diseño centrado en el usuario es crucial?</h2>
          
          <p>Cuando diseñamos con el usuario en mente, no solo creamos productos más intuitivos y fáciles de usar, sino que también construimos relaciones más fuertes con nuestra audiencia. Los usuarios que se sienten comprendidos tienden a ser más leales y comprometidos. Además, los productos que resuelven problemas reales tienen tasas de adopción más altas y generan mayor valor a largo plazo.</p>
          
          <p>Las empresas que han adoptado plenamente el UCD han visto resultados impresionantes. Por ejemplo, después de rediseñar su aplicación siguiendo principios de UCD, una importante plataforma de comercio electrónico informó un aumento del 35% en las conversiones y una reducción del 25% en las llamadas de soporte al cliente.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Principios fundamentales del diseño centrado en el usuario</h2>
          
          <p>El UCD se basa en varios principios clave que juntos forman un enfoque holístico para el diseño de productos:</p>
          
          <p><strong>1. Empatía genuina:</strong> Comprender profundamente a los usuarios, sus contextos, necesidades y limitaciones es el primer paso crítico. Esto va más allá de saber qué quieren los usuarios; implica entender por qué lo quieren y cómo encaja en su vida diaria.</p>
          
          <p><strong>2. Iteración constante:</strong> El buen diseño rara vez ocurre en el primer intento. El UCD abraza un proceso iterativo de diseñar, probar, aprender y refinar. Cada iteración nos acerca más a una solución óptima.</p>
          
          <p><strong>3. Inclusividad:</strong> Diseñar para todos significa considerar una amplia gama de capacidades, contextos y necesidades. Un producto verdaderamente centrado en el usuario es accesible para personas con diferentes habilidades y experiencias.</p>
        </CardContent>
        
        <CardFooter className="p-4 border-t border-gray-200 flex justify-between opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-5 w-5 mr-2" />
              Me gusta
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-5 w-5 mr-2" />
              Comentar
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-5 w-5 mr-2" />
              Compartir
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <Bookmark className="h-5 w-5 mr-2" />
            Guardar
          </Button>
        </CardFooter>
      </Card>
      
      {/* Controles flotantes del modo enfocado */}
      <TooltipProvider>
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full shadow-md">
                <Bookmark className="h-5 w-5 text-blue-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Guardar artículo</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full shadow-md">
                <Share2 className="h-5 w-5 text-blue-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Compartir artículo</p>
            </TooltipContent>
          </Tooltip>
        </div>
        
        <div className="fixed right-6 bottom-6 bg-white rounded-full shadow-md p-1 flex items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={fontSize === 'small' ? 'default' : 'ghost'} 
                size="icon" 
                className="rounded-full h-8 w-8"
                onClick={() => handleFontSize('small')}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Texto pequeño</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={fontSize === 'medium' ? 'default' : 'ghost'} 
                size="icon" 
                className="rounded-full h-8 w-8"
                onClick={() => handleFontSize('medium')}
              >
                <Book className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tamaño medio (predeterminado)</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant={fontSize === 'large' ? 'default' : 'ghost'} 
                size="icon" 
                className="rounded-full h-8 w-8"
                onClick={() => handleFontSize('large')}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Texto grande</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      
      {/* Información sobre características */}
      <div className="max-w-2xl mx-auto mt-16 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">Modo Enfocado</h2>
        <p className="text-gray-600 mb-6 text-center">Una experiencia de lectura distinta que elimina distracciones y mejora la concentración.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium text-blue-700">Diseño minimalista</h3>
            <p className="text-sm text-gray-600 mt-1">
              Interfaz limpia que elimina elementos no esenciales para mantener la atención en el contenido.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium text-blue-700">Control de texto</h3>
            <p className="text-sm text-gray-600 mt-1">
              Ajusta el tamaño del texto para una lectura más cómoda según tus preferencias.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium text-blue-700">Acciones rápidas</h3>
            <p className="text-sm text-gray-600 mt-1">
              Botones flotantes que permiten interactuar con el contenido sin interrumpir la lectura.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium text-blue-700">Indicador de progreso</h3>
            <p className="text-sm text-gray-600 mt-1">
              Barra superior que muestra el avance en el artículo para mejor orientación.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm">Modo Normal</p>
              </div>
              <div className="w-4 h-10 border-b-2 border-r-2 border-gray-300 mx-auto"></div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-500">
                <p className="text-sm font-medium">Modo Enfocado</p>
              </div>
              <div className="w-4 h-10 border-b-2 border-l-2 border-gray-300 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInFocusMode;
