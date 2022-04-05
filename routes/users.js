import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { updateUser } from '../controllers/user.js';
const router = express.Router();
//all routes here are starts with /users

let allUsers = [
  {
    firstName : "Arun",
    lastName : "Balaji R",
    age : 21
  },
  {
    firstName : "Vijay",
    lastName : "Baskar R",
    age : 19
  },
  {
    firstName: "Diwakar",
    lastName: "johny",
    age: 23,
    id: "3565aec2-42d6-4818-9bef-44db2be67cd3"
    }
];
//GET
router.get('/',(req,res)=>{
  res.send(allUsers);
  
})

router.get('/:id',(req,res)=>{
  const uid = req.params.id;
  const foundUser = allUsers.find(user => user.id == uid);
  res.send(foundUser);
})

//POST
router.post('/',(req,res)=>{
  const uniqueId = uuidv4();
  const newUser = req.body;
  const userWithId = { ...newUser, id: uniqueId}
  allUsers.push(userWithId);
  res.send(`User with name ${req.body.firstName+" "+req.body.lastName} is added.`);

})

//Delete
router.delete('/:id',(req,res)=>{
  const uuid = req.params.id;
  allUsers = allUsers.filter((user)=> user.id != uuid);
  res.send("User Deleted");
})

//PATCH (UPDATE) NOTE :
router.patch('/:id',updateUser)


export default router;

