import dbConnect from "@/lib/db";

export async function DELETE({params}:{params:{id:string}}) {
    await dbConnect();
}