const sections = [
  { icon: "▤", title: "Документы", sub: "Найти и сохранить", state: "Уже доступны", color: "bg-[#eee7fa] text-[#8158c1]", available: true, href: "#features" },
  { icon: "☷", title: "Коллеги", sub: "Спросить и поделиться", state: "Уже доступны", color: "bg-[#eaf3fb] text-[#6897bd]", available: true, href: "#community" },
  { icon: "♙", title: "Профессионалы", sub: "Разобрать свой вопрос", state: "В разработке", color: "bg-[#f0eafb] text-[#9371bf]", href: "#roadmap" },
  { icon: "⌑", title: "Курсы", sub: "Освоить полезное", state: "В разработке", color: "bg-[#f1edfc] text-[#9181ca]", href: "#roadmap" },
];

export function EcosystemSection() {
  return <section className="scroll-mt-4 border-y border-[#eeebf4] bg-gradient-to-r from-[#fdfcfe] via-[#f8f7fd] to-[#fbfcff] py-9" id="ecosystem"><div className="mx-auto w-[min(1216px,calc(100%-3rem))]">
    <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="eyebrow mb-2 text-[9px] tracking-[1.9px]">ДЛЯ РАБОТЫ И ОБЩЕНИЯ</p><h2 className="text-[27px] font-semibold tracking-tight sm:text-[31px]">Нужное — в одном месте.</h2></div><p className="text-xs leading-6 text-[#82788f]">Документы и коллеги уже рядом.<br/>Постепенно добавляем помощь и обучение.</p></div>
    <div className="grid overflow-hidden rounded-[18px] border border-[#eae4f3] bg-white/75 sm:grid-cols-2 lg:grid-cols-4">{sections.map((item)=><a href={item.href} className="group flex items-start gap-3 border-b border-[#eee9f5] p-4 transition hover:bg-[#f1ebfb] sm:p-5 lg:border-b-0 lg:border-r lg:last:border-r-0" key={item.title}><span className={`grid size-10 shrink-0 place-items-center rounded-xl text-lg ${item.color}`}>{item.icon}</span><span className="min-w-0"><b className="block text-sm font-semibold">{item.title}</b><span className="mt-1 block text-[10px] text-[#8b8397]">{item.sub}</span><small className={`mt-3 flex items-center gap-1.5 text-[9px] ${item.available ? "text-[#6f948f]" : "text-[#8c779f]"}`}><i className="size-1 rounded-full bg-current"/>{item.state}</small></span><span className="ml-auto text-[#bfacd3] transition group-hover:translate-x-0.5">↗</span></a>)}</div>
    <p className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] text-[#9b8ba7]"><span className="text-[16px] text-[#b098cc]">⌘</span> Найти документ, обсудить задачу, научиться новому — в знакомом пространстве.</p>
  </div></section>;
}
