import Link from "next/link";

export function Brand() {
  return <Link className="flex items-center gap-3.5 text-[13px] font-medium leading-[1.35]" href="#top" aria-label="БухПро — на главную">
    <svg className="size-10 shrink-0 text-violet-700" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="m20 9 11-6 7 4v25l-7 5-11-6-11 6-7-5V7l7-4 11 6v22M9 3v25l11 6M31 3v25l-11 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    <span>БухПро<br/>для работы и общения</span>
  </Link>;
}

export function SiteHeader() {
  return <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex h-22 w-[min(1216px,calc(100%-3rem))] items-center justify-between gap-6">
      <Brand />
      <nav className="hidden items-center gap-8 text-slate-600 md:flex" aria-label="Основная навигация">
        <Link className="hover:text-violet-700" href="#about">
			О сервисе
		</Link>
		  <Link className="hover:text-violet-700" href="#features">
			  Возможности</Link>
		  <Link className="hover:text-violet-700" href="#plans">
			  Подписка
		  </Link>
		  <Link className="hover:text-violet-700" href="#faq">
			  Вопросы
		  </Link>
      </nav>
      <a className="button h-11 rounded-full border border-[#a68ad3] bg-white/60 px-5 text-xs text-violet-700 shadow-none hover:bg-violet-50" href="#plans">
		  Попробовать
		  <span aria-hidden="true">↗</span>
	  </a>
    </div>
  </header>;
}
