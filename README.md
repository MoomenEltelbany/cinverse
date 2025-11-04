<div align="center">
  <h1>🎬 Cineverse</h1>
  <h3>Your Ultimate Movie & TV Show Discovery Platform</h3>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  [![GitHub stars](https://img.shields.io/github/stars/MoomenEltelbany/cineverse?style=social)](https://github.com/MoomenEltelbany/cineverse/stargazers)
  
  [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![MUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  
  <img src="https://img.shields.io/github/repo-size/MoomenEltelbany/cineverse?color=blueviolet" alt="Repo size" />
</div>

<br />

> A modern, feature-rich web application for discovering movies and TV shows, built with React and powered by The Movie Database (TMDb) API.

## 🌟 Features

<div align="center">
  <table>
    <tr>
      <td width="50%">
        <h3>🎬 Rich Media Experience</h3>
        <ul>
          <li>Browse trending and popular movies & TV shows</li>
          <li>Detailed information with ratings and reviews</li>
          <li>High-quality posters and backdrop images</li>
          <li>Cast and crew information</li>
          <li>Watch trailers directly in the app</li>
        </ul>
      </td>
      <td width="50%">
        <h3>⚡ Modern Tech Stack</h3>
        <ul>
          <li>Built with React 19 and Vite</li>
          <li>Material-UI for beautiful components</li>
          <li>TailwindCSS for utility-first styling</li>
          <li>Fully responsive design</li>
          <li>Fast and optimized performance</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <h3>🔍 Smart Search & Discovery</h3>
        <ul>
          <li>Real-time search functionality</li>
          <li>Filter by genres and categories</li>
          <li>Personalized recommendations</li>
          <li>Bookmark your favorites</li>
          <li>Create and manage watchlists</li>
        </ul>
      </td>
      <td>
        <h3>🎨 User Experience</h3>
        <ul>
          <li>Smooth animations with Swiper</li>
          <li>Toast notifications for user feedback</li>
          <li>Intuitive navigation with React Router</li>
          <li>Clean and modern UI design</li>
          <li>Mobile-first responsive layout</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** 16.14.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0+)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MoomenEltelbany/cineverse.git
   cd cineverse
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173) to see the app in action!

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist` folder.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) 19 with Hooks
- **Build Tool**: [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- **UI Library**: [Material-UI](https://mui.com/) v7 with Emotion
- **Styling**: [TailwindCSS](https://tailwindcss.com/) v4
- **Routing**: [React Router](https://reactrouter.com/) v7
- **Carousel**: [Swiper](https://swiperjs.com/) v12
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Code Quality**: ESLint + Prettier
- **API**: [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)

## 📂 Project Structure

```
cineverse/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── ...
│   │   └── layout/          # Layout components
│   │       ├── AppLayout.jsx
│   │       ├── HeaderNav.jsx
│   │       ├── Footer.jsx
│   │       └── ...
│   ├── pages/               # Page components
│   │   └── ErrorPage.jsx
│   ├── services/            # API service functions
│   │   ├── api.js
│   │   ├── moviesAPI.js
│   │   ├── seriesApi.js
│   │   ├── actorsApi.js
│   │   ├── genresApi.js
│   │   └── searchApi.js
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Application entry point
├── public/                  # Public assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── eslint.config.js         # ESLint configuration
```

## 🎯 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 🐛 Found a Bug?

If you find a bug, please [open an issue](https://github.com/MoomenEltelbany/cineverse/issues) with detailed steps to reproduce it.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the comprehensive movie and TV show data
- [Vite](https://vitejs.dev/) for the blazing fast development experience
- [Material-UI](https://mui.com/) for the beautiful React components
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- All the amazing open-source libraries that made this project possible

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

## 📬 Contact

**Moomen Eltelbany**

- 📧 Email: [moomen.eltelbany@gmail.com](mailto:moomen.eltelbany@gmail.com)
- 🐙 GitHub: [@MoomenEltelbany](https://github.com/MoomenEltelbany)
- 💼 LinkedIn: [Moomen Eltelbany](https://www.linkedin.com/in/moomen-eltelbany/)

---

<p align="center">Made with ❤️ by Moomen Eltelbany</p>
