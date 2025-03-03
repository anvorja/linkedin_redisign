// src/app/linkedin-redesign/page.tsx
"use client"

import React, { useState } from 'react'
import Navbar from '@/components/navbar-component'
import ProfileSidebar from '@/components/profile-sidebar'
import PostCreator from '@/components/post-creation'
import FocusMode from '@/components/focus-mode'
import FeedPersonalization from '@/components/feed-personalization'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Book, Layout, MessageSquare, Settings, Users } from 'lucide-react'

export default function LinkedInRedesign() {
  const [currentTab, setCurrentTab] = useState('feed')
  const [focusMode, setFocusMode] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
        focusMode={focusMode}
        setFocusMode={setFocusMode}
      />
      
      <div className="container mx-auto p-4 pt-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">LinkedIn Rediseñado</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          Una experiencia moderna, intuitiva y centrada en el usuario que integra las mejoras propuestas para LinkedIn
        </p>
        
        {focusMode ? (
          <FocusMode />
        ) : (
          <Tabs defaultValue="overview" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview">
                <Layout className="h-4 w-4 mr-2" />
                Vista General
              </TabsTrigger>
              <TabsTrigger value="profile">
                <Users className="h-4 w-4 mr-2" />
                Perfil Lateral
              </TabsTrigger>
              <TabsTrigger value="posting">
                <MessageSquare className="h-4 w-4 mr-2" />
                Creación de Contenido
              </TabsTrigger>
              <TabsTrigger value="focus">
                <Book className="h-4 w-4 mr-2" />
                Modo Enfocado
              </TabsTrigger>
              <TabsTrigger value="personalization">
                <Settings className="h-4 w-4 mr-2" />
                Personalización
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <ProfileSidebar />
                </div>
                <div className="md:col-span-2">
                  <PostCreator />
                  <div className="mt-6"></div>
                  <FeedPersonalization />
                </div>
                <div className="md:col-span-1">
                  {/* Área de recomendaciones (podría agregar aquí) */}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="max-w-xs mx-auto">
              <ProfileSidebar />
            </TabsContent>
            
            <TabsContent value="posting">
              <PostCreator />
            </TabsContent>
            
            <TabsContent value="focus">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-600 mb-4">A continuación se muestra una demostración del modo enfocado para mejorar la experiencia de lectura</p>
                <button 
                  className="bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => setFocusMode(true)}
                >
                  <Book className="h-4 w-4 mr-2 inline" />
                  Entrar en Modo Enfocado
                </button>
              </div>
              <div className="opacity-50 pointer-events-none">
                <FocusMode />
              </div>
            </TabsContent>
            
            <TabsContent value="personalization">
              <FeedPersonalization />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
