const steps = [
  ["01", "Оформите подписку", "Первый месяц — бесплатно. Далее — 199 ₽ в месяц."],
  ["02", "Скачайте приложение", "Установите его на удобное устройство."],
  ["03", "Пользуйтесь каждый день", "Документы и форум всегда под рукой."],
];

export function HowItWorksSection() {
  return <section className="mx-auto grid w-[min(1216px,calc(100%-3rem))] gap-8 border-b border-slate-100 py-20 md:grid-cols-[.7fr_1.3fr] md:gap-16" id="how-it-works"><div><p className="eyebrow mb-3">БЕЗ ЛИШНИХ ШАГОВ</p><h2 className="text-[31px] font-semibold leading-tight tracking-[-1px]">Освойтесь<br/>в своём ритме</h2></div><ol className="grid gap-7 sm:grid-cols-3">{steps.map(([num,title,text])=><li className="border-t border-[#e8e2ef] pt-4" key={num}><span className="text-sm font-semibold text-violet-700">{num}</span><h3 className="mt-3 text-[14px] font-semibold">{title}</h3><p className="mt-2 text-[11px] leading-5 text-slate-500">{text}</p></li>)}</ol></section>;
}
