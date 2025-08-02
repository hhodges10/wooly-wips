export default function ProgressBar({ progress }: { progress: number }) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100); // Ensure progress is between 0 and 100

  return (
    <div className={`w-full bg-gray-300 h-2 rounded-full`}>
      <div
        className="bg-mint h-2 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
}
