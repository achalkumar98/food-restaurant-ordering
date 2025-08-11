# 🍽️ SpicyFood — Food Ordering Restaurant 🚀

![React](https://img.shields.io/badge/React-18-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-purple)
![Jest](https://img.shields.io/badge/Testing-Jest-red)
![License](https://img.shields.io/badge/License-MIT-green)


[![Watch the demo](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://drive.google.com/file/d/1NUcLcoGqEAYisjpXruB8_MpgF4l2BJz5/view?usp=sharing)



A modern **React**-based food ordering web app built using **Parcel bundler** and the **Swiggy Live API** for real-time restaurant data.

---

## ✨ Features

- **Header**
  - 🖼️ Logo
  - 📍 Navigation Items
- **Body**
  - 🔍 Search functionality
  - 📦 Restaurant Container
    - 🍛 Restaurant Card:
      - 🖼️ Image
      - 🏷️ Name, ⭐ Rating, 🍽️ Cuisine, ⏱️ Delivery Time
- **Footer**
  - © Copyright
  - 🔗 Links
  - 📬 Address
  - 📞 Contact

---

## 📦 Tech Stack

- ⚛️ **React** with **Parcel bundler**
- 🌐 **Swiggy Live API**
- 🛠 **Redux Toolkit** for state management
- 🧪 **Jest + React Testing Library** for testing

---

## 📂 Project Structure

```plaintext
FOOD-ORDERING/
├── src/
│   ├── components/
│   │   ├── __tests__/               # Test files
│   │   ├── AboutUs.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── ContactUs.js
│   │   ├── Error.js
│   │   ├── Footer.js
│   │   ├── Grocery.js
│   │   ├── Header.js
│   │   ├── ItemList.js
│   │   ├── RestaurantCategory.js
│   │   ├── RestaurantMenu.js
│   │   ├── RestroCard.js
│   │   ├── Search.js
│   │   ├── Shimmer.js
│   │   ├── ShimmerMenu.js
│   │   ├── UserClass.js
│   ├── utils/
│   │   ├── appStore.js
│   │   ├── cartSlice.js
│   │   ├── constants.js
│   │   ├── useOnlineStatus.js
│   │   ├── useRestaurant.js
│   ├── App.js
├── index.html
├── index.css
├── babel.config.js
├── jest.config.js
├── package.json
├── README.md




⚡ React Hooks
• useState() → Super-powerful state variables in React
• useEffect() → Side-effects handling



🌍 Routing in Web Apps
1. Client Side Routing
2. Server Side Routing



🛒 Redux Toolkit Setup
1. Install packages:
    npm install @reduxjs/toolkit react-redux
2. Build the store
3. Connect the store to the app
4. Create a slice (e.g., cartSlice)
5. Use:
   • dispatch(action) to trigger updates
   • selector to read data from store



🧪 Testing Setup
Types of Testing
   • 🧩 Unit Testing
   • 🔗 Integration Testing
   • 🌐 End-to-End (E2E) Testing



Steps to Setup Testing
1. Install React Testing Library:
    npm install -D @testing-library/react

2. Install Jest:
    npm install -D jest
    npx jest --init

3. Install Babel dependencies:
    npm install -D babel-jest @babel/preset-env
    npm install -D @babel/preset-react

4. Configure Babel:
    {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }


5. Update Parcel config to disable default Babel transpilation

6. Install jsdom for DOM-like testing:
    npm install -D jsdom

7. Install extra matchers:
    npm install -D @testing-library/jest-dom



🚀 Getting Started
   # Install dependencies
    npm install

   # Start development server
    npm start

  # Run tests
    npm test



📜 License
This project is licensed under the MIT License.


---

If you paste this into your `README.md` and push it, GitHub will:  
- Show the badges at the top  
- Render the emojis  
- Make the formatting look neat with headings and code blocks  


Do you want me to **also create a matching MIT LICENSE file** so your badge works and GitHub detects the license? That will make it fully professional.
