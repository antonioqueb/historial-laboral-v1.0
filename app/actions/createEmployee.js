// /app/actions/createEmployee.js
'use server';

import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function createEmployee(req, res, formData) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      console.error('User not authenticated');
      return { success: false, message: 'User not authenticated' };
    }

    const { name, role, department, description } = Object.fromEntries(formData);
    if (!name || !role || !department || !description) {
      console.error('Validation error: All fields are required');
      return { success: false, message: 'All fields are required' };
    }

    const userId = session.user.id;

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
    return { success: false, message: 'Error creating employee', error: error.message };
  } finally {
    await prisma.$disconnect();
  }
}
