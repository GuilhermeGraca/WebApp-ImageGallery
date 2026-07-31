<a id="readme-top"></a>

<!-- PROJECT LOGO & HEADER -->
<br />
<div align="center">
  <a href="https://github.com/GuilhermeGraca/WebApp-ImageGallery">
    <img src="preview/ImgGaleryBannerLogo.png" alt="Project Logo" width="500" height="400" style="border-radius: 8px; object-fit: cover;">
  </a>
  <h3 align="center">Image Gallery</h3>

  <p align="center">
    An academic project developed for the <strong>Produção de Conteúdos Multimédia</strong> course at <strong>ISEL (Instituto Superior de Engenharia de Lisboa)</strong>.
    <br />
    <br />
    <a href="#about-the-project"><strong>Explore the Documentation »</strong></a>
    <br />
    <br />
    <a href="https://github.com/GuilhermeGraca/WebApp-ImageGallery/issues">Report Bug</a>
    &middot;
    <a href="https://github.com/GuilhermeGraca/WebApp-ImageGallery/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features--key-highlights">Features & Key Highlights</a></li>
      </ul>
    </li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation--running-locally">Installation & Running Locally</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">



https://github.com/user-attachments/assets/b9472c5e-c22b-429f-aab8-5d0f5e89244d



  <br />
  <p align="center">
    <em>If the embedded video above is not displaying correctly, <a href="preview/previewvideo.mp4"><strong>click here to watch/download the video demo »</strong></a></em>
  </p>
</div>
<br />

This repository contains **Image Gallery**, an academic project developed from scratch for the *Produção de Conteúdos Multimédia* course at **ISEL - Instituto Superior de Engenharia de Lisboa** in 2024.

The primary goal of this project is to build a web application that filters and displays landmark images from a structured dataset. It uses HTML5 Canvas and vanilla JavaScript to process pixel data directly in the browser, allowing users to search images by category keywords or by dominant colors calculated through color histograms.

> [!NOTE]
> This repository is configured with a reduced sample dataset of 1,200 images for fast cloning and testing. Because of this smaller dataset, certain search queries and color filters may return fewer results than the complete academic dataset.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Built With

* [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Features & Key Highlights

* **Keyword Category Search**: Filter images instantly by selecting a landmark category from the dropdown menu.
* **Dominant Color Filtering**: Search images by clicking color palette buttons to match pixel color distribution.
* **Canvas Grid Rendering**: Dynamically compute square grid dimensions and render image previews on an HTML5 Canvas.
* **Client-Side Storage**: Save current search results and processed color data in browser local storage for fast retrieval.
* **Audio Feedback**: Play interactive click sounds when triggering search queries and UI controls.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LESSONS LEARNED -->
## Lessons Learned

* **HTML5 Canvas Manipulation**: Learned to draw images, inspect pixel data, and clear drawing contexts using JavaScript.
* **Color Histogram Analysis**: Consistently extracted RGB color moments and classified dominant pixel colors from image data.
* **JavaScript Modular Architecture**: Structured classes for image processing, database search, and local storage management.
* **DOM and Event Handling**: Connected user interface elements like select menus and buttons to canvas rendering routines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- GETTING STARTED -->
## Getting Started

Follow these instructions to set up a local copy of the project on your machine.

### Prerequisites

* A modern web browser such as Google Chrome or Mozilla Firefox
* A local development server such as VS Code Live Server or Python HTTP server

### Installation & Running Locally

1. **Clone the repository**:
   ```sh
   git clone https://github.com/GuilhermeGraca/WebApp-ImageGallery.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd WebApp-ImageGallery/ImageSearch
   ```
3. **Start a local development server**:
   * If using **VS Code**, right-click `index.html` and select **Open with Live Server**.
   * Or run a simple HTTP server from your terminal:
     ```sh
     # Using Python
     python -m http.server 5500

     # Using Node.js http-server
     npx http-server -p 5500
     ```
4. **Open the application**:
   Open your browser and navigate to `http://127.0.0.1:5500`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- USAGE -->
## Usage

* **Search by Landmark Category**: Select a famous monument from the dropdown menu and click the search button to render all matching images in a grid on the canvas.
* **Search by Dominant Color**: Click any of the colored buttons in the color palette to display images where that specific color is dominant.
* **Inspect Results**: Observe how the application organizes the returned images in a balanced, dynamically sized canvas grid.
* **Sample Dataset Notice**: Note that the application uses a reduced sample dataset for lighter performance, meaning some search queries may not display results for every image available in the original academic collection.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTACT -->
## Contact

Guilherme Graça
* LinkedIn: [Guilherme Graça](https://www.linkedin.com/in/guilherme-gra%C3%A7a-b58299330/)
* GitHub: [@GuilhermeGraca](https://github.com/GuilhermeGraca)
* Project Link: [https://github.com/GuilhermeGraca/WebApp-ImageGallery](https://github.com/GuilhermeGraca/WebApp-ImageGallery)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* **ISEL - Instituto Superior de Engenharia de Lisboa**: For providing the academic framework, technical resources, and landmark image dataset for this project.
* **Produção de Conteúdos Multimédia Course 2024**: For the theoretical and practical foundation in web development and multimedia image processing.
* **Martim Ramos**: Project partner and collaborator during the development of this academic project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
