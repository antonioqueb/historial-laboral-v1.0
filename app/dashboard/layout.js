import React from 'react';
import DasboardSidebar from '@/components/component/dasboard-sidebar'; // Asegúrate de que la ruta sea correcta
import DashboardNabvar from '@/components/component/dashboard-nabvar';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const LayoutDashboard = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="flex">
        <DasboardSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <DashboardNabvar className="sticky top-0 w-full z-50" />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    );
  }
  // return null;
  return (
    <div className="flex">
      <DasboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardNabvar className="sticky top-0 w-full z-50" />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

export default LayoutDashboard;
