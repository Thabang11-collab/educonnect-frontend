function LoadingSkeleton({ lines = 4 }) {
  return (
    <div className="space-y-3 rounded-3xl bg-slate-100 p-6 dark:bg-slate-800">
      {Array.from({ length: lines }, (_, index) => (
        <div key={index} className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
      ))}
    </div>
  );
}

export default LoadingSkeleton;
