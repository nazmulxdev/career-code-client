import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  console.log(id);
  return (
    <div>
      <p>
        {applications.length} applications for : {id}
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Applicant Email</th>
              <th>LinkedIn Link</th>
              <th>GitHub Link</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((applied, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{applied.applicantEmail}</td>
                <td>{applied.linkedIn}</td>
                <td>{applied.gitHub}</td>
                <td>{applied.resume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
