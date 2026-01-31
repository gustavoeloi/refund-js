export function NotFound() {
  return (
    <div className="h-screen w-screen bg-zinc-800 flex flex-col items-center justify-center gap-4">
      <span className="text-6xl">😥</span>
      <h1 className="text-4xl text-green-700 font-bold">Not Found</h1>
      <a href="/login" className="text-2xl text-amber-50  font-semibold">
        ⬅️ Return to home
      </a>
    </div>
  );
}
