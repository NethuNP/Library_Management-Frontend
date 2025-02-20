import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import EBookpending from "@/Components/EBookManagement/EBookPending/ebookpending";
import EBookmanagement from "@/Components/EBookManagement/ebookmanagement";


const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <EBookmanagement/>
         <EBookpending/>
        </div>
      </div>
    </div>
  );
};

export default page;
