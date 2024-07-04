import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'

const page = () => {

  return (

    <div className=''>
        <PageHeader title="Categories" href="/dashboard/categories/new" linkTitle="Add category" />
        <div className="py-0">
        {/* <DataTable data={categories} columns={columns} /> */}
      </div>
    </div>
  )
}

export default page