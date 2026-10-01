export const restaurantInfo = {
  name: 'Haveli Restaurant',
  tagline: "Lahore's Iconic Heritage",
  description:
    "Lahore's premier heritage dining destination — where Mughal grandeur meets unforgettable hospitality.",
  phone: '+92 321 465 1051',
  email: 'info@haveli.com.pk',
  address: {
    street: '2170-A, Food Street, Fort Road',
    city: 'Lahore',
    state: 'Punjab',
    zip: 'Pakistan',
  },
  hours: [
    { days: 'Monday – Thursday', time: '10:00 AM – 1:00 AM' },
    { days: 'Friday – Sunday', time: '10:00 AM – 2:00 AM' },
  ],
  social: {
    instagram: '#',
    facebook: '#',
    twitter: '#',
  },
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const heroImages = {
  main: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop',
  secondary: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop',
  tertiary: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&auto=format&fit=crop',
}

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop',
    alt: 'Grilled steak with herbs',
  },
  {
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&auto=format&fit=crop',
    alt: 'Fresh pasta dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&auto=format&fit=crop',
    alt: 'Artfully plated dessert',
  },
  {
    src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80&auto=format&fit=crop',
    alt: 'Craft cocktail with garnish',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop',
    alt: 'Fresh salad bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop',
    alt: 'Wood-fired pizza',
  },
]

export const menuCategories = [
  {
    name: 'Starters',
    items: [
      {
        name: 'Burrata & Heirloom Tomatoes',
        description: 'Creamy burrata, basil oil, aged balsamic, grilled sourdough',
        price: '$16',
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh ahi tuna, avocado, sesame, crispy wonton',
        price: '$18',
      },
      {
        name: 'Roasted Bone Marrow',
        description: 'Herb gremolata, grilled bread, sea salt',
        price: '$19',
      },
      {
        name: 'Seasonal Soup',
        description: 'Chef\'s daily preparation with artisan bread',
        price: '$12',
      },
    ],
  },
  {
    name: 'Mains',
    items: [
      {
        name: 'Grilled Ribeye',
        description: '28-day dry-aged, truffle butter, roasted vegetables',
        price: '$42',
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Miso glaze, seasonal greens, citrus beurre blanc',
        price: '$34',
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Arborio rice, parmesan, truffle oil, fresh herbs',
        price: '$28',
      },
      {
        name: 'Herb-Roasted Chicken',
        description: 'Free-range chicken, root vegetables, natural jus',
        price: '$32',
      },
      {
        name: 'Lobster Linguine',
        description: 'Fresh lobster, tomato bisque, basil, linguine',
        price: '$38',
      },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Chocolate Fondant',
        description: 'Dark chocolate, vanilla bean ice cream, gold leaf',
        price: '$14',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard, caramelized sugar',
        price: '$12',
      },
      {
        name: 'Seasonal Tart',
        description: 'Chef\'s selection of fresh fruits and cream',
        price: '$13',
      },
    ],
  },
  {
    name: 'Drinks',
    items: [
      {
        name: 'Signature Old Fashioned',
        description: 'Bourbon, demerara, aromatic bitters, orange',
        price: '$16',
      },
      {
        name: 'Lavender Collins',
        description: 'Gin, lavender syrup, fresh lemon, soda',
        price: '$14',
      },
      {
        name: 'Sommelier\'s Wine Selection',
        description: 'Rotating selection of premium wines by the glass',
        price: '$12–$18',
      },
      {
        name: 'Craft Mocktails',
        description: 'Seasonal non-alcoholic creations',
        price: '$10',
      },
    ],
  },
]

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Regular Guest',
    quote:
      'An exceptional dining experience from start to finish. The ribeye was cooked to perfection, and the atmosphere is both elegant and welcoming.',
    rating: 5,
  },
  {
    name: 'James K.',
    role: 'Food Critic',
    quote:
      'SAVOR & CO. delivers on every front — innovative dishes, impeccable service, and a wine list that complements the menu beautifully.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    role: 'Celebration Dinner',
    quote:
      'We hosted our anniversary dinner here and the staff went above and beyond. The tasting menu was a journey we will never forget.',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'Do I need a reservation?',
    answer:
      'We highly recommend reservations, especially for weekend dining. Walk-ins are welcome based on availability, but we cannot guarantee a table without a reservation.',
  },
  {
    question: 'What is your dress code?',
    answer:
      'We maintain a smart casual dress code. We kindly request that guests avoid athletic wear, flip-flops, and baseball caps during evening service.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer:
      'Absolutely. Our kitchen is experienced in accommodating vegetarian, vegan, gluten-free, and other dietary needs. Please inform us of any allergies or restrictions when making your reservation.',
  },
  {
    question: 'Do you offer private dining?',
    answer:
      'Yes, we have a private dining room that accommodates up to 24 guests. It is perfect for corporate events, celebrations, and intimate gatherings. Please contact us for availability and pricing.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'We offer complimentary valet parking Tuesday through Saturday. There is also a public parking garage one block from the restaurant.',
  },
  {
    question: 'Do you offer gift cards?',
    answer:
      'Yes, gift cards are available in any amount and can be purchased at the restaurant or by phone. They make a wonderful gift for any occasion.',
  },
]
