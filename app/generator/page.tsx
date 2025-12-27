"use client";
import { useEffect, useState} from "react";
import GeneratorCard from "@/components/generator/GeneratorCard";
import { useRouter } from "next/navigation"; 
 
//import {getUserFromRequest} from "@/lib/auth";

export default function generator() {

const [user, setUser] = useState<any>(null);

  const router = useRouter();
 

useEffect(() => {
    async function fetchUser() {
     
       const res = await fetch("/api/me");
        const data = await res.json();

        //console.log("this is data bool ", data.success);

       if (!data.success) {
           router.push("/login");
          //console.log("redirected2");
          return;
          
        }

         setUser(data.user);
       
       
        
      }
    
    fetchUser();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-950 to-black text-gray-100">
      
      {/* <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />)} */}


    {!user && (<div className="flex items-center justify-center min-h-screen">
     <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>)}

      {user && (<main className="flex-1 overflow-hidden px-4 py-6 pt-1">
        <GeneratorCard />
      </main>)}
      
    </div>
  );
}