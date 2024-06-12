import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const session = await getSession({ req });
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
  }

  const employees = await prisma.employee.findMany({
    where: { userId: user.id },
  });
  return new Response(JSON.stringify(employees), { status: 200 });
}

export async function POST(req) {
  const session = await getSession({ req });
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
  }

  const body = await req.json();
  const { name, role, department, description } = body;

  if (!name || !role || !department || !description) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }

  try {
    const employee = await prisma.employee.create({
      data: {
        name,
        role,
        department,
        description,
        userId: user.id,
      },
    });
    return new Response(JSON.stringify(employee), { status: 201 });
  } catch (error) {
    console.error("Failed to create employee:", error);
    return new Response(JSON.stringify({ error: "Failed to create employee" }), { status: 500 });
  }
}
