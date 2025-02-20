import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import AudioBookapproved from "@/Components/AudioBookManagement/AudioBookApproved/audiobookapproved";
import AudioBookmanagement from "@/Components/AudioBookManagement/audiobookmanagement";


const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <AudioBookmanagement/>
        <AudioBookapproved/>
        </div>
      </div>
    </div>
  );
};

export default page;
