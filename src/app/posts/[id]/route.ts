import { data } from "../data";
export async function  GET(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id}= await params;
 const index=data.findIndex((post)=>post.id===parseInt(id));
 return Response.json(data[index]);
}
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){
    const {id}=await params;
    const dataU =await request.json();
    const{title,content}=dataU;
    const index=data.findIndex((post)=>post.id===parseInt(id));
    data[index].title;
    data[index].content;
    return Response.json(data[index]);
}