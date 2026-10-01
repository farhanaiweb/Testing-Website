import SectionHeading from './SectionHeading'

export default function Gallery() {
  return (
    <section className="section-padding bg-charcoal-950">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Gallery"
          title="A Feast for the Eyes"
          description="A glimpse into the artistry and atmosphere that defines your dining experience."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm ${
                index === 1 || index === 6 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/gallery-${index}.jpg`}
                alt={`Haveli Restaurant gallery image ${index}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
