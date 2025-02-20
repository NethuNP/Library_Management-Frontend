import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import React from "react";
import Publishers from "@/Components/PublisherManagement/Publishers/publishers";

const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <Publishers/>
        </div>
      </div>
    </div>
  );
};

export default page;
