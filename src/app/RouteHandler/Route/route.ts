import { cookies, headers } from "next/headers"
// import { request } from 'http';
import { NextRequest } from "next/server";
// import { redirect } from "next/dist/server/api-utils";
import { request } from 'http';
import { redirect } from "next/dist/server/api-utils";

// export async function Get() {
  
//     // const headersContent = await headers();
//     // console.log(headersContent.get("user-agent"));

//       const headersContent = await headers();
//       console.log(headersContent.get("autorization"));
     
//     // const cookieInfo = request.cookies.get("theme");
//     // console.log(cookieInfo);
//     // cookie redirect cache
//   return new Response(" <h1>Hello From Api Route</h1>",{
//     headers:{ "Content-type": "text/html" },
//   }); 
// }

export async function Get(request:  NextRequest){
     

    const headersContent = await headers();
    console.log(headersContent.get("authorization"));
     
    const cookieInfo = request.cookies.get("theme");
      console.log( cookieInfo);
      const newCookie = await cookies();
      newCookie.set("IsLogIn", "M");
      console.log(newCookie.get("IsLogIn"));
      // cookie, redirect, caching
      // sessionStorage, personalization, tracking
      // delete one cookie
        //  newCookie.delete("IsLogIn");
    // delete all cookies
    request.cookies.delete("theme");
    console.log(request.cookies.get("theme"));
      return new Response(" <h1>Hello From Api Route</h1>",{
      headers: { "Content-type": "text/html", "Set-Cookie": "theme=Light" },
      }); 
}