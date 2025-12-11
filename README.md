# **AI Club Website – README**

## **📌 Overview**

This project is the official website of the **AI Club, Oriental Institute of Science & Technology (OIST)**.
Built entirely using **React.js**, the website highlights the club's mission, activities, blog posts, events, and opportunities for students interested in Artificial Intelligence.

The site is fully responsive and deployed via **Netlify**.

---

## **🚀 Live Website**

Visit the live site here:
🔗 **[https://ai-club-oist.netlify.app/](https://ai-club-oist.netlify.app/)**

---

## **✨ Features**

* **🏠 Modern Homepage:** Clean introduction to the club and its goals
* **🧠 About Section:** Learn about the club's mission, focus areas, and values
* **📝 Blogs:** Articles on AI, ML, Data Science, and tech topics
* **📅 Events & Workshops:** Details about AI Club events and sessions
* **📬 Contact Section:** Ways to reach out or join the club
* **🎨 Fully Responsive:** Works smoothly on all devices
* **⚡ Fast & Reliable:** Hosted and continuously deployed through Netlify

---

## **🛠️ Tech Stack**

* **Frontend:** React.js
* **Styling:** CSS / TailwindCSS *(update depending on your project)*
* **Icons & UI:** React Icons / Custom Components
* **Routing:** React Router
* **Deployment:** Netlify

---

## **📂 Project Structure**

```
📦ai-club-oist
 ┣ 📂public
 ┃ ┣ 📜backvideo.webm
 ┃ ┣ 📜backvideo1.webm
 ┃ ┣ 📜Cypher-30 -3.0 -top-30-list.pdf
 ┃ ┣ 📜Cypher30_3.0_Rule_Guide.pdf
 ┃ ┣ 📜Solution_of_cypher30_Week_1_questions.pdf
 ┃ ┣ 📜Solution_of_cypher30_Week_2_questions.pdf
 ┃ ┣ 📜Solution_of_cypher30_Week_3_questions.pdf
 ┃ ┣ 📜Solution_of_cypher30_Week_4_questions .pdf
 ┃ ┣ 📜Solution_of_cypher30_Week_5_questions.pdf
 ┃ ┣ 📜vite.svg
 ┃ ┗ 📜_redirects
 ┣ 📦src
 ┃┣ 📂assets
 ┃┃ ┣ 📜.txt
 ┃┃ ┣ 📜asset.js
 ┃┣ 📂components
 ┃┃ ┣ 📂Background
 ┃┃ ┃ ┣ 📜BackgroundVideo.css
 ┃┃ ┃ ┗ 📜BackgroundVideo.jsx
 ┃┃ ┣ 📂body
 ┃┃ ┃ ┣ 📂about
 ┃┃ ┃ ┃ ┣ 📜About.css
 ┃┃ ┃ ┃ ┣ 📜About.jsx
 ┃┃ ┃ ┃ ┣ 📜About1.css
 ┃┃ ┃ ┃ ┗ 📜About1.jsx
 ┃┃ ┃ ┣ 📂Blog
 ┃┃ ┃ ┃ ┣ 📜Blog.css
 ┃┃ ┃ ┃ ┗ 📜Blog.jsx
 ┃┃ ┃ ┣ 📂Contact
 ┃┃ ┃ ┃ ┣ 📜.txt
 ┃┃ ┃ ┃ ┣ 📜contact.css
 ┃┃ ┃ ┃ ┗ 📜ContactSection.jsx
 ┃┃ ┃ ┣ 📂events
 ┃┃ ┃ ┃ ┣ 📜Event.css
 ┃┃ ┃ ┃ ┗ 📜Event.jsx
 ┃┃ ┃ ┣ 📂Resources
 ┃┃ ┃ ┃ ┣ 📜Resouce.jsx
 ┃┃ ┃ ┃ ┗ 📜Resource.css
 ┃┃ ┃ ┗ 📂Team
 ┃┃ ┃ ┃ ┣ 📜Team.css
 ┃┃ ┃ ┃ ┗ 📜Team.jsx
 ┃┃ ┣ 📂Footer
 ┃┃ ┃ ┣ 📜Footer.css
 ┃┃ ┃ ┗ 📜Footer.jsx
 ┃┃ ┣ 📂Hero
 ┃┃ ┃ ┣ 📜Hero.css
 ┃┃ ┃ ┗ 📜Hero.jsx
 ┃┃ ┣ 📂Navbar
 ┃┃ ┃ ┣ 📜Navbar.css
 ┃┃ ┃ ┣ 📜Navbar.jsx
 ┃┃ ┃ ┗ 📜Navbars.jsx
 ┃┃ ┗ 📂SplineScene
 ┃┃ ┃ ┣ 📜SplineScene.css
 ┃┃ ┃ ┗ 📜SplineScene.jsx
 ┃┣ 📂pages
 ┃┃ ┣ 📂Ai_Magazine
 ┃┃ ┣ 📂Blog_page
 ┃┃ ┃ ┣ 📜Blog_p.css
 ┃┃ ┃ ┗ 📜Blog_p.jsx
 ┃┃ ┣ 📂Contact_page
 ┃┃ ┃ ┣ 📜Contact_p.css
 ┃┃ ┃ ┗ 📜Contact_p.jsx
 ┃┃ ┣ 📂Cypher30
 ┃┃ ┃ ┣ 📜Cypher30_p.css
 ┃┃ ┃ ┗ 📜Cypher30_p.jsx
 ┃┃ ┣ 📂Cypher30_3.0
 ┃┃ ┃ ┣ 📜Cypher30_3.css
 ┃┃ ┃ ┣ 📜Cypher30_3.jsx
 ┃┃ ┃ ┗ 📜Cypher30_33.jsx
 ┃┃ ┣ 📂Event_page
 ┃┃ ┃ ┣ 📜Event_p.css
 ┃┃ ┃ ┗ 📜Event_p.jsx
 ┃┃ ┣ 📂Logo_page
 ┃┃ ┃ ┣ 📜Logo_p.css
 ┃┃ ┃ ┗ 📜Logo_p.jsx
 ┃┃ ┣ 📂Magzine_1.0
 ┃┃ ┃ ┣ 📜Mag1.css
 ┃┃ ┃ ┗ 📜Mag1.jsx
 ┃┃ ┣ 📂Magzine_2.0
 ┃┃ ┃ ┣ 📜Mag2.css
 ┃┃ ┃ ┗ 📜Mag2.jsx
 ┃┃ ┣ 📂Team_page
 ┃┃ ┃ ┣ 📜Team_p.css
 ┃┃ ┃ ┗ 📜Team_p.jsx
 ┃┃ ┗ 📂TEDx_page
 ┃┃ ┃ ┣ 📜TEDx_p.css
 ┃┃ ┃ ┗ 📜TEDx_p.jsx
 ┃┣ 📜App.jsx
 ┃┣ 📜Home.css
 ┃┣ 📜Home.jsx
 ┃┣ 📜index.css
 ┃┣ 📜main.jsx
 ┃┗ 📜spline.txt
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.js
```

---

## **⚙️ Installation & Setup**

### **1. Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2. Install project dependencies**

```bash
npm install
```

### **3. Run the development server**

```bash
npm start
```

### **4. Build for production**

```bash
npm run build
```

---

## **🌐 Deployment (Netlify)**

The website is deployed via **Netlify** with automatic deployment from the main branch.

To manually deploy:

1. Run `npm run build`
2. Upload the generated **build/** folder to Netlify
3. Netlify will automatically host the site

---

## **🤝 Contributing**

Contributions are welcome!
To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## **📧 Contact**

For inquiries about the club or the website, reach out to the AI Club team:
📮 *dbadhauliya@gmail.com*.

---

## **⭐ Support the Project**

If you like the project, please consider ⭐ starring the repository!

---

If you want, I can also:
✅ Add shields/badges (Netlify deploy status, React version, license, etc.)
✅ Create a more visual or minimalist README
✅ Add installation GIFs or screenshots
Just let me know!
