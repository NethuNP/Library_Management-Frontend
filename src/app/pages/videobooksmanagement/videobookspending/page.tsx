import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import VideoBookmanagement from "@/Components/VideoBookManagement/videobookmanagement";
import VideoBookpending from "@/Components/VideoBookManagement/VideoBookPending/videobookpending";

const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <VideoBookmanagement />
          <VideoBookpending />
        </div>
      </div>
    </div>
  );
};

export default page;
