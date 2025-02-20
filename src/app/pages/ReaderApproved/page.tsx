import Readerapproved from "@/Components/ReaderManagement/ReaderApproved/readerapproved";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import React from "react";
import Readermanagement from "@/Components/ReaderManagement/readermanagement";

const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <Readermanagement />
          <Readerapproved />
        </div>
      </div>
    </div>
  );
};

export default page;
