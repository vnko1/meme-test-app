# Meme Directory App

A simple React-based web application that displays a directory of popular memes
using the [HeroUI](https://www.heroui.com) component library. The app allows
users to view memes in both a **table** and a **card list**, and provides the
ability to **edit meme properties** via a modal interface. Deployed on
[Railway](https://railway.com).

## 🧩 Features

- 🔄 Navigation between **Table View** and **List View** using `HeroUI.Navbar`
- 🧾 Table View:
  - Displays memes using `HeroUI.Table`
  - Each meme has properties: `Id`, `Title`, `Image URL`, `Likes`
  - Includes **Edit** action (via `HeroUI.Button`) that opens a `HeroUI.Modal`
  - Modal allows inline editing with validation using `HeroUI.Input`,
    `HeroUI.Dropdown`, etc.
  - Data persists in browser cookies or localStorage
- 🃏 List View:
  - Displays memes in responsive `HeroUI.Card` components
  - Each card shows meme `Image`, `Title`, `Likes`, and a link to the meme
- 📱 Fully responsive and styled with **HeroUI default theme**
- ☁️ Deployed on [Railway](https://railway.com) using their
  [React deployment guide](https://docs.railway.app/guides/react)

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [HeroUI](https://www.heroui.com)
- [Railway](https://railway.com)
- [Strapi CMS](https://docs.strapi.io/cms/intro)

## 🖼 Meme Properties

Each meme includes:

| Property | Type   | Notes                                                        |
| -------- | ------ | ------------------------------------------------------------ |
| `Id`     | number | Read-only, unique per meme                                   |
| `Title`  | string | Required, 3-100 characters                                   |
| `Image`  | URL    | Required, valid JPG image URL (e.g. `https://.../image.jpg`) |
| `Likes`  | number | Integer 0-99, randomly generated                             |

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/meme-directory
   cd meme-directory
   ```
