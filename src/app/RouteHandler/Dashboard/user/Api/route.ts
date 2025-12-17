import {type NextRequest } from "next/server";
import { headers ,cookies} from "next/headers";
export async function GET(request:NextRequest) {
    const header = new Headers(request.headers);
    console.log(header.get('Authorization'));
 const cookie=  request.cookies.get("theme");
 console.log(cookie);
 const newcookie = await cookies();
 request.cookies.clear();
 newcookie.set("isloggedin","Murtaza");
 newcookie.delete("theme");
 console.log(newcookie.get("isloggedin"));
    return new Response("hello from API",{
    headers: {
        "Content-Type":"text/html",
        "Set-Cookie":"theme=light"
    }
});
} 
// export async function GET(){
//     const headerOFNext =  await headers();
//     console.log(headerOFNext.get('user-agent'));
// }