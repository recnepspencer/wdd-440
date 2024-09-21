import '../app/globals.css';
import MenuBar from '../components/MenuBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuBar /> {/* MenuBar appears on every page */}
        <main className="container mx-auto p-4">
          {children} {/* All page content will be rendered here */}
        </main>
      </body>
    </html>
  );
}
