import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // 🔹 le dice a Vite que el proyecto arranca desde /src
  publicDir: '../public', // 🔹 para tus assets estáticos
  build: {
    outDir: '../dist', // 🔹 dónde se guardará el build final
    emptyOutDir: true, // limpia la carpeta dist antes de build
  },
  server: {
    port: 5173, // podés cambiar el puerto si querés
    open: true, // abre el navegador automáticamente
  },
});
