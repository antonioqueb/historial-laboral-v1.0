// app/actions/createEmployee.js
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/api/auth/[...nextauth]';
// file: app/actions/createEmployee.js
const prisma = new PrismaClient();

export async function createEmployee(formData, req) {
  const session = await getServerSession(req, authOptions);
  if (!session) {
    return { success: false, message: 'User not authenticated' };
  }

  const { name, role, department, description } = Object.fromEntries(formData);
  const userId = session.user.id;

  try {
    const employee = await prisma.employee.create({
      data: {
        name,
        role,
        department,
        description,
        userId,
      },
    });

    return { success: true, employee };
  } catch (error) {
    console.error('Error creating employee:', error);
    return { success: false, message: 'Error creating employee' };
  }
}


// app/api/auth/[...nextauth]