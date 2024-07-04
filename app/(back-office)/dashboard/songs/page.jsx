// import Heading from "@/components/backoffice/Heading";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/data-table-components/DataTable";
// import { getData } from "@/lib/getData";

import Link from "next/link";
import React from "react";
import { columns } from "./columns";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/authOptions";

export default async function page() {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     return null;
//   }
//   const role = session?.user?.role;
  // const allSongs = await getData("songs");
  // const id = session?.user?.id;
  // const artistSongs = allSongs.filter((song) => song.userId === id);

  // console.log(id);
  const role = "ADMIN"
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Songs"
        href="/dashboard/songs/new"
        linkTitle="Add Songs"
      />
      <div className="py-8">
        {role === "ADMIN" ? (
          <DataTable 
          // data={allSongs} columns={columns}
           />
        ) : (
          <DataTable 
          // data={artistSongs} columns={columns} 
          />
        )}
      </div>
    </div>
  );
}
