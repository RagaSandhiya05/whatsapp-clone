# 💬 WhatsApp Web Clone (Full Stack)

A simplified full-stack clone of WhatsApp Web built using the MERN stack with real-time messaging functionality.



## 🚀 Features

*  User creation (simple username-based login)
*  One-to-one chat between users
*  Real-time messaging using Socket.IO
*  Chat history stored in MongoDB
*  Messages displayed in chronological order
*  Persistent messages after refresh
*  Clean UI using Tailwind CSS
*  Instant message updates without reload



## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Socket.IO Client
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* Socket.IO



## 📁 Project Structure

```
whatsapp-clone/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```



## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```
git clone <your-repo-url>
cd whatsapp-clone
```



### 🔹 2. Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/whatsapp
```

Start backend:

```
npm run dev
```

Backend runs on:

```
http://localhost:5000
```



### 🔹 3. Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```



## 🗄️ Database Setup

Make sure MongoDB is installed and running locally.

Default connection:

```
mongodb://127.0.0.1:27017
```

You can verify using MongoDB Compass.



## 🔌 API Endpoints

### 👤 User APIs

* `POST /api/users` → Create user
* `GET /api/users` → Get all users

### 💬 Message APIs

* `POST /api/messages` → Send message
* `GET /api/messages/:user1/:user2` → Get chat



## ⚡ Real-Time Communication

* Implemented using Socket.IO
* Messages are instantly updated across clients
* No page refresh required



## 🎯 Key Functionalities

* Users can log in with a username
* Select another user to start chatting
* Send and receive messages in real-time
* Messages are stored and retrieved from database
* UI mimics WhatsApp Web layout




## 🚀 Future Improvements

*  Typing indicator
*  Online/offline status
*  Profile pictures
*  Group chat
*  Message read receipts



## 📌 Notes

* Ensure MongoDB server is running before starting backend
* Run backend and frontend in separate terminals
* Use different usernames for multiple users



## 👩‍💻 Author

RAGA SANDHIYA R



## ⭐ Conclusion

This project demonstrates full-stack development skills including API design, database handling, real-time communication, and frontend UI development.

