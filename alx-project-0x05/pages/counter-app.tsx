import { useCount } from "@/context/CountContext";

export default function CounterApp() {
  const { count, increment, decrement } = useCount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
