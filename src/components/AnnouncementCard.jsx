function AnnouncementCard({ title, description, date, author }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{description}</p>
        </div>
        <div className="text-right text-sm text-slate-500 dark:text-slate-400">
          <p>{date}</p>
          <p className="mt-1">{author}</p>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementCard;
