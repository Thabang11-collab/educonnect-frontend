import AnnouncementCard from '../../components/AnnouncementCard';

const announcementData = [
  { title: 'New College Guidelines', description: 'Updated assessment policies are now available in your dashboard.', date: 'Today', author: 'Admin Office' },
  { title: 'Exam Skills Workshop', description: 'Join the exam readiness session on Thursday at 5 PM.', date: 'Yesterday', author: 'Student Services' },
  { title: 'Research Invitation', description: 'Volunteer for the new campus research interview series.', date: '3 days ago', author: 'Research Coordinator' }
];

function Announcements() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Announcements</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Latest campus communications relevant to your profile.</p>
      </div>
      <div className="grid gap-6">
        {announcementData.map((item) => (
          <AnnouncementCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Announcements;
