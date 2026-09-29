import { Manrope } from 'next/font/google';
import '../globals.css';
import { baseMetadata } from '@/lib/metadata';

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' });
export const metadata = baseMetadata;

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className={manrope.variable}>{children}</body></html>;
}
