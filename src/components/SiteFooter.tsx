export default function SiteFooter() {
  return (
    <footer className="mt-20 pt-8 pb-10 border-t border-white/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
        <p className="text-white/40 text-center sm:text-left">
          ©2026 The Wicked Woods. All Rights Reserved.
        </p>
        <a
          href="https://mark-waldron.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white/70 transition-colors text-center sm:text-right"
        >
          Site by Mark Waldron
        </a>
      </div>
    </footer>
  );
}
