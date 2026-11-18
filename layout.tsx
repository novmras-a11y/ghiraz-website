import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {site} from '@/lib/site';
export const metadata: Metadata = {title:{default:site.name,template:'%s | غراز'},description:site.description,icons:{icon:'/ghiraz-logo.png'},openGraph:{title:site.name,description:site.description,locale:'ar_SA',type:'website',images:['/images/01_drinks.webp']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body><Header/>{children}<Footer/></body></html>}
