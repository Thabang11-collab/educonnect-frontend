function Toast({ message, variant = 'info' }) {
  const baseClass = 'inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium shadow-soft';
  const variants = {
    info: 'bg-slate-900 text-white',
    success: 'bg-emerald-600 text-white',
    warning: 'bg-amber-500 text-slate-950',
    error: 'bg-rose-600 text-white'
  };

  return <div className={`${baseClass} ${variants[variant]}`}>{message}</div>;
}

export default Toast;
