
import Link from "next/link";
import { Plus } from "lucide-react";

export default function PageHeader({ title, linkTitle, href }) {
  return (
    <div className="flex justify-between py-4 mb-4">
     
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-50">
      {title}
    </h2>
    
    <div>
      <Link
        className="text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg text-base px-5 py-3 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 space-x-3"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
      </div>
    </div>
  );
}