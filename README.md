# 💱 FXFlow

**FXFlow** is a modern currency converter application built with React.

The project provides a simple, intuitive, and responsive interface for currency conversion, focusing on usability, performance, and modern frontend development practices.

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS3
- Node.js
- Docker & Docker Compose
- Nginx

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js & npm
- Docker & Docker Compose
- Make

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/djimgon/fxflow.git
cd fxflow
```

**2. Initialize React (first-time setup only)**

```bash
cd frontend
npm create vite@latest . -- --template react
cd ..
```

> Node.js and npm must be installed on the host machine to initialize React.

**3. Initialize Docker environment**

```bash
make init
```

**4. Restart the environment after initial setup**

```bash
make down
make init
```

**5. Open the application**

http://localhost:8080

## 📌 Project Status

🚧 Under active development.

---

**Author:** [Dmitry Goncharov](https://github.com/djimgon)