import { NextRequest,NextResponse } from "next/server";

export function middleware(request:NextRequest){
    // return NextResponse.redirect(new URL("/time",request.url));
    // if(request.nextUrl.pathname==="/hello"){
    //     return NextResponse.redirect(new URL("/time"));
    // }
      if(request.nextUrl.pathname==="/hello"){
        return NextResponse.rewrite(new URL("/time"));
    }
}
// export const config = {
//     matcher:"/hello"
// }