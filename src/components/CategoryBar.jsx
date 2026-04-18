const CategoryBar = ({ categories }) => {
  return (
    <div className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-nowrap gap-8 overflow-x-auto px-4 py-4 scrollbar-hide sm:px-6">
        {categories.map((category, index) => (
          <button
            key={category.label}
            className={`flex min-w-max flex-col items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 hover:text-slate-900 ${
              index === 0 ? 'border-b-2 border-sky-500 text-slate-900' : 'text-slate-700'
            }`}
          >
            <img src={category.icon} alt={category.label} className="h-6 w-6" />
            <span>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryBar
