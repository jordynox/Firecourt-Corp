# Firecourt Corp Web Application

## Overview
Official website for **Firecourt Corp**, built with **Next.js 13+** using the App Router, featuring a modern, responsive design with TypeScript and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Carousel**: Embla Carousel
- **Theme**: Next Themes (dark/light mode)

## Project Structure
```
firecourt/
├── app/                    # Next.js 13 app directory
│   ├── (auth)/            # Authentication routes
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── store/             # Store pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── shared/           # Shared components (navbar, footer, etc.)
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
│   └── images/          # Image assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Features
- 🎨 **Modern Design**
  - Responsive layout
  - Dark/Light mode support
  - Smooth animations
  - Custom UI components

- 🛠️ **Core Components**
  - Dynamic Media Carousel
  - Product Cards
  - News Section
  - Events Calendar
  - Interactive Navigation

- 📱 **Responsive Design**
  - Mobile-first approach
  - Breakpoint optimization
  - Touch-friendly interfaces

## Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/firecourt.git
cd firecourt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Guidelines

### Component Structure
```tsx
// components/ExampleComponent.tsx
interface ExampleProps {
  title: string;
  children: React.ReactNode;
}

export function ExampleComponent({ title, children }: ExampleProps) {
  return (
    <div className="...">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### Styling Conventions
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing using Tailwind's spacing scale
- Use CSS variables for theme colors

### Best Practices
- Use TypeScript for type safety
- Implement proper error boundaries
- Optimize images using Next.js Image component
- Follow accessibility guidelines
- Write meaningful commit messages

## Performance Optimization
- Image optimization with next/image
- Font optimization with next/font
- Route prefetching
- Component lazy loading
- Asset minification

## Deployment
1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Deploy to Vercel:
```bash
vercel
```

## Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ASSET_PREFIX=your_asset_prefix
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Support
For support, email support@firecourt.com or join our Slack channel.

## Architecture Guidelines

### Server vs Client Components

#### Server Components (Default)
```tsx
// app/page.tsx
import { db } from '@/lib/db'

export default async function Page() {
  const data = await db.query()
  return <main>{/* Render data */}</main>
}
```

#### Client Components
```tsx
// components/interactive.tsx
"use client"

import { useState } from 'react'

export function InteractiveComponent() {
  const [state, setState] = useState()
  return <div>{/* Interactive content */}</div>
}
```

### When to Use Each

Use Server Components (Default) for:
- Fetching data
- Accessing backend resources
- Keeping sensitive information on the server
- Large dependencies
- Static UI elements

Use Client Components ("use client") for:
- Interactivity and event listeners
- useState, useEffect and other React hooks
- Browser APIs
- Custom event handlers
- Client-side state management
```

This `README.md` will help you guide other developers using Cursor to follow best practices for the design and implementation of your Firecourt Corp website. Let me know if you’d like to adjust or expand any section!

TypeScript: Restart TS Server на случай если ts файлы не заработают
   npm install --save-dev typescript
