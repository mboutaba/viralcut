import { cookies } from "next/headers";
import { verifyJWT } from "./jwt";

export async function getUserFromRequest() {
    
  const token = (await cookies()).get("token")?.value;
     
  if (!token) {
    
    return null;
  }

  
  try {
   
    return verifyJWT(token);
  } catch {
    return null;
  }
}
