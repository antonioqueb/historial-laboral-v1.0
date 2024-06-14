// /app/actions/createEmployee.js
'use server';

import { PrismaClient } from '@prisma/client';
import { getToken } from 'next-auth/jwt';

const prisma = new PrismaClient();

export async function createEmployee(formData) {
  try {
    // Obtener la sesión utilizando el token de autenticación
    const token = await getToken({ req: { headers: { cookie: cookies().toString() } } });

    if (!token) {
      console.error('User not authenticated');
      return { success: false, message: 'User not authenticated' };
    }

    const { name, role, department, description } = Object.fromEntries(formData);
    if (!name || !role || !department || !description) {
      console.error('Validation error: All fields are required');
      return { success: false, message: 'All fields are required' };
    }

    const userId = token.sub; // El ID de usuario está en 'sub' en el token JWT

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
