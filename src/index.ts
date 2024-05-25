import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes';

dotenv.config();


const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/api",router)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
