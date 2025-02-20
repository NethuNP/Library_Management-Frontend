import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import VideoBookmanagement from "@/Components/VideoBookManagement/videobookmanagement";
import VideoBookapproved from "@/Components/VideoBookManagement/VideoBookApproved/videobookapproved";


const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <VideoBookmanagement/>
          <VideoBookapproved/>
        </div>
      </div>
    </div>
  );
};

export default page;
