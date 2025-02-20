import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import EBookrejected from "@/Components/EBookManagement/EBookRejected/ebookrejected";
import EBookmanagement from "@/Components/EBookManagement/ebookmanagement";


const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
         <EBookmanagement/>
          <EBookrejected/>
        </div>
      </div>
    </div>
  );
};

export default page;
