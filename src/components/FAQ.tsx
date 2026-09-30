'use client'

import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { faqs } from '@/lib/data'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-cream-100/10">
      <button
        type="button"
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-gold-400 focus:outline-none focus:text-gold-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg text-cream-50 sm:text-xl">{question}</span>
        <svg
          className={`ml-4 h-5 w-5 flex-shrink-0 text-gold-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-base leading-relaxed text-cream-100/70">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section-padding bg-charcoal-950">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before your visit."
        />

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
