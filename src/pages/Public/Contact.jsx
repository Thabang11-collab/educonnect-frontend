function Contact() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Contact</p>
        <h1 className="max-w-3xl text-4xl font-bold text-slate-950 dark:text-white">Start a conversation with the iPLUG YAMA CAMPUS team.</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Our website interface is built to support multi-college student communities, and we can guide your transition from frontend design to full integration.</p>
      </div>
      <form className="card space-y-6 p-8">
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
          <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
          <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
          <textarea rows="5" placeholder="How can we help?" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"></textarea>
        </div>
        <button type="submit" className="button-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
