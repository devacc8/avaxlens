export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">AvaxLens</h1>
      <p className="text-lg text-gray-600 mb-8">
        Understand your contract in 10 seconds.
      </p>
      <div className="w-full max-w-xl">
        <input
          type="text"
          placeholder="Paste any Avalanche C-Chain contract address..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
    </main>
  );
}
