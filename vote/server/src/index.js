import express from "express";
import cors from "cors";
import { connectDB } from "./db";
import { authRoutes } from "./routes/authRoutes";
import { voteRoutes } from "./routes/voteRoutes";
import { userRoutes } from "./routes/userRoutes";

const PORT = process.env.PORT || 8000;
const app = express();

// Middlewares
app.use(cors({ origin: ["http://localhost:3000", "https://voting.com"], credentials: true }));
app.use(express.json());



// custom routes
app.get("/", (_, res) => res.send("Home"));

app.use("/auth", authRoutes);
app.use("/vote", voteRoutes);
app.use("/user", userRoutes);



// server functions;

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

startServer()