import Link from "next/link";
import "./globals.css";

// Global 404. Because the site uses multiple root layouts (route groups `(en)` and
// `(zh)`), a not-found rendered at the app root sits outside those layouts and must
// therefore render its own <html> and <body>. Next.js emits this as out/404.html,
// which the deployment's .htaccess serves via `ErrorDocument 404 /404.html`.
export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found &middot; CBC Law</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="min-h-screen bg-[#1b2a4a] text-white antialiased">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            CBC Law
          </p>
          <h1 className="mt-5 text-7xl font-semibold leading-none">404</h1>
          <p className="mt-5 text-lg text-white/80">
            The page you are looking for could not be found. It may have moved or no
            longer exists.
          </p>
          <p className="mt-1 text-sm text-white/50">
            您访问的页面不存在，可能已被移动或删除。
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#1b2a4a] transition hover:bg-white/90"
            >
              Return home
            </Link>
            <Link
              href="/zh/"
              className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              返回中文首页
            </Link>
            <Link
              href="/contact/"
              className="rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
