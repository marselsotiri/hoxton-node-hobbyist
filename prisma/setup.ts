import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const users = [
    {
       fullName: 'Marsel',
       photo: 'marsel.jpg',
       email: 'marsel@email.com'
    },
    {
       fullName: 'Landi',
       photo: 'landi.jpg',
       email: 'landi@email.com',
    },
    {
      
       fullName: 'Albi',
       photo: 'alb.png',
       email: 'albi@email.com',
    },
 ];
 
 const hobbies = [
     {
        image: 'imageurl1',
        name: 'mechanic',
        active: true,
     },
     {
        image: 'imageurl2',
        name: 'electrican',
        active: false,
     },
     {
        image: 'imageurl3',
        name: 'plumber',
        active: true,
     },
  ];
  
  const hobbyUsers = [
     
     {
        hobbyId: 2,
        userId:1
     },{
         hobbyId: 3,
         userId:2
      },{
         hobbyId: 1,
         userId:3
      },{
         hobbyId: 1,
         userId:1
      },{
         hobbyId: 3,
         userId:1
      },{
         hobbyId: 2,
         userId:2
      }
  ];

  
  async function createStuff(){
    for (const user of users) {
        await prisma.user.create({data:user})
      }
      for (const hobby of hobbies) {
         await prisma.hobby.create({data:hobby})
       }
       for (const hobbyUser of hobbyUsers) {
        await prisma.userHobby.create({data:hobbyUser})
      }
      
 }

 createStuff()