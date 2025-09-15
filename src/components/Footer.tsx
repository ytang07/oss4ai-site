import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--primary-color)] text-[var(--foreground)] p-4 text-center">
      <p>&copy; {currentYear} Open Source for AI. All rights reserved.</p>
    </footer>
  );
}
