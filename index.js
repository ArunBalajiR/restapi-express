import express from 'express';
import userRoute from './routes/users.js';

const app = new express();
const PORT = 5000;

app.use(express.json());

app.use('/users',userRoute);


app.get('/',(req,res)=>
  res.send("Hellow World")
);


app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));