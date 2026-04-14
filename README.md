# The Other — Luxury Eyewear E-Commerce

A modern luxury eyewear e-commerce website built with React, Tailwind CSS, and Vite. "The Other" is an independent eyewear design studio focusing on essential forms and superior materials.

## About The Project

This project is a full-featured e-commerce frontend for a luxury eyewear brand. It showcases sunglasses and prescription eyeglasses with filtering, sorting, and cart functionality. The design emphasizes minimalism, quality materials, and timeless aesthetic.

## Features

### Product Catalog
- **39 Sunglasses**: The Apollo, The Luna, The Horizon, The Nomad, The Voyager, The Zenith, The Cobalt, The Sage, The Atlas, The Frost, The Shadow, The Terra, The Orbit, The Prism, The Wave, The Vortex, The Blaze, The Nebula, The Eclipse, The Photon, The Chrono, The Flux, The Vector, The Pulse, The Echo, The Nova, The Stratus, The Helix, The Vertex, The Quasar, The Comet, The Apex, The Zap, The Galaxy, The Solar, The Lunar, The Momentum, The Horizon Pro
- **35 Optical Eyeglasses**: Edge Burgundy, Essential Gold, Classic Tortoise, Minimal Black, Sculpt Steel, Vintage Amber, Navy Rectangle, Champagne Round, Forest Green, Silver Cateye, Slate Square, Ivory Pantos, Copper Pilot, Emerald Transparent, Obsidian Sport, Lavender Round, Teal Transparent, Platinum Oval, Graphite Wayfarer, Pearl Cateye, Onyx Square, Bisque Round, Burgundy Aviator, Taupe Shield, Coral Sweet, Slate Pantos, Marble Clear, Auburn Bold, Jade Oval, Smoke Rectangle, Brick Red, Frosted Wayfarer, Sepia Round, Gunmetal Bold, Wheat Oval

### Filtering & Sorting
- **Filter By Color**: Black, Tortoise, Gold, Silver, Blue, Green, Purple
- **Filter By Price**: Under $300, $300-$350, Over $350 (sunglasses); Under $300, $300-$400, Over $400 (optical)
- **Sort By**: Featured, Newest, Price: Low to High, Price: High to Low

### Shopping Cart
- Add products to cart from product detail page
- View cart in slide-out drawer
- Cart persists during session via React Context
- Item count badge in header

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Hover effects, scale transitions, cart drawer animations
- **Quick View**: Hover over product cards to reveal "Quick View" button
- **Product Badges**: "New Arrival" badges for new products

## Project Structure

```
/website
├── index.html          # Entry HTML file
├── package.json      # Dependencies & scripts
├── vite.config.js   # Vite configuration
├── src/
│   ├── main.jsx     # React entry point
│   ├── App.jsx      # Main app component with routing
│   ├── data/
│   │   └── products.js    # Product data (74 products)
│   ├── context/
│   │   └── CartContext.jsx    # Cart state management
│   ├── components/
│   │   └── CartDrawer.jsx     # Cart slide-out drawer
│   └── pages/
│       ├── Home.jsx           # Landing page
│       ├── Sun.jsx            # Sun collection (39 products)
│       ├── Optical.jsx       # Optical collection (35 products)
│       ├── ProductDetail.jsx  # Product detail page
│       ├── About.jsx          # About page
│       ├── Contact.jsx        # Contact page
│       ├── Shipping.jsx       # Shipping info
│       └── Returns.jsx         # Returns info
```

## Pages Overview

### Home (`/`)
- Full-screen hero with brand video/image
- Featured collections grid
- Newsletter signup
- Brand story section

### Sun Collection (`/sun`)
- Header with product count
- Filter By dropdown (color, price)
- Sort By dropdown (featured, newest, price)
- Grid of 39 sunglasses
- Pagination

### Optical Collection (`/optical`)
- Centered hero section
- Filter Bydropdown (color, price)
- Sort By dropdown
- Grid of 35 eyeglasses
- Pagination

### Product Detail (`/product/:id`)
- Product image gallery
- Color selection
- Size/dimensions info
- Add to cart button
- Description and details

### Support Pages
- `/about` — Brand story and mission
- `/contact` — Contact form
- `/shipping` — Shipping policy
- `/returns` — Returns policy

## Tech Stack Details

### React 18
- Functional components with hooks
- `useState` for local state
- `useMemo` for filtered/sorted product lists
- `useContext` for cart state

### Vite
- Fast development server
- Hot module replacement (HMR)
- Optimized production build

### Tailwind CSS Browser
- Utility-first CSS framework
- Responsive breakpoints (md, lg)
- Custom design tokens via CSS variables
- Browser version for quick setup

### React Router DOM
- Declarative routing
- Dynamic product pages (`/product/:id`)
- Navigation between collections

### Iconify Icons
- `lucide:search` — Search icon
- `lucide:shopping-cart` — Cart icon
- `lucide:menu` — Mobile menu
- `lucide:funnel` — Filter icon
- `lucide:list` — Sort icon
- `lucide:arrow-left/right` — Pagination

## Design System

### Colors
- Primary: `#000` (Black)
- Background: `#FFF` (White)
- Card: `#FAFAFA`
- Border: `#E5E5E5`
- Muted: `#F5F5F5`
- Tertiary: `#737373`

### Typography
- **Headings**: Inter Bold, tracking-tighter, uppercase
- **Body**: Inter Regular
- **Labels**: Poppins, uppercase, tracking-widest

### Layout
- Max container: responsive grid (1/2/3 columns)
- Spacing: 12px base unit
- Content padding: 6px mobile, 12px desktop

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kartik-codes26/E-commerce-eyewear.git

# Navigate to project directory
cd E-commerce-eyewear

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Building for Production

```bash
# Create optimized build
npm run build
```

The build output will be in the `dist` directory.

### Deployment

Deploy the `dist` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Product Data Structure

Each product follows this structure:

```javascript
{
  id: 'apollo',
  name: 'The Apollo',
  type: 'sun',           // 'sun' or 'optical'
  price: 285,
  colors: [
    { name: 'Onyx Black', hex: '#000000', gradient: 'Gradient Gray' }
  ],
  images: ['url1', 'url2', 'url3'],
  description: 'Product description...',
  dimensions: { lensWidth: '50mm', bridgeWidth: '21mm', templeLength: '145mm' },
  isNew: true
}
```

## API/Backend

This is a frontend-only demo. Product data is stored statically in `src/data/products.js`. To add backend functionality:
- Integrate with Shopify, Stripe, or any e-commerce platform
- Add user authentication
- Implement checkout flow

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2026 — All Rights Reserved The Other

---

Built with React, Vite, and Tailwind CSS