import Readerpending from "@/Components/ReaderManagement/ReaderPending/readerpending";
import Readermanagement from "@/Components/ReaderManagement/readermanagement";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <Readermanagement />
          <Readerpending />
        </div>
      </div>
    </div>
  );
};

export default page;
