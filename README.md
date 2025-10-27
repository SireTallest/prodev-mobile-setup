# ProDev Mobile Setup  
*Mobile development starter kit with React Native, TypeScript, NativeWindCSS & Expo*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Table of Contents  
- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## About  
This repository provides a robust starting point for cross-platform mobile app development using modern technologies. It combines:  
- React Native for building mobile UIs  
- TypeScript for type-safe development  
- NativeWindCSS for utility-first styling in React Native  
- Expo for streamlined build, development and deployment experience

By using this setup you’ll be able to start new mobile projects quickly and follow best practices out-of-the-box.

## Features  
- TypeScript configured and enforced for safer code  
- Utility-first styling via NativeWindCSS for faster UI development  
- Expo integration: hot-reloading, easy builds, and cross-platform support  
- Standardised folder structure and scaffolding for scalability  
- Clean, minimal starting point with no unnecessary dependencies  

## Tech Stack  
- **React Native** — for cross-platform mobile UI  
- **TypeScript** — to catch errors early and improve maintainability  
- **NativeWindCSS** — utility-first styling solution for React Native  
- **Expo** — simplifies development, builds and deployment  
- Additional tooling: ESLint, Prettier (you may add these as appropriate)  

## Getting Started  

### Prerequisites  
Make sure you have the following installed:  
- Node.js (v16+ recommended)  
- npm or yarn  
- Expo CLI globally (optional but recommended):  
  ```bash  
  npm install --global expo-cli  
    ```

* A mobile device (iOS/Android) or emulator/simulator

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SireTallest/prodev-mobile-setup.git  
   cd prodev-mobile-setup  
   ```
2. Install dependencies:

   ```bash
   npm install  
   # or  
   yarn install  
   ```
3. If using Expo, you may need to install the Expo Go app on your device, or run a simulator.

### Running the App

Once installed, you can start the development server:

```bash
npm run start  
# or  
yarn start  
```

Then follow the instructions: scan the QR code with Expo Go, or open in emulator/simulator for iOS/Android.

## Project Structure

```
/prodev-mobile-setup  
├── app/  
│   └── …        # your React Native screens & components  
├── assets/  
│   └── …        # images, fonts and static files  
├── nativewind.config.ts  # styling config  
├── tsconfig.json         # TypeScript configuration  
├── app.json / expo.config.js  
└── package.json  
```

> *Tip:* Maintain clear separation between UI components, business logic and styles to keep your app maintainable as it scales.

## Usage

* Add new screens under `app/screens/`.
* Use NativeWind classes for styles, e.g. `<View className="flex-1 bg-white p-4">`.
* Type definitions go under `app/types/`.
* You can eject from Expo later if you need custom native modules.

## Contributing

Contributions, issues and feature requests are welcome!
If you’d like to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project’s style guidelines and that any new features include appropriate documentation.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Contact

**Author:** Oladepo Abdulbaki Opeyemi
GitHub: [SireTallest](https://github.com/SireTallest)
Project Link: [https://github.com/SireTallest/prodev-mobile-setup](https://github.com/SireTallest/prodev-mobile-setup)

---

> *Happy coding! 🚀*
