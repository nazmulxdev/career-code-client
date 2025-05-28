import React, { Suspense } from "react";
import UseAuth from "../../Hooks/UseAuth";
import MyPostedJobLists from "./MyPostedJobLists";
import { jobsCreatedByPromise } from "../../API/jobsApi";
import LoadingSpinner from "../../Components/LoadingSpinner";

const MyPostedJobs = () => {
  const { currentUser } = UseAuth();
  return (
    <div>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <MyPostedJobLists
          jobsCreatedByPromise={jobsCreatedByPromise(currentUser.email)}
        ></MyPostedJobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
