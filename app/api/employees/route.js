import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { name, role, department, description } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
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
      userId: user.id,
    },
  });

  res.status(201).json(employee);
}

export async function GET(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { employees: true },
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user.employees);
}

export async function DELETE(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { id } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const employee = await prisma.employee.deleteMany({
    where: {
      id,
      userId: user.id,
    },
  });

  res.status(200).json(employee);
}
