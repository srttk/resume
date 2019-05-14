import Head from "next/head";

import { Container, Title, Info } from "../components/styles";
const Index = () => {
  return (
    <Container>
      <Head>
        <title>Sarath's Resume</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />

        <style global jsx>
          {`
            *,
            *::after,
            *::before {
              margin: 0;
              padding: 0;
              box-sizzing: border-box;
            }
            html {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
                "Droid Sans", "Helvetica Neue", sans-serif;
              font-weight: 300;
            }
          `}
        </style>
      </Head>
      <Info>
        <div>
          <Title bold>Sarath TK</Title>
          <div>Full stack javascript developer</div>
        </div>
        <div>
          <p>
            <a target="_blank" href="https://sarath.tk">
              https://sarath.tk
            </a>
            - -
            <a target="_blank" href="https://sarath.tk">
              https://saratonite.github.io
            </a>
          </p>
          <p />
        </div>
      </Info>

      {/* Experience */}
      <Info>
        <div>
          <Title>Work Experience</Title>
        </div>
      </Info>
      <Info>
        <Title>Skills</Title>
      </Info>
      <Info>
        <Title>Education / Certificates</Title>
      </Info>
    </Container>
  );
};

export default Index;
