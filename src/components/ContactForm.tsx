'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  guests: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  date?: string
  guests?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date'
    }

    if (!formData.guests) {
      newErrors.guests = 'Please select number of guests'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate form submission - replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-gold-500/30 bg-charcoal-900/50 p-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20">
          <svg className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-cream-50">Reservation Request Received</h3>
        <p className="mt-3 max-w-md text-body">
          Thank you, {formData.name.split(' ')[0]}. We have received your reservation request
          for {formData.guests} guest{formData.guests !== '1' ? 's' : ''} on {formData.date}.
          Our team will confirm your reservation via email within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' })
          }}
          className="btn-secondary mt-8"
        >
          Make Another Reservation
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-cream-100/80">
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full rounded-sm border bg-charcoal-900/50 px-4 py-3 text-cream-50 placeholder-cream-100/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
              errors.name ? 'border-red-500' : 'border-cream-100/20 focus:border-gold-500'
            }`}
            placeholder="John Smith"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream-100/80">
            Email Address <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full rounded-sm border bg-charcoal-900/50 px-4 py-3 text-cream-50 placeholder-cream-100/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
              errors.email ? 'border-red-500' : 'border-cream-100/20 focus:border-gold-500'
            }`}
            placeholder="john@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-cream-100/80">
            Phone Number <span className="text-gold-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full rounded-sm border bg-charcoal-900/50 px-4 py-3 text-cream-50 placeholder-cream-100/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
              errors.phone ? 'border-red-500' : 'border-cream-100/20 focus:border-gold-500'
            }`}
            placeholder="+92 321 465 1051"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium text-cream-100/80">
            Preferred Date <span className="text-gold-400">*</span>
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full rounded-sm border bg-charcoal-900/50 px-4 py-3 text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
              errors.date ? 'border-red-500' : 'border-cream-100/20 focus:border-gold-500'
            }`}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? 'date-error' : undefined}
          />
          {errors.date && (
            <p id="date-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.date}
            </p>
          )}
        </div>

        {/* Guests */}
        <div className="sm:col-span-2">
          <label htmlFor="guests" className="mb-2 block text-sm font-medium text-cream-100/80">
            Number of Guests <span className="text-gold-400">*</span>
          </label>
          <select
            id="guests"
            value={formData.guests}
            onChange={(e) => handleChange('guests', e.target.value)}
            className={`w-full rounded-sm border bg-charcoal-900/50 px-4 py-3 text-cream-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 ${
              errors.guests ? 'border-red-500' : 'border-cream-100/20 focus:border-gold-500'
            }`}
            aria-invalid={!!errors.guests}
            aria-describedby={errors.guests ? 'guests-error' : undefined}
          >
            <option value="">Select number of guests</option>
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'Guest' : 'Guests'}
              </option>
            ))}
            <option value="13+">13+ (Large Party)</option>
          </select>
          {errors.guests && (
            <p id="guests-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.guests}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-cream-100/80">
            Special Requests
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={4}
            className="w-full resize-none rounded-sm border border-cream-100/20 bg-charcoal-900/50 px-4 py-3 text-cream-50 placeholder-cream-100/30 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400"
            placeholder="Dietary restrictions, special occasions, seating preferences..."
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </>
          ) : (
            'Request Reservation'
          )}
        </button>
      </div>

      <p className="text-center text-xs text-cream-100/50">
        This is a reservation request, not a confirmation. We will contact you to confirm your booking.
      </p>
    </form>
  )
}
