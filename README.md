# 🥷 Ninja Time - Ultimate Battle Clock

An interactive anime-inspired digital clock built using **HTML, CSS, and Vanilla JavaScript**.
Instead of displaying only time, Ninja Time creates an exciting real-time battle where Naruto and an enemy run toward each other, unleash powerful attacks, and clash every **15 seconds**.

---

## 📸 Preview


https://narutoclock.vercel.app/

---

## ✨ Features

- 🥷 Smooth Naruto sprite animation (20 PNG frames)
- ⚔️ Smooth Enemy sprite animation (20 PNG frames)
- ⏱️ Real-time digital clock
- 🔄 Continuous 15-second battle cycle
- 💨 Dynamic dust particle effects
- 🌪️ Aura effects during power-up
- 🔥 Rasengan charging animation
- ⚡ Chidori charging animation
- 💥 Clash effects with screen flash
- 📱 Responsive design
- 🎨 Animated backgrounds
- 🌙 Day & Night themes
- ⚡ Optimized using `requestAnimationFrame()`

---

## ⚔️ Battle Timeline

| Time | Event |
|------|-------|
| 0s | Naruto starts from the left |
| 0s | Enemy starts from the right |
| 0–14s | Both run toward the center |
| 14s | Rasengan & Chidori appear |
| 14.7s | Clash begins |
| 15s | Battle resets and starts again |

---

## 📂 Project Structure

```
Ninja-Time/
│
├── index.html
├── style.css
├── app.js
│
├── js/
│   ├── ninja.js
│   ├── particles.js
│   ├── clock.js
│   ├── stopwatch.js
│   ├── countdown.js
│   ├── alarm.js
│   ├── weather.js
│   ├── storage.js
│   └── theme.js
│
├── assets/
│   ├── images/
│   │   ├── ninja-run-1.png
│   │   ├── ...
│   │   ├── ninja-run-20.png
│   │   ├── enemy-run-1.png
│   │   └── enemy-run-20.png
│   │
│   ├── audio/
│   │   ├── tick.mp3
│   │   └── alarm.mp3
│   │
│   └── icons/
│
└── README.md
```

---

## 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)
- Canvas API
- requestAnimationFrame()
- CSS Animations
- Local Storage
- OpenWeather API *(Optional)*

---

## 🎮 Animation System

- 20-frame Naruto sprite animation
- 20-frame Enemy sprite animation
- Frame-by-frame rendering
- Smooth movement interpolation
- Dust particle engine
- Dynamic aura effects
- Battle flash
- Camera shake
- Automatic battle reset every 15 seconds

---

## 🌟 Future Improvements

- 🔊 Battle sound effects
- 🌧️ Dynamic weather
- 🌍 Multiple battle arenas
- 🎵 Background music
- 🦊 Kurama transformation
- 🔥 Fire & lightning particles
- 🎯 Health bars
- ⚔️ Multiple enemy characters

---

## 🛠️ Installation

Clone the repository

Go to the project folder

```bash
cd ninja-time
```

Run the project

```bash
Open index.html
```

or use VS Code Live Server.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Irshad Ahmad**

GitHub: https://github.com/Irsad01

---

### ⭐ If you like this project, don't forget to star the repository!
