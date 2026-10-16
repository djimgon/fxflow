# 💱 FXFlow

**FXFlow** is a modern currency converter application built with React.

The project provides a simple, intuitive, and responsive interface for currency conversion, focusing on usability, clean component architecture, and modern frontend development practices.

Developed as a practical React project to strengthen frontend development skills.

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

- Docker & Docker Compose
- Make

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/djimgon/fxflow.git
cd fxflow
```

**2. Initialize and start the application**

```bash
make init
```

**3. Open the application**

http://localhost:8080

### Stopping the Application

```bash
make down
```

## 🎯 Features

- Currency conversion interface
- Support for multiple currencies
- Automatic conversion based on selected currencies
- Dynamic updates when changing amounts
- Currency selection for source and target currencies
- Input validation
- Responsive user interface
- Reusable React components

## 🧠 React Concepts Practiced

- Functional Components
- Props & Component Composition
- React Hooks (`useState`, `useMemo`)
- Event Handling
- Controlled Inputs
- Conditional Rendering
- Dynamic Calculations
- State Management
- Component Reusability
- JavaScript Array Methods

## 📁 Project Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── CurrencyConverter.jsx
    │   ├── CurrencySelect.jsx
    │   └── AmountInput.jsx
    ├── data/
    │   └── currencies.js
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

## 📌 Project Status

✅ Completed — Core currency conversion functionality implemented.

---

**Author:** [Dmitry Goncharov](https://github.com/djimgon)