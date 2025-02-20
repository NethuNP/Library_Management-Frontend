import BookComponent from '@/Components/BeforRegister/BeforRegister'
import CategoryBar from '@/Components/common/CategoryBar'
import Header from '@/Components/common/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <CategoryBar/>
        <BookComponent />
    </div>
  )
}

export default page