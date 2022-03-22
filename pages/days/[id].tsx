import { useEffect } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { getDayById } from "../../lib/days";

const Post = ({data}: any) => {
    useEffect(() => {
      console.log(data)
    }, [data])

    return (<Layout>{data.map((item: any) => (<Card key={item.id} text={item.name} icon={item.icon} to={'/exercises/' + item.id} />))}</Layout>)
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '1'}},
      {params: {id: '2'}},
      {params: {id: '3'}},
      {params: {id: '4'}}
    ],
    fallback: true
  }
}

export async function getStaticProps(context: any) {
    const data = getDayById(context.params.id);

    return {
      props: {
        data: data
      }
    }
  
  }

export default Post