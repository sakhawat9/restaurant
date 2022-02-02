import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
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
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      {!close && <Add setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

// export const getStaticProps = async (ctx) => {
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`${process.env.API_URL}/api/products`);
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
