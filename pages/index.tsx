import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { Day, getDays } from "../lib/days";
import { Icon } from "../components/CardIcon";


const Home: NextPage = ({data} : any) => {
  return (
    <Layout>
      {data.map((item: any) => (
        <Card key={item.id} text={item.name} icon={item.icon} to={"/days/" + item.id} />
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const data = getDays();

  return {
    props: {
      data: data
    }
  }

}

export default Home;
