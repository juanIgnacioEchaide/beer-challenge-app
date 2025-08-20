# beer-challenge-app

This is a mobile application built with **Expo**, using **React** + **TypeScript**. It uses **React Query** for state management and API calls. No external styling libraries are used; all UI is built with custom styles and React components.

---

## Key Features

- Built with **Expo** for easy mobile development.
- Written in **TypeScript** for type safety and better autocompletion.
- **React Query** for efficient remote data management, caching, and loading states.
- No external styling libraries; everything is done with `StyleSheet`, flexbox, and native CSS-in-JS.
- Detail screen uses `[id]` as a dynamic parameter (e.g., `Detail/[id]`).

---

## Scripts Commands to Run

```bash
# 1. Clone the repository
git clone https://github.com/juanIgnacioEchaide/beer-challenge-app.git
cd beer-challenge-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start the development server with Expo
npm run start
# or
yarn start
```

## State management & API calling
The current example was developed using react-query


## Project architecture 
/.
├── app.json
├── package.json
├── tsconfig.json
├── src/
│   ├── components/       
│   ├── hooks/            
│   ├── models/           
│   ├── constants/        
│   └── assets/           
└── app/                  
    ├── index.js
    ├── Home/
    └── Detail/[id]/


### Screenshots
<img width="358" height="804" alt="image" src="https://github.com/user-attachments/assets/8633478a-604f-4091-96ef-55b636fc391e" />

<img width="358" height="804" alt="image" src="https://github.com/user-attachments/assets/c09df599-20ca-4d15-8213-a2a78dac4024" />
