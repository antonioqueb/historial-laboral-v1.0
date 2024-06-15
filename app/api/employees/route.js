import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const { name, role, department, description, userEmail } = req.body;

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const employee = await prisma.employee.create({
      data: {
        name,
        role,
        department,
        description,
        userId: user.id

      },
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
