import {data} from "../../../../../posts/data";
export async function GET() { 
    return Response.json(data);
}