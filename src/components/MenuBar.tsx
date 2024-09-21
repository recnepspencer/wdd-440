// src/components/MenuBar.tsx
import NavButton from './NavButton';

export default function MenuBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavButton label="My App" href="/" />

        {/* Navigation buttons */}
        <div className="flex space-x-4">
          <NavButton label="Login" href="/login" />
        </div>
      </div>
    </nav>
  );
}
