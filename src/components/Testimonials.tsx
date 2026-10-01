import SectionHeading from './SectionHeading'
import { testimonials } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-red-500' : 'text-cream-100/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-charcoal-900">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Guests Say"
          description="Hear from those who have experienced the heritage of Haveli Restaurant."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-sm border border-cream-100/10 bg-charcoal-950/50 p-8 transition-all duration-300 hover:border-red-500/30"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 flex-1">
                <p className="text-base leading-relaxed text-cream-100/80 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-6 border-t border-cream-100/10 pt-4">
                <p className="font-serif text-lg text-cream-50">{testimonial.name}</p>
                <p className="text-sm text-cream-100/50">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
