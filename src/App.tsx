import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skils from "./components/Skils";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: "url('bg.svg')",
      }}
      className=" relative bg-no-repeat bg-center bg-cover  overflow-x-hidden   bg-gradient-to-r from-indigo-900  to-purple-700 min-h-screen py-6 px-2 flex flex-col text-gray-700 dark:text-gray-300"
    >
      <div className="w-full max-w-screen-lg bg-white dark:bg-slate-900 mx-auto h-full  flex flex-col flex-grow rounded-lg shadow-sm  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-75 dark:bg-opacity-80 border border-gray-100 shadow-xl">
        <header className="px-4 py-2  border-b relative space-y-2">
          <h1 className="text-2xl font-bold uppercase  ">Sarath TK</h1>
          <div className="space-y-3">
            <p className=" font-semibold">
              Fullstack Developer, Building polished software and web
              experiences. Crafting interfaces.
            </p>

            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 text-xs font-medium">
              <a href="mailto:sarath.tk@icloud.com" className="flex gap-1">
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                sarath.tk@icloud.com
              </a>
              <a href="https://saratonite.github.io" className="flex gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </span>
                https://saratonite.github.io
              </a>
              <a href="https://github.com/saratonite" className="flex gap-1">
                <span>
                  <svg
                    fill="currentColor"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                https://github.com/saratonite
              </a>
            </div>
          </div>
        </header>
        <main className="  flex-grow flex flex-col md:flex-row">
          <div className="w-full md:w-7/12 p-4">
            <section>
              <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                Experience
              </h2>
              <div className=" space-y-6 mt-2">
                <Experience
                  organization="Cordiant Technologies"
                  website="https://cordiant.com/"
                  from="Feb 2020"
                  to="Sep 2022"
                  jobTitle="Fullstack Developer"
                  description={
                    <div className=" space-y-2">
                      <p>
                        As FullStack Javascript Developer for Travel Related
                        Products <a href="https://cord.travel">Cord.Travel</a>{" "}
                        and{" "}
                        <a href="https://myportal.travel">myportal.travel</a>
                      </p>

                      <p>
                        Led Development of backend, website, web app, and Super
                        admin app for{" "}
                        <a href="https://myportal.travel">myportal.travel</a>{" "}
                      </p>
                      <p>
                        Led Development of Hotel Site builder app, a part of
                        Cord.Travel Solution
                      </p>
                    </div>
                  }
                />
                <Experience
                  organization="eGlobe IT Solutions"
                  website="https://www.eglobeits.com/"
                  from="Dec 2018"
                  to="Apr 2019"
                  jobTitle="Senior Software Developer"
                  description={`
                  As Fullstack Javascript Developer for the client 12retech Corporation. Architected and developed the 12Retech Mirror and 12Retech Screen IoT applications which utilize Angular 7 / Node / MySQL
                  `}
                />
                <Experience
                  organization="Notetech Software"
                  website="https://www.notetech.com/"
                  from="Mar 2016"
                  to="Aug 2018"
                  jobTitle="Senior Software Developer"
                  description={
                    <div className=" space-y-2">
                      <p>
                        As Javascript Developer for the client MMIT and
                        iEnterprise.
                      </p>
                      <p>
                        successfully completed the development of the different
                        application such as MMIT PAR, MMIT Tracker, MMIT
                        FormWriter, MMIT User Admin, and MMIT Scrape Admin
                        applications which utilize Angular 2+, Web API 2, Auth0,
                        PrimeNG, Angular Material, React, Node.js
                      </p>
                      <p>Expertised Angular, React,and Nodejs </p>
                    </div>
                  }
                />
                <Experience
                  organization="Ecodons / MooVooZ"
                  website="https://www.ecodons.com/"
                  from="Nov 2014"
                  to="Nov 2015"
                  jobTitle="Software Developer"
                  description={`
                  
                  Worked as PHP / Javascript Fullstack developer for the clients MooVooz , SeeYouThen. Expertised Angular 1.x, Backbonejs, Git, Grunt,SASS, Bower. Laravel for PHP Development and Cordova/Ionic for mobile apps
                  `}
                />
                <Experience
                  organization="Cyberlegenz"
                  website="https://cyberlegendz.com/"
                  from="Mar 2013"
                  to="Aug 2014"
                  jobTitle="Web Developer"
                  description={`
                  Worked as Fullstack web developer. Expertised PHP MVC Framework(Codeigniter) and JavaScript/ Ajax Heavy Apps
                  `}
                />
                <Experience
                  organization="Programmers International"
                  website="https://www.programersglobal.com/"
                  from="Nov 2012"
                  to="Mar 2013"
                  jobTitle="Web Developer"
                  description={`
                  Worked as Jr. PHP Programmer. Mostly Domestic CMS / Web sites. Expertised Core PHP and jQuery , Bootstrap
                  `}
                />
              </div>
            </section>
          </div>
          <div className="w-full md:w-4/12  px-4 space-y-6 md:border-l">
            <section className="mt-2">
              <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                Technologies
              </h2>
              <div className=" space-y-3 mt-2">
                <Skils
                  title="Langauges"
                  items={["Javascript", "Typescript", "Go", "Bash", "SQL"]}
                />

                <Skils
                  title="Frontend"
                  items={[
                    "HTML",
                    "CSS",
                    "React",
                    "Angular",
                    "Angular.js",
                    "Tailwind.css",
                  ]}
                />
                <Skils
                  title="Backend"
                  items={[
                    "Node",
                    "MySQL",
                    "Postgres",
                    "Redis",
                    "ReST",
                    "GraphQL",
                    "MongoDB",
                  ]}
                />

                <Skils
                  title="Frameworks"
                  items={["Express", "Next.js", "Remix"]}
                />
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                Education
              </h2>
              <div className=" space-y-6 mt-2">
                <Education
                  title="Bachelor of Computer Application"
                  description=" Ajk College of Arts and Science , Coimbatore"
                  year="2009 - 2012"
                />
                <Education
                  title="Wesbos LearnNode Program"
                  description="Reference ID: #5a16bcaf46721c3f51ddc73a"
                  year="2017"
                />

                <Education
                  title=" Udemy Build Responsive Real World Websites with HTML5 and
                  CSS3"
                  description="Certificate No:UC-YG33KUCD"
                  year="2017"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
