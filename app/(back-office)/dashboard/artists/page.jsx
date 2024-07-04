import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'

const page = () => {

  return (

    <div className=''>
        <PageHeader title="Artist" href="/dashboard/artists/new" linkTitle="Add Artist" />
        <div className="py-0">
        {/* <DataTable data={categories} columns={columns} /> */}
      </div>
    </div>
  )
}

export default page