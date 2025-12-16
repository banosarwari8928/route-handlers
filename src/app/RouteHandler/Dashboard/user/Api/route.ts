import {type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request:NextRequest) {
    const header = new Headers(request.headers);
    console.log(header.get('Authorization'))
    return new Response("hello from API",{
    headers: {
        "Content-Type":"text/html",
        "Set-Cookie":"theme/light"
    }
});
} 
// export async function GET(){
//     const headerOFNext =  await headers();
//     console.log(headerOFNext.get('user-agent'));
// }