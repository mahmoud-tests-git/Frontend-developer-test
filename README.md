# Calvero - Luxury Belt E-commerce Platform

Frontend Developer Test Case - Mashoor 2025/08

### Live Demo

https://frontend-17mahmoud-developer-test.vercel.app/en

### Key features

-  Next.js 15 with App Router and Server Components with SSR and SSG
-  Multilingual Support (English/Turkish) with url based routing
-  Redux Toolkit for state management (favorites system)
-  SEO (Dynamic metadata, JSON-LD, sitemap
-  Responsive Design with TailwindCSS + shadcn/ui
-  Error Handling (404/500 pages)
-  Type Safety with TypeScript implementation and ESLint 
and Prettier rules

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mahmoud-tests-git/Frontend-developer-test.git
cd frontend-developer-test
```

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

1. **Set up environment variables:**
- **Required Environment Variables:**

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALVERO_API_URL=https://api.calvero.club
```

1. **Start the development server:**

```bash
npm run dev
```

### Usage Commands

```bash
#Linting and formatting 
npm run eslint #to run eslint check
npm run eslint:fix # fix eslint
npm run format # to format on Prettier rules
npm run format:check # format of Prettier rules
#Translation management
npm run lingui:extract #extract the phrases to the po files
npm run lingui:compile #compile te po files to js files 
npm run lingui:extract-compile  #both
```

### **Available Routes**

- **`/`** → Redirects to user's preferred language
- **`/en`** → English homepage
- **`/tr`** → Turkish homepage
- **`/en/login`** → English login page
- **`/tr/login`** → Turkish login page
- **`/en/register`** → English registration page
- **`/tr/register`** → Turkish registration page
- **`/en/category/[id]`** → English category pages
- **`/tr/category/[id]`** → Turkish category pages
- **`/en/favourites`** → English favorites page
- **`/tr/favourites`** → Turkish favorites page

### API integrated

The application integrates with the Calvero API:

- **Categories**: `https://api.calvero.club/categories`
- **Category Details**: `https://api.calvero.club/categories/{id}`
- **Authentication**: `https://api.calvero.club/auth/*`

## **Architecture**

**Project Structure**

```
frontend-developer-test/
├── public/ #  assets
│   ├── favicon/ # Favicons
│   ├── mock/ # Mock JSON data
│   └── .webp #  images
├── src/
│   ├── app/ #App Router
│   │   ├── [locales]/ # internationalized routes
│   │   │   ├── (home)/ # Home page group
│   │   │   ├── category/ # Dynamic category routes
│   │   │   ├── login/ # User login
│   │   │   ├── register/ # User registration
│   │   │   ├── favourites/ # favorites
│   │   │   └── layout.tsx # Locale-specific layout
│   │   ├── api/ # API routes
│   │   ├── error.tsx # Error boundary
│   │   ├── global-error.tsx # Global error handler
│   │   ├── not-found.tsx # 404 page
│   │   ├── sitemap.ts # Dynamic sitemap
│   │   ├── robots.ts # SEO robots file
│   │   └── layout.tsx # Root layout
│   ├── components/ # React components
│   │   ├── atoms/ basic building blocks
│   │   ├── molecules/ # component combinations
│   │   ├── organisms/ # complex UI sections
│   │   ├── providers/ # context providers
│   │   └── ui/ # shadcn/ui components
│   ├── lib/ # Utilities and configurations
│   │   ├── features/ # Redux slices
│   │   ├── hooks/ # Custom React hooks
│   │   ├── transformers/ # Data transformers
│   │   ├── store.ts # Redux store
│   │   └── utils.ts # Utility functions
│   ├── locales/ # Translation files
│   ├── styles/ # Global styles
│   ├── middleware.ts # Next.js middleware
│   └── appRouterI18n.ts # i18n configuration
├── next.config.ts # Next.js configuration
├── tailwind.config.js # TailwindCSS configuration
 ── lingui.config.js # LinguiJS configuration
```

### **The Atomic Design Architecture**

```
Atoms
├── Logo, Button, Input, Badge
├── IconButton, NavigationLink
└── FormInput, FormCheckbox
Molecules
├── ActionButtons, SearchHeader
├── FormSection, ProductActions
└── DesktopNavigation, MobileMenu
Organisms
├── Header, Footer, ProductCard
├── LoginForm, RegisterForm
└── ProductsCarousel, DataContainer
```

### **Redux State Management**

```tsx
store/
├── favourites/    # user favorites 
│   └──── actions    # addFavourite, removeFavourite
└── store.ts       # Root store configuration

```

### **How Internationalization Implemented**

- **Route-based localization**: `/en/*` and `/tr/*`
- **Dynamic metadata**: Localized titles and descriptions
- **Component-level translations**: `t(i18n)`...``

### **Metadata & Structured Data**

- **Dynamic Metadata**: page title, description, keywords
- **OpenGraph Cards**: Social media
- **Twitter Cards**
- **JSON-LD**: [Schema.org](http://schema.org/) structured data

### **Sitemap & Robots**

- **Dynamic Sitemap**: Auto-generated with API integration
- **Robots.txt**
- **Alternative URLs**: Multi-language support
