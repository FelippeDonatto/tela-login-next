import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Tela de Login',
  applicationName: 'Tela de Login - Next.Js 13',
  keywords: ['Next.js', 'Next.Js 13', 'Design System'],
  authors: 'Felippe Donatto',
  colorScheme: 'dark',
  description:
    'Tela de Login Front end desenvolvida em Next Js na sua versão 13',
  url: 'https://tela-login-next.vercel.app/'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="bg-gray-900 text-gray-100">{children}</body>
    </html>
  )
}
