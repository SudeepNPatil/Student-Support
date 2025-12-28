import dotenv from 'dotenv';
import app from './app.js';
import db from './db.js';

dotenv.config();

db();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
