import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
                <Head>
            <meta keywords={'test, next.js, my app' + keywords}></meta>
            <title>Main</title>
        </Head>
                    <nav className="navbar">
          <A href="/" text="Main" />
          <A href="/users" text="Users" />
        </nav>
        <div>{children}</div>
        <style jsx>
          {`
            .navbar {
              background: orange;
              padding: 15px;
            }
          `}
        </style>
        </>
    );
};

export default MainContainer;