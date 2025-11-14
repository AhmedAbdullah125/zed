import './globals.css';
import '@/src/style/main.css';
import '@/src/style/all.min.css'
import NavBar from '@/components/navBar/NavBar';
import Footer from '@/components/footer/Footer';
import ClientProviders from '@/src/utils/providers/ClientProviders';
// import logo from '@/public/images/blue-logo.svg';

export async function generateMetadata() {
  return {
    title: 'Zed',
    description: 'Zed',
    keywords: 'Zed',
    openGraph: {
      title: 'Zed',
      description: 'Zed',
      url: 'Zed-rose.vercel.com',
      siteName: 'Zed',
      images: [
        {
          url: 'https://Zed-rose.vercel.app/_next/static/media/blue-logo.62b83cbf.svg',
          width: 1200,
          height: 630,
          alt: 'Zed',
        },
      ],
      type: 'website',
      locale: 'ar_SA',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          <NavBar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
