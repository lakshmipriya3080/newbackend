const express = require('express');
const router = express.Router();
const app=express();
const cors = require('cors');



const usersmodel=require('./db')
const usersRouter=require('./routes/usersRouter')

app.use(cors());
app.use(express.json())
app.use('hrm/logins', usersRouter)

app.listen(4005,()=>

    console.log("connected")
)
