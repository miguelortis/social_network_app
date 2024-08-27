import "./globals.css";

export const metadata = {
  title: "Only Voyer",
  description: "Contenido Only Voyer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
