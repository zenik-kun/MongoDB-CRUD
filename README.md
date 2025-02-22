# Next.js MongoDB CRUD Example

This is a simple Next.js application that demonstrates CRUD functionality with MongoDB.

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or create an account.
2. Click on **Create a New Project** and name it.
3. In the project, go to **Database Deployments** and create a **Shared Cluster** (free-tier is sufficient).
4. Once created, click on **Connect**, then select **Connect your application**.
5. Copy the provided MongoDB connection string.
6. Go to **Network Access** in the left sidebar and click **Add IP Address**.
7. Set IP to `0.0.0.0/0` (to allow all connections) and save.
8. Go to **Database Access**, create a user with a strong password, and save the credentials.

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add:

```sh
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-database?retryWrites=true&w=majority
```

Replace `your-username`, `your-password`, and `your-database` with actual values.

### 5. Run the Development Server
```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Features
- Create, Read, Update, and Delete (CRUD) operations using MongoDB.
- API routes in Next.js for backend logic.
- Fully functional and easy to extend.
