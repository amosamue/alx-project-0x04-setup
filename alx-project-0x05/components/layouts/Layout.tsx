import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-sm text-gray-500">© 2025 Splash App</p>
      </footer>
    </div>
  );
}
