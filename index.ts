import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
   const users = await prisma.user.findMany({
      include: { hobbies: { include: { hobby: true } } },
   });
   res.send(users);
});
app.get('/users/:id', async (req, res) => {
    const id = Number(req.params.id)
   const user = await prisma.user.findFirst({
      where: { id: id },
      include: { hobbies: { include: { hobby: true } } },
   });
   res.send(user);
});

app.get('/hobbies', async (req, res) => {
   const hobbies = await prisma.hobby.findMany({
      include: { users: { include: { user: true } } },
   });
   res.send(hobbies);
});

app.get('/hobbies/:id', async (req, res) => {
    const id = Number(req.params.id)
   const hobby = await prisma.hobby.findFirst({
      where: { id: id},
      include: { users: { include: { user: true } } },
   });
   res.send(hobby);
});

app.listen(4000, () => {
   console.log(`Server started at http://localhost:4000`);
});