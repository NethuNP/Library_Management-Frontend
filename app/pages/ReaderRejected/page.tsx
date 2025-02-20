import Readerrejected from '@/Components/ReaderManagement/ReaderRejected/readerrejected'
import Readermanagement from '@/Components/ReaderManagement/readermanagement'
import AdminSidebar from '@/Components/common/AdminSidebar'
import AdminHeader from '@/Components/common/AdminHeader'
import React from 'react'

const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <Readermanagement />
          <Readerrejected />
        </div>
      </div>
    </div>
  )
}

export default page