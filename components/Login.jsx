"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import { Button } from "@/components/ui/button";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <Button 
          onClick={() => signIn("keycloak")} 
          className="px-6 py-2 bg-primary text-black rounded-md shadow-md hover:bg-primary/90"
        >
          Iniciar Sesión Keycloak
        </Button>
      )}
    </div>
  );
}
