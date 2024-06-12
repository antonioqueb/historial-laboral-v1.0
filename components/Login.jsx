"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button 
        onClick={() => signIn("keycloak")} 
        className="px-6 py-2 bg-primary text-black rounded-md shadow-md hover:bg-primary/90"
      >
        Iniciar Sesión Keycloak
      </Button>
    </div>
  );
}
