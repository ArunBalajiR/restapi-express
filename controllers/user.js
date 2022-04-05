export const updateUser = (req,res)=>{
  const uid = req.params.id;
  const usertoUpdate = allUsers.find((user)=> user.id === uid);
  const { firstName, lastName, age } = req.body;
  if(firstName) usertoUpdate.firstName = firstName;
  if(lastName) usertoUpdate.lastName = lastName;
  if(age) usertoUpdate.age = age;
  
  res.send('User updated');
}