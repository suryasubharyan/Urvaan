<!-- LOGO & TITLE -->
<p align="center">
  <img src="https://img.icons8.com/color/120/000000/plant-under-sun.png" height="100" alt="Mini Plant Store Logo" />
</p>
<h1 align="center">🌱 Mini Plant Store</h1>
<p align="center">
  <b>Modern, Secure & Responsive Full-Stack E-commerce for Plant Lovers</b><br>
  <i>Built with React, Express, MongoDB, JWT Auth, Debounced Search, and 💚 attention to user experience.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&style=flat-square" />
  <img src="https://img.shields.io/badge/Backend-Express-black?logo=express&style=flat-square" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&style=flat-square" />
  <img src="https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens&style=flat-square" />
  <img src="https://img.shields.io/badge/Responsive%20UI-Yes-00C49A?style=flat-square" />
  <img src="https://img.shields.io/badge/Debounced%20Search-Enabled-f59e42?style=flat-square" />
</p>

---

## 🚀 Live Demo

<p align="center">
  <a href="https://urvaan-1.onrender.com/" target="_blank">
    <img src="https://img.shields.io/badge/Visit%20Mini%20Plant%20Store-00C49A?style=for-the-badge&logo=plant" alt="Live Demo" />
    <br>
    <b>https://urvaan-1.onrender.com/</b>
  </a>
</p>

---

## 🖼️ Screenshots

<p align="center">
  <img src="assets/login.png" width="220" alt="Login" />
  <img src="assets/signup.png" width="220" alt="Signup" />

  <img src="assets/add-plant.png" width="220" alt="Add Plant" />
  <img src="assets/update-plant.png" width="220" alt="Update Plant" />
</p>
<p align="center">
  <i>Login, Signup, Plant Catalog, Add Plant, Update Plant (responsive on all devices)</i>
</p>

---

## 💡 Why Mini Plant Store?

- **Start on Login/Signup:** Secure entry point, JWT-based, with role selection (User/Admin).
- **Role-Based Access:** Admins manage plants; users browse, search, and filter.
- **Modern, Responsive Interface:** Built with React, optimized for all devices.
- **Lightning-Fast API:** Express + MongoDB, with advanced search/filter.
- **Debounced Search:** Enhanced user experience with debounced search on the plant catalog—no unnecessary API calls while typing.
- **Seeded for Demo:** 50+ plants included for instant exploration.

---

## 🔥 Key Features

| 🛡️ Auth & Roles     | 🌿 Catalog & API      | 🛠️ Admin Tools     | 💎 UI & Experience      |
|---------------------|----------------------|--------------------|------------------------|
| JWT Login/Signup    | Browse all plants    | Add/Update/Delete  | Mobile-first design    |
| Role: User/Admin    | Debounced search     | Protected routes   | Clean grid/list views  |
| Protected routes    | Filter by category   | Validation & toasts| Animated feedback      |
| Persistent session  | API: CRUD RESTful    | Dashboard forms    | Themed navigation      |

---

## 🏗️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Debounce-Enabled-f59e42?style=flat-square" />
</p>

---

## 🏛️ Project Structure

```plaintext
/server           # Express.js backend
  /models         # Mongoose schemas
  /routes         # API endpoints
  seeder.js       # Database seeder
/client           # React frontend
  /src
    /components   # UI components
    /pages        # Main pages
/assets           # Project screenshots for README
.env              # Environment variables
```

---

## ⚡ Quickstart

### 1. Clone & Install

```bash
git clone https://github.com/suryasubharyan/Urvaan.git
cd Urvaan
```

### 2. Backend Setup

```bash
cd server
cp .env.example .env      # Set PORT, MONGO_URI, JWT_SECRET
npm install
npm run dev               # Start backend
node seeder.js            # Optional: Seed DB with plants
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start                 # or npm run dev
```

### 4. Visit the Live App

> [https://urvaan-1.onrender.com/](https://urvaan-1.onrender.com/)

---

## 🌐 Environment Variables

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🚦 Roadmap

- [x] JWT Auth: Signup/Login, roles, persistence
- [x] Plant APIs: CRUD, search, filter
- [x] Admin dashboard (protected)
- [x] Beautiful responsive UI (React)
- [x] DB seeder (50+ plants)
- [x] Debounced search on plant catalog
- [x] Logout, validation, toasts
- [ ] Plant detail & gallery
- [ ] Shopping cart & checkout
- [ ] User order history
- [ ] Deployment (Vercel/Netlify)
- [ ] API docs & tests

---

## 🛡️ Security & Best Practices

- Passwords hashed with bcrypt
- Secure JWT storage & validation
- Role-based access control everywhere
- Input validation for APIs and forms

---

## 🤝 Contributing

Pull requests and issues are welcome!  
See [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

<p align="center">
  <b>🔥 Happy Planting! 🌿</b>
  <br>
  <img src="https://img.icons8.com/color/48/000000/seedling.png" height="32" alt="seedling"/>
</p>