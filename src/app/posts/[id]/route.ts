import { data } from "../data";
export async function  GET(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id}= await params;
 const index=data.findIndex((post)=>post.id===parseInt(id));
 return Response.json(data[index]);
}