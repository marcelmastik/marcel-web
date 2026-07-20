import "./globals.css";

export const metadata = {
  title: "Marcel Mastík — Marketing, weby a AI",
  description: "Marketing, weby, SEO a praktické využití AI. Projekty a poznámky Marcela Mastíka.",
  metadataBase: new URL("https://marcelmastik.cz"),
  openGraph: {
    title: "Marcel Mastík — Marketing, weby a AI",
    description: "Marketing bez zbytečné omáčky. Konkrétní projekty, weby a AI experimenty.",
    type: "website",
    locale: "cs_CZ"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
