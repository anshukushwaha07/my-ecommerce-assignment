# 🚀 E-Commerce Product Listing App

> A full-stack MERN application featuring search, filters, pagination, sorting, categories, a deals section, and a fully responsive UI powered by a robust backend API.

## 📌 Features

### ✅ Frontend
- **Hero Carousel:** Auto-playing slider for featured items.
- **Dynamic Product Grid:** Responsive layout displaying products.
- **Advanced Filtering:** Filter by Category, Price Range, and Star Rating.
- **Smart Search:** Search functionality with autocomplete suggestions.
- **Sorting:** Sort products by Price (Low → High, High → Low).
- **Pagination:** Efficiently browse large datasets.
- **Deals Section:** Highlighted special offers.
- **Responsive Design:** Mobile-friendly sidebar and Amazon-style UI.

### ✅ Backend
- **RESTful APIs:** Endpoints for Products and Categories.
- **Search Logic:** Server-side search across product names.
- **Query Handling:** Sorting, Filtering, and Pagination logic handled via Mongoose.
- **Database:** MongoDB integration using Mongoose.
- **Data Seeding:** Script to populate the database with dummy products.

---

## 📂 Folder Structure

```text
/project-root
│
├── /backend            # Node.js + Express API
│   ├── controllers/    # Route logic
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── DB/         # DB connection
│   ├── server.js       # Entry point
│   └── package.json
│
└── /frontend           # React + Vite UI
    ├── src/
    ├── index.html
    └── package.json

```


## 🛠️ Tech Stack

### 💻 Frontend
- **Framework:** React (Vite)
- **Styling:** TailwindCSS
- **Carousel:** Swiper.js
- **HTTP Client:** Axios

### ⚙️ Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ORM:** Mongoose
- **Middleware:** CORS


## 📸 Screenshots

### 🖥️ Desktop View
> A fully responsive product dashboard with filtering and search.

![Desktop View](/frontend/screenshot/desktop1.png)
![Desktop View](/frontend/screenshot/destop2.png)


---

### 📱 Mobile & Tablet View
> Optimized for smaller screens with a collapsible sidebar and touch-friendly grid.

| Mobile View | Tablet View |
| :---: | :---: |
| ![Mobile UI 1](/frontend/screenshot/mobile1.png) | ![Tablet UI 1](/frontend/screenshot/tab1.png) |
| ![Mobile UI 2](/frontend/screenshot/mobile2.png) | ![Tablet UI 2](/frontend/screenshot/tab2.png) |
| ![Mobile UI 3](/frontend/screenshot/mobile3.png) | |

## 🧰 Installation & Setup Guide

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name

```

### 2️⃣ Backend Setup (Node + Express)
- Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

### **Configuration**
Create a `.env` file in the `/backend` directory:

```env
PORT=8080
MONGO_URI=your_mongo_connection_string
CORS_ORIGIN=*

```

### Start the Backend

```bash
npm run dev
```
The server will run at: http://localhost:8080/api/v1

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/products` | Get products with filters (category, price, rating, sort, pagination) |
| `GET` | `/api/v1/products/all` | Returns all products without pagination |
| `GET` | `/api/v1/categories` | Returns a list of available categories |


## 🚀 Deployment

> 🚧 **Status:** Deployment in progress. Live links coming soon!

The application is currently designed for local use. Future deployment targets:
* **Frontend:** Vercel / Netlify
* **Backend:** Render / Railway

### 📝 Contributing
Contributions are welcome! Feel free to fork this repo and submit a Pull Request.

### 📜 License
MIT License © 2025