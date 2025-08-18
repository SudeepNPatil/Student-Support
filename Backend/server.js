import express from "express"
import db from "./db.js"
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoutes from './Routes/userRoutes.js'
import CustomBuildServiceRoutes from './Routes/CustomBuildServiceRoutes.js'
import ProjectNavigatorRoutes from './Routes/ProjectNavigatorRoutes.js'
import DebugAndRescueRoutes from './Routes/DebugAndRescueRoutes.js'
import cartRoutes from './Routes/cartRoutes.js'
import ordersRoutes from './Routes/ordersRoutes.js'
import adminRoutes from './Routes/adminRoutes.js'
import ProjectRoutes from './Routes/ProjectRoutes.js'
import ContactinfoRoutes from './Routes/ContactinfoRoutes.js'

dotenv.config();

const app = express();

app.use(cors({origin: ["http://localhost:5173", "https://student-sup.netlify.app"],credentials: true}));

app.use(express.json());

app.use(cookieParser());

db();

app.use("/User", userRoutes);

app.use('/Contactinfo', ContactinfoRoutes);

app.use('/CustomBuildService', CustomBuildServiceRoutes);

app.use('/ProjectNavigator', ProjectNavigatorRoutes);

app.use('/DebugAndRescue', DebugAndRescueRoutes)

app.use('/cart', cartRoutes);

app.use('/orders',ordersRoutes);

app.use('/admin', adminRoutes);

app.use("/Project",ProjectRoutes);

app.get('/ping', (req, res) => {

    res.send('Server is alive!');

});

app.listen(process.env.PORT, () => {
    console.log(`server is running on  http://localhost:${process.env.PORT}`);
})