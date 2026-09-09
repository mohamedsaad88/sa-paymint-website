import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

// Use the same Node/Vite runtime locally as the static production build.
// No Sites sign-in, Cloudflare bindings or worker emulator is needed.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  // Vinext's internal client modules must retain their RSC boundaries instead
  // of being independently pre-bundled by the development dependency scanner.
  optimizeDeps: {
    exclude: ['vinext', 'next/link', 'next/navigation', 'lucide-react'],
  },
  plugins: [vinext()],
});
