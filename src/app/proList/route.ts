export async function GET(){
    const list = [
        {id:1,name:"Grapes"},
        {id:2,name:"Apples" },
        {id:3,name:"Pears" }
    ];
    return Response.json(list);
}