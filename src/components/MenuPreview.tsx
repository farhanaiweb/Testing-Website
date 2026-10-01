import SectionHeading from './SectionHeading'
import { menuCategories } from '@/lib/data'

export default function MenuPreview() {
  const featuredItems = menuCategories.flatMap((cat) =>
    cat.items.slice(0, 2).map((item) => ({ ...item, category: cat.name }))
  ).slice(0, 6)

  return (
    <section className="section-padding bg-charcoal-900">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Menu"
          title="Authentic Lahori Cuisine"
          description="Our menu changes with the seasons, ensuring every dish features the freshest ingredients at their peak."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <div
              key={`${item.category}-${item.name}`}
              className="group rounded-sm border border-cream-100/10 bg-charcoal-950/50 p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-charcoal-950"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
                {item.category}
              </p>
              <h3 className="mt-2 font-serif text-xl text-cream-50 transition-colors group-hover:text-red-400">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/60">
                {item.description}
              </p>
              <p className="mt-4 font-serif text-lg text-red-500">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="btn-secondary"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
