const questions = [
  ["Для кого это приложение?", "Для бухгалтеров и специалистов, которым удобно держать рабочие документы и общение с коллегами в одном месте. Найти материал, сохранить полезное, обсудить задачу — для этих повседневных дел здесь есть поиск, быстрый доступ и форум."],
  ["Сколько стоит подписка?", "Первый месяц при оформлении подписки — бесплатно: можно освоиться и попробовать приложение в работе. Со второго месяца — 199 ₽ в месяц."],
  ["Что можно делать уже сейчас?", "Искать документы, сохранять нужное в быстрый доступ и общаться на форуме. Чат с профессионалом, курсы и ИИ-помощник пока в разработке."],
  ["С чего начать?", "Оформите подписку и скачайте приложение. В этой версии сайта форма подписки показана как макет — оформление пока не подключено."],
  ["Что появится дальше?", "Готовим чат с профессионалом, курсы по бухгалтерии и работе в 1С и ИИ-помощника. О сроках запуска и условиях доступа расскажем отдельно."],
];

export function FaqSection() {
  return <section className="mx-auto grid w-[min(1216px,calc(100%-3rem))] gap-9 py-20 md:grid-cols-[.65fr_1.35fr] md:gap-16" id="faq"><div><p className="eyebrow mb-3">ВСЁ ПО ПОРЯДКУ</p><h2 className="text-[31px] font-semibold tracking-[-1px]">Есть вопросы?</h2><p className="mt-3 text-sm leading-6 text-slate-500">О приложении, подписке<br/>и первых шагах.</p><a className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-violet-700" href="mailto:hello@buhpro.ru">Связаться с поддержкой <span>↗</span></a></div><div className="divide-y divide-[#e9eaf2] border-y border-[#e9eaf2]">{questions.map(([question, answer], index) => <details className="group py-4" key={question} open={index===0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13px] font-semibold">{question}<span className="text-lg font-normal text-violet-700 transition group-open:rotate-45">＋</span></summary><p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500">{answer}</p></details>)}</div></section>;
}
