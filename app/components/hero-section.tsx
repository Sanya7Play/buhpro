const documents = [
  ["Трудовое право", "Договоры, отпуска, увольнения", "bg-[#e9e2fb]"],
  ["Бухгалтерский учёт", "Учёт, отчётность, документы", "bg-[#e4eff7]"],
  ["Налоги и отчётность", "Памятки и актуальные формы", "bg-[#f7e9ee]"],
];

function WorkspacePreview() {
  return <div className="relative mx-auto w-full max-w-[500px] px-3 pb-9 pt-8 md:pt-12">
    <div className="absolute inset-8 rounded-[45%] bg-[radial-gradient(ellipse_at_60%_30%,#dce9fc,transparent_62%),radial-gradient(ellipse_at_65%_72%,#e4d8fa,transparent_65%)]" />
    <div className="relative z-10 overflow-hidden rounded-2xl border border-white bg-white/90 shadow-[0_25px_65px_rgba(87,67,129,0.18)] backdrop-blur">
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 bg-white/80 px-3">
		  <i className="size-1.5 rounded-full bg-rose-200"/>
		  <i className="size-1.5 rounded-full bg-amber-200"/>
		  <i className="size-1.5 rounded-full bg-emerald-200"/>
		  <span className="ml-auto mr-auto text-[9px] text-slate-400">
			  БухПро　
			  <span className="text-emerald-500">●</span>
		  </span>
	  </div>
      <div className="flex min-h-[260px] sm:min-h-[300px]">
        <aside className="flex w-11 shrink-0 flex-col items-center gap-4 border-r border-slate-100 bg-white/70 py-3 text-xs text-slate-400">
			<b className="mb-1 text-sm text-violet-700">Б</b>
			<span>▦</span>
			<span className="rounded-lg bg-violet-100 p-1.5 text-violet-700">▤</span>
			<span>☷</span>
			<span>⌂</span>
			<span className="mt-auto">●</span>
		</aside>
        <div className="min-w-0 flex-1 p-3.5 sm:p-5">
          <div className="flex items-center justify-between">
			  <div>
				  <span className="block text-[7px] tracking-[1px] text-slate-400">
					  ВАША БИБЛИОТЕКА
				  </span>
				  <b className="mt-1 block text-sm">
					  Документы
				  </b>
			  </div>
			  <button className="rounded-md bg-violet-700 px-2.5 py-1.5 text-[8px] text-white">
				  ＋ Новый
			  </button>
		  </div>
          <div className="mt-3 rounded-md border border-slate-100 bg-white px-2 py-1.5 text-[9px] text-slate-400">
			  ⌕　Найти нужный документ
		  </div>
          <div className="my-2.5 flex gap-1.5 text-[8px]">
			  <b className="rounded bg-violet-100 px-2 py-1 text-violet-700">
				  Все
			  </b>
			  <span className="rounded bg-slate-100 px-2 py-1 text-slate-500">
				  Учёт
			  </span>
			  <span className="rounded bg-slate-100 px-2 py-1 text-slate-500">
				  Кадры
			  </span>
		  </div>
          {documents.map(([title, description, color]) =>
			  <div className="flex items-center gap-2 border-t border-slate-100 py-2.5" key={title}>
				  <span className={`grid size-7 shrink-0 place-items-center rounded-md text-sm text-violet-700 ${color}`}>
					  ▤
				  </span>
				  <span className="min-w-0">
					  <b className="block truncate text-[9px]">
						  {title}
					  </b>
					  <small className="mt-0.5 block truncate text-[7px] text-slate-400">
						  {description}
					  </small>
				  </span>
				  <span className="ml-auto text-xs text-slate-400">
					  ↗
				  </span>
			  </div>
		  )}
          <div className="border-t border-slate-100 pt-2 text-[7px] text-slate-400">
			  Недавно обновлено
			  <span className="float-right text-violet-700">
				  Посмотреть всё →
			  </span>
		  </div>
        </div>
      </div>
    </div>
    <div className="absolute right-0 top-16 z-10 rounded-xl border border-white bg-white/95 p-3 shadow-xl shadow-slate-900/10 sm:right-[-5px]"><span className="text-violet-700">✳</span><b className="mt-1.5 block text-[10px]">Всё под рукой</b><small className="mt-1 block text-[8px] text-slate-400">Документы и знания</small></div>
    <div className="absolute bottom-0 left-0 z-10 rounded-xl border border-white bg-white/95 p-3 shadow-xl shadow-slate-900/10"><b className="block text-[10px]">Коллеги рядом</b><small className="mt-1 block text-[8px] text-slate-400">Обсудите ваш вопрос</small></div>
  </div>;
}

export function HeroSection() {
  return <section className="mx-auto grid w-[min(1216px,calc(100%-3rem))] gap-8 py-14 md:grid-cols-[1.08fr_1fr] md:items-center md:gap-14 md:py-[72px] md:pb-20" id="about">
    <div><p className="eyebrow mb-6 flex items-center gap-2"><i className="inline-block size-1.5 rounded-full bg-violet-400"/> ДЛЯ БУХГАЛТЕРОВ И СПЕЦИАЛИСТОВ</p><h1 className="mb-6 text-[clamp(2.6rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.04em]">Работать проще,<br/>когда всё нужное<br/><em className="not-italic text-violet-700">рядом.</em></h1>
      <p className="mb-6 max-w-[470px] text-base leading-[1.8] text-slate-500">
		  БухПро объединяет документы и форум для бухгалтеров и специалистов. Находите нужное, сохраняйте полезное и обсуждайте вопросы с теми, кто понимает вашу работу.
	  </p>
      <div className="my-6 flex items-center gap-3">
		  <span className="grid size-[43px] place-items-center rounded-xl border border-[#e9dff7] bg-[#f2ecfc] text-[15px] font-semibold text-violet-700">01</span><span><b className="block text-[15px] font-semibold">Первый месяц бесплатно</b><small className="mt-1 block text-xs text-slate-500">При оформлении подписки. Затем — 199 ₽/мес.</small></span></div>
      <div className="mt-7 flex flex-wrap items-center gap-6"><a className="button rounded-full px-7" href="#plans">Попробовать месяц <span aria-hidden="true">↗</span></a><a className="text-sm text-violet-700" href="#ecosystem">Что внутри <span>↗</span></a></div><p className="mt-5 text-[11px] text-slate-400">Меньше поисков. Больше времени на саму работу.</p>
    </div>
    <div><p className="mb-1 flex items-center gap-2 text-[8px] font-semibold tracking-[1.1px] text-[#81768f]"><i className="size-1.5 rounded-full bg-violet-400"/> ВАШЕ РАБОЧЕЕ ПРОСТРАНСТВО <span className="ml-auto font-normal tracking-normal text-slate-400">Пример интерфейса</span></p><WorkspacePreview/></div>
  </section>;
}
