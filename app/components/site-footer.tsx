import { Brand } from "./site-header";

export function SiteFooter() {
  return <footer className="mx-auto flex min-h-[92px] w-[min(1216px,calc(100%-3rem))] flex-wrap items-center justify-between gap-5 border-t border-slate-100 py-5 text-[11px] text-slate-500"><Brand/><nav className="flex flex-wrap gap-5"><a className="hover:text-violet-700" href="mailto:hello@buhpro.ru">Поддержка</a><a className="hover:text-violet-700" href="#faq">Вопросы и ответы</a><a className="hover:text-violet-700" href="#plans">Подписка</a></nav><small className="text-slate-400">© 2026 БухПро</small></footer>;
}
