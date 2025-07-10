"use client";
export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 border-t mt-10">
      © {new Date().getFullYear()} MyPortfolio. All rights reserved.
    </footer>
  );
}
