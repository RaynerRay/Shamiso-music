import PageHeader from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'

const page = () => {

  return (

    <div className='m-8'>
        <PageHeader title="Albums" href="/dashboard/albums/new" linkTitle="Add Album" />
        <div className="py-0">
        <DataTable 
        // data={albums} columns={columns} 
        />
      </div>
    </div>
  )
}

export default page