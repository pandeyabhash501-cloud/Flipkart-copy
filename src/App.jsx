import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Banner from './components/Banner.jsx'
import ProductSection from './components/ProductSection.jsx'

const asset = (path) => new URL(`../images/${path}`, import.meta.url).href

const categories = [
  { label: 'For You', icon: asset('food.svg') },
  { label: 'Fashion', icon: asset('fashion.svg') },
  { label: 'Mobiles', icon: asset('mobiles.svg') },
  { label: 'Beauty', icon: asset('beauty.svg') },
  { label: 'Electronics', icon: asset('electronics.svg') },
  { label: 'Home', icon: asset('home-final.svg') },
  { label: 'Appliances', icon: asset('tv.svg') },
  { label: 'Toys', icon: asset('toy.svg') },
  { label: 'Furniture', icon: asset('furniture.svg') },
]

const heroBanners = {
  main: asset('163646f781028a49_002.webp'),
  sideA: asset('89d94ff0-21c3-4bac-8fbb-282a74a30df7_002.webp'),
  sideB: asset('0761f406-0baa-4fad-94e9-7fb1b27e8ca7_002.webp'),
}

const promoCards = [
  {
    title: 'Flash Sale',
    subtitle: 'Up to 70% off',
    image: asset('31fdc3675e67dbfd.webp'),
  },
  {
    title: 'Beauty Sale',
    subtitle: 'Top brands, low prices',
    image: asset('300-ocean-for-men-anti-acne-pimple-skin-brightening-all_002.webp'),
  },
  {
    title: 'Gadget Fest',
    subtitle: 'Latest electronics',
    image: asset('5500bbb8cc8eba76_002.webp'),
  },
]

const sectionData = [
  {
    title: 'Best of Electronics',
    cta: 'View all',
    items: [
      {
        image: asset('6-z-flip-6099-bersache-green-original-imahcfecuj7562su.webp'),
        title: 'Samsung Galaxy Z Flip',
        price: '₹84,999',
        offer: '30% off',
        badge: 'Best Seller',
      },
      {
        image: asset('l-pink-parrot-combo-tocayo-original-imahf4peahswxrgy.webp'),
        title: 'Fashion Combo',
        price: '₹1,799',
        offer: '32% off',
        badge: 'Trending',
      },
      {
        image: asset('no-push-chopper-press-and-chop-technology-950ml-with-4-stai.webp'),
        title: 'Kitchen Chopper',
        price: '₹2,299',
        offer: '45% off',
        badge: 'Hot Deal',
      },
      {
        image: asset('89d94ff0-21c3-4bac-8fbb-282a74a30df7_002.webp'),
        title: '55" Smart TV',
        price: '₹39,999',
        offer: '40% off',
        badge: 'Limited',
      },
    ],
  },
  {
    title: 'Trending Accessories',
    cta: 'Explore more',
    items: [
      {
        image: asset('31f7e3af490c225f_002.webp'),
        title: 'Wireless Headphones',
        price: '₹1,499',
        offer: '65% off',
        badge: 'Top Pick',
      },
      {
        image: asset('5a9ff48eef96b876_002.webp'),
        title: 'Smart Watch',
        price: '₹2,299',
        offer: '48% off',
        badge: 'Trending',
      },
      {
        image: asset('163646f781028a49_002.webp'),
        title: 'Wireless Earbuds',
        price: '₹2,799',
        offer: '46% off',
        badge: 'Popular',
      },
      {
        image: asset('0761f406-0baa-4fad-94e9-7fb1b27e8ca7_002.webp'),
        title: 'Smart Speaker',
        price: '₹3,199',
        offer: '54% off',
        badge: 'New Arrival',
      },
    ],
  },
  {
    title: 'Daily Deals',
    cta: 'See all deals',
    items: [
      {
        image: asset('89d94ff0-21c3-4bac-8fbb-282a74a30df7_002.webp'),
        title: 'Ultra HD TV',
        price: '₹32,999',
        offer: '44% off',
        badge: 'Deal',
      },
      {
        image: asset('31fdc3675e67dbfd_002.webp'),
        title: 'Smart Home Kit',
        price: '₹4,999',
        offer: '55% off',
        badge: 'Offer',
      },
      {
        image: asset('50-old-money-eau-de-parfum-long-lasting-perfume-for-man_002.webp'),
        title: 'Premium Perfume',
        price: '₹999',
        offer: '62% off',
        badge: 'Best Price',
      },
      {
        image: asset('7ab4040af860941d.webp'),
        title: 'Bluetooth Speaker',
        price: '₹899',
        offer: '59% off',
        badge: 'Hot',
      },
    ],
  },
]

const galleryImages = [
  { alt: 'Personal Care', src: asset('300-ocean-for-men-anti-acne-pimple-skin-brightening-all_002.webp') },
  { alt: 'Footwear', src: asset('31fdc3675e67dbfd_002.webp') },
  { alt: 'Home Decor', src: asset('5a9ff48eef96b876_003.webp') },
  { alt: 'Appliances', src: asset('5500bbb8cc8eba76_002.webp') },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <Navbar logo={asset('fkheaderlogo_exploreplus-44005d.svg')} plusIcon={asset('fkplus-f1a046.svg')} />
        <CategoryBar categories={categories} />
      </div>

      <main className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
        <Banner hero={heroBanners} />

        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          {promoCards.map((promo) => (
            <div key={promo.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{promo.title}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">{promo.subtitle}</h2>
              </div>
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img src={promo.image} alt={promo.title} className="h-48 w-full object-cover" />
              </div>
            </div>
          ))}
        </section>

        {sectionData.map((section) => (
          <div key={section.title} className="mt-8">
            <ProductSection title={section.title} cta={section.cta} items={section.items} />
          </div>
        ))}

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-panel">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Shop by Category</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Browse every collection</h2>
            </div>
            <a className="text-sm font-semibold text-sky-600" href="#">
              Explore all
            </a>
          </div>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {galleryImages.map((item) => (
              <div key={item.alt} className="flex-shrink-0 w-48 overflow-hidden rounded-2xl bg-slate-100">
                <img src={item.src} alt={item.alt} className="h-48 w-full object-cover transition duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>

        {/* Additional sections to make page longer */}
        <div className="mt-8">
          <ProductSection title="Top Deals" cta="View all deals" items={sectionData[0].items} />
        </div>
        <div className="mt-8">
          <ProductSection title="New Arrivals" cta="Shop now" items={sectionData[1].items} />
        </div>
        <div className="mt-8">
          <ProductSection title="Best Sellers" cta="Explore" items={sectionData[2].items} />
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:grid-cols-4">
          {['ABOUT', 'HELP', 'POLICY', 'SOCIAL'].map((title) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{title}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {title === 'ABOUT' && ['Contact Us', 'About Us', 'Careers', 'Flipkart Stories', 'Press'].map((label) => (
                  <li key={label}><a href="#" className="hover:text-white">{label}</a></li>
                ))}
                {title === 'HELP' && ['Payments', 'Shipping', 'Cancellation', 'Returns', 'FAQ'].map((label) => (
                  <li key={label}><a href="#" className="hover:text-white">{label}</a></li>
                ))}
                {title === 'POLICY' && ['Return Policy', 'Terms of Use', 'Security', 'Privacy', 'Sitemap'].map((label) => (
                  <li key={label}><a href="#" className="hover:text-white">{label}</a></li>
                ))}
                {title === 'SOCIAL' && ['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((label) => (
                  <li key={label}><a href="#" className="hover:text-white">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
