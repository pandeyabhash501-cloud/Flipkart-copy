const Navbar = ({ logo, plusIcon }) => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-3 sm:px-6">
      {/* Top row: Logo + Travel + Location */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="brand-pill inline-flex items-center gap-2 rounded-full bg-[#ffe500] px-4 py-2 shadow-sm">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-logo-399f8d.png" alt="Flipkart" className="logo-icon" />
            <span className="brand-text text-sm font-semibold text-slate-900">Flipkart</span>
          </div>
          <button className="travel-pill inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
            <span className="travel-icon text-red-500">✈</span>
            Travel
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="text-slate-900">📍</span>
          <span>Location not set</span>
          <a href="#" className="font-semibold text-sky-600 hover:text-sky-700">Select delivery location</a>
        </div>
      </div>

      {/* Search row: Full width search + right menu */}
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full rounded-full border border-slate-300 bg-slate-100 py-3 pl-12 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a href="#" className="flex items-center gap-1 hover:text-slate-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-slate-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-slate-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l-1.1 5M7 13l1.1-5m0 5H19" />
            </svg>
            Cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
