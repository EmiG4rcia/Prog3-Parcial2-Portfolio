Portfolio — Emiliano García

Este repositorio contiene el código fuente del Portfolio Web Personal desarrollado como proyecto final para la materia Programación III (UTN).
El proyecto implementa una arquitectura basada en Vite + Vanilla JavaScript, con un enfoque modular y un diseño Retro-SciFi inspirado en Rick & Morty, Fallout, retro-computing y estética neon.

Stack Tecnológico
Tecnología	                                  -->                              Uso
Vite	                                        -->                         Dev Server + Bundler
HTML5                                         -->                        	Estructura del sitio
CSS3 (Neon UI, Glassmorphism, Animaciones)	  -->                         UI/UX personalizada
JavaScript (ES Modules)	                      -->                         Interactividad, lógica de portales y diálogos
Google Fonts (Orbitron)	                      -->                         Tipografía consistentemente aplicada
Assets personalizados (GIF, PNG, MP3)	        -->                          Estética retro-científica

 Arquitectura del Proyecto:

El proyecto sigue una estructura modular por página, alineada con los principios de component-based organization:

src/
 ├── assets/
 │     ├── gifs/
 │     ├── images/
 │     └── sounds/
 ├── pages/
 │     ├── home/
 │     ├── about/
 │     ├── resume/
 │     ├── skills/
 │     ├── projects/
 │     └── contact/
 ├── scripts.js          # Control global de interacciones
 └── style.css           # Estilos compartidos
public/
index.html               # Entry point gestionado por Vite
vite.config.js
package.json


✔ Cada página tiene su propio HTML totalmente independiente.
✔ Los estilos globales se aplican según body.className.
✔ scripts.js contiene listeners para portales, sonidos y elementos interactivos.

⚙️ Instalación Local
1️⃣ Clonar el repositorio
git clone https://github.com/EmiG4rcia/Prog3-Parcial2-Portfolio.git

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar en modo desarrollo
npm run dev


Servidor Vite disponible en:

👉 http://localhost:5173
