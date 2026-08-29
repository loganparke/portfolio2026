import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loganparke.com"),
  title: {
    default: "Logan Parke | Full-Stack Engineer & MarTech Leader",
    template: "%s | Logan Parke",
  },
  description:
    "Full-stack engineer and Head of MarTech building web systems, MarTech stacks, landing pages, and SaaS products across frontend, backend, and infrastructure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Logan Parke | Full-Stack Engineer & MarTech Leader",
    description:
      "Full-stack engineer and Head of MarTech building web systems, MarTech stacks, landing pages, and SaaS products across frontend, backend, and infrastructure.",
    type: "website",
    locale: "en_US",
    url: "https://loganparke.com",
    siteName: "Logan Parke",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logan Parke | Full-Stack Engineer & MarTech Leader",
    description:
      "Full-stack engineer and Head of MarTech building web systems, MarTech stacks, landing pages, and SaaS products across frontend, backend, and infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable}`}
      // @ts-expect-error React 18 attribute
      suppressHydrationMismatch
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Logan Parke",
              jobTitle: "Full-Stack Engineer & Head of MarTech",
              url: "https://loganparke.com",
              sameAs: [
                "https://www.linkedin.com/in/logan-parke/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
