import prisma from "../DB/db.config.js";


export const createUser = async (req, res) =>{ 
    const {name, email, password} = req.body;
    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
 if(findUser) {
    return res.json({status:400, message: "Email is already taken, please use another email"})
 }
 const newUser = await prisma.user.create({
    data:{
        name:name,
        email:email,
        password: password
    }
 })
 return res.json({status:200, data:newUser, message:"User created successfully"})
}


// * Update the user
export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
  
    await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name,
        email,
        password,
      },
    });
  
    return res.json({ status: 200, message: "User updated successfully" });
  };