import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './Routes/userRoutes.js';
import CustomBuildServiceRoutes from './Routes/CustomBuildServiceRoutes.js';
import ProjectNavigatorRoutes from './Routes/ProjectNavigatorRoutes.js';
import DebugAndRescueRoutes from './Routes/DebugAndRescueRoutes.js';
import cartRoutes from './Routes/cartRoutes.js';
import ordersRoutes from './Routes/ordersRoutes.js';
import adminRoutes from './Routes/adminRoutes.js';
import ProjectRoutes from './Routes/ProjectRoutes.js';
import ContactinfoRoutes from './Routes/ContactinfoRoutes.js';
import ChatbotRoutes from './Routes/ChatbotRoutes.js';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://student-sup.netlify.app'],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/User', userRoutes);
app.use('/Contactinfo', ContactinfoRoutes);
app.use('/CustomBuildService', CustomBuildServiceRoutes);
app.use('/ProjectNavigator', ProjectNavigatorRoutes);
app.use('/DebugAndRescue', DebugAndRescueRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', ordersRoutes);
app.use('/admin', adminRoutes);
app.use('/Project', ProjectRoutes);
app.use('/chatbot', ChatbotRoutes);

app.get('/ping', (req, res) => {
  res.send('Server is alive!');
});

export default app;
