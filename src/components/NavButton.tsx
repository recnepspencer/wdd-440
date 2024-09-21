// src/components/NavButton.tsx
import Link from 'next/link';

interface NavButtonProps {
  label: string;
  href: string;
}

export default function NavButton({ label, href }: NavButtonProps) {
  return (
    <Link href={href} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition duration-200 ease-in-out md:inline-block md:px-4 md:py-2">
    {label}
    </Link>
  );
}
