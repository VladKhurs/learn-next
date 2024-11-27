import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer>
      <div>
        <h1>Main</h1>
        <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
          `}
        </style>
      </div>
    </MainContainer>
  );
};

export default Index;
