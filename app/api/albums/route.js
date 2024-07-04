// import db from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const { title, slug,  description, isActive} =
//       await request.json();

//       //search for an existing album in db
//     const existingAlbum = await db.album.findUnique({
//       where: {
//         slug,
//       },
//     });

//     if (existingAlbum) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: `Album ( ${title})  already exists in the Database`,
//         },
//         { status: 409 }
//       );
//     }
//     // if it doesnt exist , we create a new one 
//     const newAlbum = await db.album.create({
//       data: { title, slug, description, isActive },
//     });
//     // const newAlbum = { title, slug, description, isActive}
//     return NextResponse.json(newAlbum);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to create Album",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
// export async function GET(request) {
//   try {
//     const albums = await db.album.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         products: true,
//       },
//     });
//     return NextResponse.json(albums);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to Fetch Album",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
