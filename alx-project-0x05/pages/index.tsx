import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Splash App 🚀</h1>
      <p className="mb-6 text-lg text-gray-600">
        Click below to try out the Counter App
      </p>
      <Link
        href="/counter-app"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Go to Counter App
      </Link>
    </main>
  );
}
