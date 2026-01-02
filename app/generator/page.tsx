"use client";
import { useEffect, useState} from "react";
import GeneratorCard from "@/components/generator/GeneratorCard";
import { useRouter } from "next/navigation"; 
 import  Header  from "@/components/layout/Header";

 import { ArrowBigLeft } from 'lucide-react';
  
 import Link from "next/link";

//import {getUserFromRequest} from "@/lib/auth";

export default function Generator() {

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 lg:p-8">
      
      {/* <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />)} */}


    {!user && (<div className="flex items-center justify-center min-h-screen">
     <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>)}

      {user && (<main className="pt-16 flex-1 overflow-hidden px-4 py-6 pt-1">
        <Header />
         <div className="max-w-6xl mx-auto">
        <div className="mb-8">
           <Link href="/dashboard">
           <div className="flex items-center gap-6">
          <ArrowBigLeft className="w-16 h-16" />
          <h1 className="text-4xl font-bold mb-2">Generator</h1>
          </div>
          <p className="text-slate-400">Customize your Shorts freely!</p>
          </Link>
        </div>
</div>
        <GeneratorCard />
      </main>)}
      
    </div>
  );
}