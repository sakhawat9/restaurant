import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  console.log(pizzaList);
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Bangladesh</title>
        <meta name="description" content="Bast pizza shop in Dhaka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Featured />
      {admin && <AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} />} */}
      <h2>Hello World!</h2>
      {/* <PizzaList pizzaList={pizzaList} /> */}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
