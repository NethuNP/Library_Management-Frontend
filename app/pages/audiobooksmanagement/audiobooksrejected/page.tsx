import React from "react";
import AdminSidebar from "@/Components/common/AdminSidebar";
import AdminHeader from "@/Components/common/AdminHeader";
import AudioBookrejected from "@/Components/AudioBookManagement/AudioBookRejected/audiobookrejected";
import AudioBookmanagement from "@/Components/AudioBookManagement/audiobookmanagement";


const page = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex flex-col w-3/4">
        <AdminHeader />
        <div className="p-6">
          <AudioBookmanagement/>
          <AudioBookrejected/>
        </div>
      </div>
    </div>
  );
};

export default page;
