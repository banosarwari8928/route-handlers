import {data} from "./data";

export async function GET() { 
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