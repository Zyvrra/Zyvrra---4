export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-400">
          Zyvrra is Live 🚀
        </h1>

        <p className="text-gray-400 mt-2">
          Marketplace system is running
        </p>

        <div className="mt-6 space-y-2">
          <p>Go to:</p>
          <p>/login</p>
          <p>/feed</p>
          <p>/seller-hub</p>
        </div>
      </div>
    </div>
  );
}
