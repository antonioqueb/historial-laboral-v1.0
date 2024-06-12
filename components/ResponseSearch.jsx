
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex items-center justify-center  bg-zinc-100 dark:bg-zinc-900 ">
      <section className="p-6 max-w-7xl w-full py-8 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
        <div className="grid gap-6">
        <Link href="/empleado">
          <div className="p-2 flex cursor-pointer items-center gap-4  hover:bg-zinc-200  dark:hover:bg-zinc-900  rounded-lg ">
         
            <Avatar className="w-12 h-12">
              <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="font-medium">Jared Palmer</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">PALJ890101ABC</p>
            </div>
           
          </div>
          </Link>
          <Link href="/empleado">
          <div className=" p-2 cursor-pointer flex items-center gap-4 hover:bg-zinc-200  dark:hover:bg-zinc-900  rounded-lg ">
         
            <Avatar className="w-12 h-12">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="font-medium">Catalina Navarro</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">NAVC890201DEF</p>
            </div>
            
          </div>
          </Link>
          <Link href="/empleado">
          <div className=" p-2 cursor-pointer flex items-center gap-4 hover:bg-zinc-200  dark:hover:bg-zinc-900 rounded-lg ">
          
            <Avatar className="w-12 h-12">
              <AvatarImage alt="@maxleiter" src="/placeholder-avatar.jpg" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="font-medium">Maximiliano Leiter</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">LEIM900315GHI</p>
            </div>
            
          </div>
          </Link>
          <Link href="/empleado">
          <div className=" p-2 flex cursor-pointer items-center gap-4 hover:bg-zinc-200  dark:hover:bg-zinc-900  rounded-lg ">
            
            <Avatar className="w-12 h-12">
              <AvatarImage alt="@shuding_" src="/placeholder-avatar.jpg" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="font-medium">Shu Ding</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">DINS880501JKL</p>
            </div>
           
          </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
