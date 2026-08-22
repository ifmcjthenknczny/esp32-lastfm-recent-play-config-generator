# Config Generator for ESP32

A lightweight web interface designed to generate `config.h` and optional `converter.h` header files for C/C++ ESP32 embedded project that shows currently playing song - [available here](https://github.com/ifmcjthenknczny/esp32-lastfm-recent-play). Built with Vue 3, Vite, Tailwind CSS, and `vue-i18n`.

---

## 🚀 Features

* **Instant Header Generation:** Creates formatted `.h` files directly in your browser.
* **Native File System API Integration:** Saves files directly to your local drive using `showSaveFilePicker` with a graceful download fallback for unsupported browsers.
* **Internationalization (i18n):** Multi-language support (English and Polish) powered by `vue-i18n`.
* **Optional Converter Setup:** Automatically exports an additional `converter.h` header when a JPG converter API key is specified.

---

## 🛠️ Tech Stack

* **Framework:** [Vue 3](https://vuejs.org/) (Composition API with `<script setup lang="ts">`)
* **Build Tool:** [Vite](https://www.google.com/search?q=https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Localization:** [vue-i18n](https://vue-i18n.intlify.dev/)

---

## 💻 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18+ recommended)
* `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/config-generator.git
cd config-generator

```


2. **Install dependencies:**
```bash
yarn

```


3. **Start the development server:**
```bash
yarn dev

```


4. **Build for production:**
```bash
yarn build

```

---

## 🌐 Localization Configuration

Translation keys are managed via `vue-i18n` in `src/i18n.ts`. Supported locales:

| Code | Language | Default |
| --- | --- | --- |
| `pl` | Polish | Yes |
| `en` | English | Fallback |

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

## Contact

For questions or feedback, please reach out via GitHub.
[ifmcjthenknczny](https://github.com/ifmcjthenknczny)  

Project Link: [https://github.com/ifmcjthenknczny/esp32-lastfm-recent-play-config-generator](https://github.com/ifmcjthenknczny/esp32-lastfm-recent-play-config-generator)