// src/app/api/placeholder/[width]/[height]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const { width, height } = params;
  
  // Genera un color aleatorio para el fondo
  const bgColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  
  // Elige letras aleatorias para el marcador de posición (por ejemplo, iniciales)
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter1 = letters.charAt(Math.floor(Math.random() * letters.length));
  const randomLetter2 = letters.charAt(Math.floor(Math.random() * letters.length));
  
  // Crear un SVG como marcador de posición
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="${Math.min(parseInt(width), parseInt(height)) / 2}px" 
        fill="white" text-anchor="middle" dominant-baseline="middle">
        ${randomLetter1}${randomLetter2}
      </text>
    </svg>
  `;
  
  // Devolver el SVG como respuesta
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
