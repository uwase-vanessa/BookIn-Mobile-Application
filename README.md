# BookIn 📚 to your Expo app 👋

BookIn is a mobile-first library and book borrowing app built with [Expo](https://expo.dev/), [React Native](https://reactnative.dev/), and [TypeScript](https://www.typescriptlang.org/). It features user authentication, book browsing, notifications, and a modern UI with [Tailwind CSS](https://tailwindcss.com/) via [NativeWind](https://www.nativewind.dev/).

## Features

- 📖 Browse and search books
- 🛒 Add books to cart and borrow
- 👤 User authentication (login/register)
- 🔔 Notifications and events
- 🎨 Light/dark mode support
- 🖼️ Custom SVG icons and themed components
- 🏷️ Category and service listings

## Project Structure

```
.
├── app/                # App entry, routing, screens, and services
├── components/         # Reusable UI components and SVGs
├── constants/          # Static data and color definitions
├── hooks/              # Custom React hooks
├── types/              # TypeScript types and image declarations
├── assets/             # Images, fonts, and icons
├── global.css          # Tailwind and global styles
├── tailwind.config.js  # Tailwind/NativeWind config
├── metro.config.js     # Metro bundler config
├── package.json        # Project dependencies and scripts
└── ...
```

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Start the development server

```sh
npx expo start
```

You can open the app in:

- Expo Go (scan QR code)
- Android/iOS simulator
- Web browser

### 3. Lint your code

```sh
npm run lint
```

### 4. Reset the project (optional)

To reset to a blank starter, run:

```sh
npm run reset-project
```

## Customization

- **Theming:** Edit colors in [`constants/Colors.ts`](constants/Colors.ts) and [`tailwind.config.js`](tailwind.config.js).
- **SVG Icons:** Add or edit SVGs in [`components/svgs/`](components/svgs/index.ts).
- **API:** Update API endpoints in [`app/services/api.tsx`](app/services/api.tsx).

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)

## License

This project is for educational purposes.

---

*Built with ❤️ using Expo, React Native, and TypeScript.*