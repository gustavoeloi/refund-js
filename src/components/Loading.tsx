import loading from "../assets/gear-spinner.svg";

export function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <img
        src={loading}
        alt="Loading spinner"
        className="animate-bounce h-12 w-12"
      />
      <span className="mt-4 text-gray-600 font-medium">Loading</span>
    </div>
  );
}
