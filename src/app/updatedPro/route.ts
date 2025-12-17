
export async function GET(){
    const list = [
        {id:1,name:"Pinaapples"},
        {id:2,name:"Peaches" },
        {id:3,name:"Apricote" }
    ];
    return Response.json(list);
}