import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer>
      <div className={styles.user}>
        user {query.id}
        <p>Name {user.name}</p>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  console.log("params", params);
  const user = await response.json();
  return {
    props: { user },
  };
}
