import { NextRequest } from "next/server";
import {data} from "./data";

export async function GET(request:NextRequest) { 
    const searchParams = request.nextUrl.searchParams;
    const query=searchParams.get("query");
    const filterdata= query?data.filter((post)=>
    {  return  post.title.toLowerCase().includes(query.toLowerCase())||post.content.toLowerCase().includes(query.toLowerCase())}
)
:data;
    return Response.json(data);
}
export async function POST(request:Request){
    const body =await request.json();
    const {title,content} = body;
    const newPost= {
        id:data.length+1,
        title,
        content
    } 
     data.push(newPost);
    return Response.json(newPost ,{headers: {"content-type":"application/json"},status:201});

}