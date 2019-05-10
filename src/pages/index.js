import styled from "styled-components";
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0px 1px 2px #ccc;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 32px;
  padding: 0;
  color: #f56;
`;
const Index = () => {
  return (
    <Container>
      <Title>Resume will come soon</Title>
    </Container>
  );
};

export default Index;
