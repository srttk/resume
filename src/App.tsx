import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skils from "./components/Skils";

export default function App() {
  function switchDark() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div
      style={{
        backgroundImage: "url('bg.svg')",
      }}
      className=" relative bg-no-repeat bg-center bg-cover  overflow-x-hidden   bg-gradient-to-r from-indigo-900  to-purple-700 min-h-screen py-6 px-2 flex flex-col text-gray-700 dark:text-gray-300"
    >
      <div className="w-full max-w-screen-lg bg-white dark:bg-slate-900 mx-auto h-full  flex flex-col flex-grow rounded-lg shadow-sm  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-75 dark:bg-opacity-80 border border-gray-100">
        <header className="px-4 py-2  border-b relative">
          <h1 className="text-2xl font-bold uppercase ">Sarath TK</h1>
          <div className="flex space-x-4">
            <p className=" font-semibold">Fullstack Developer</p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            I build products that delight customer
          </p>
          <button onClick={switchDark} className=" absolute top-4 right-4">
            DARK
          </button>
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
                  from="Feb 2020"
                  jobTitle="Senior Software Developer"
                  description=""
                />
                <Experience
                  organization="eGlobe IT Solutions"
                  from="Dec 2018"
                  to="Apr 2019"
                  jobTitle="Senior Software Developer"
                  description={`
                  As Fullstack Javascript Developer for the client 12retech Corporation. Architected and developed the 12Retech Mirror and 12Retech Screen IoT applications which utilize Angular 7 / Node / MySQL
                  `}
                />
                <Experience
                  organization="Notetech Software"
                  from="Mar 2016"
                  to="Aug 2018"
                  jobTitle="Senior Software Developer"
                  description={`
                  As Javascript Developer for the client MMIT and iEnterprise. Expertised Angular (Formerly Angular2), Webpack, React, VSO

Learned Nodejs and Reactjs
                  `}
                />
                <Experience
                  organization="Ecodons / MooVooZ"
                  from="Nov 2014"
                  to="Nov 2015"
                  jobTitle="Software Developer"
                  description={`
                  
                  Worked as PHP / Javascript Fullstack developer for the clients MooVooz , SeeYouThen. Expertised Angular 1.x, Backbonejs, Git, Grunt,SASS, Bower. Laravel for PHP Development and Cordova/Ionic for mobile apps
                  `}
                />
                <Experience
                  organization="Cyberlegenz"
                  from="Mar 2013"
                  to="Aug 2014"
                  jobTitle="Web Developer"
                  description={`
                  Worked as Fullstack web developer. Expertised PHP MVC Framework(Codeigniter) and JavaScript/ Ajax Heavy Apps
                  `}
                />
                <Experience
                  organization="Programmers International"
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
                  items={["Javascript", "Typescript", "Go", "Bash"]}
                />

                <Skils
                  title="Frontend"
                  items={[
                    "HTML",
                    "CSS",
                    "React",
                    "Bash",
                    "Angular",
                    "Angular.js",
                  ]}
                />
                <Skils
                  title="Frontend"
                  items={[
                    "Node",
                    "MySQL",
                    "Postgres",
                    "Redis",
                    "ReST",
                    "GraphQL",
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
