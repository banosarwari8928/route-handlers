import {data} from "./data";

export async function GET() { 
    return Response.json(data);
}
export async function POST(Request:any){
    const newPost = await Request.json();
    const {title,content}=newPost;
    const getPost={
        title:"title for post 4",
        content:"content of post 4"
    }data.push(getPost);
    return Response.json(getPost);
}