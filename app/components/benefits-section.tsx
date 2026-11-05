const benefits = [
  ["01", "Понятный поиск", "Находите нужные материалы"],
  ["02", "Быстрый доступ", "Сохраняйте важное рядом"],
  ["03", "Форум коллег", "Обсуждайте рабочие вопросы"],
  ["04", "Всё в одном месте", "Возвращайтесь к своему"],
];

export default function BenefitsSection() {
  	return (
		<section className="border-y border-[#eeebf4] bg-gradient-to-r from-[#fdfcfe] via-[#f8f7fd] to-[#fbfcff]">
			<div className="mx-auto grid w-[min(1216px,calc(100%-3rem))] grid-cols-2 gap-0 py-4 sm:grid-cols-4">
				{benefits.map(([n,title,copy])=>
					<div className="border-r border-[#eeebf4] px-4 py-3 last:border-0 sm:px-6" key={n}>
						<span className="text-[9px] tracking-widest text-violet-400">{n}</span>
						<b className="mt-1 block text-[13px] font-semibold">{title}</b>
						<small className="mt-1 block text-[10px] text-slate-500">{copy}
						</small>
					</div>)}
			</div>
		</section>
	)
}
