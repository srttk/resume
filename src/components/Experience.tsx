import React from "react";

type props = {
  organization?: string;
  jobTitle?: string;
  from?: string;
  to?: string;
  description?: string | React.ReactNode;
};

export default function Experience({
  organization = "Company name",
  jobTitle = "Developer",
  from = "2012",
  to = "Present",
  description = "",
}: props) {
  return (
    <div className=" space-y-2 print:border-none border white bg-opacity-40 rounded-lg p-2 print:p-0 ">
      <h3 className="text-sm font-bold">{organization}</h3>
      <div className="grid grid-cols-2 text-gray-600 dark:text-gray-400  font-semibold ">
        <p className="text-sm">{jobTitle}</p>
        <p className="text-sm text-right">
          {from} - {to}
        </p>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
