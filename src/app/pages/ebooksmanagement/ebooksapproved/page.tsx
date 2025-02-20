import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import EBookapproved from "@/Components/EBookManagement/EBookApproved/ebookapproved";
import EBookmanagement from "@/Components/EBookManagement/ebookmanagement";


const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <EBookmanagement/>
          <EBookapproved/>
        </div>
      </div>
    </div>
  );
};

export default page;
