import { Button } from "../../Components";
import { useFetch } from "../../Hooks";

import style from "./Home.module.scss";

const Home = () => {
  const { data, error, loading } = useFetch("/db/demo.json");

  return (
    <main className={style.home}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Home Page</h1>
          {error ? <h2 className={style.error}>{error}</h2> : <h2>{data.msg}</h2>}
          <Button type="button">Health Check</Button>
        </>
      )}
    </main>
  );
};

export default Home;
