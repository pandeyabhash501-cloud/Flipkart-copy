const ProductCard = ({ item }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-50">
        {item.badge ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {item.badge}
          </span>
        ) : null}
        <img src={item.image} alt={item.title} className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105" />
      </div>
      <h3 className="mb-2 text-sm font-medium text-slate-900 line-clamp-2">{item.title}</h3>
      <p className="text-lg font-bold text-slate-900">
        {item.price}{' '}
        <span className="text-sm font-medium text-emerald-600">{item.offer}</span>
      </p>
    </article>
  )
}

export default ProductCard
