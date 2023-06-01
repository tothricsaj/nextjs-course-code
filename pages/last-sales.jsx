import { useEffect, useState } from "react";
import userSWR from 'swr';

function LastSalesPage(props) {

  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = userSWR('https://nextjs-course-8fe63-default-rtdb.firebaseio.com/sales.json', (url) => fetch(url).then(res => res.json()));

  useEffect(() => {
    if(data) {
      const trasformedSales = [];

      for(const key in data) {
        trasformedSales.push({
          id: key,
          username: data[key].username,
          volume:data[key].volume
        });
      }

      setSales(trasformedSales);
    }
  }, [data]);
  // useEffect(() => {
  //   setIsLoading(true);

  //   fetch('https://nextjs-course-8fe63-default-rtdb.firebaseio.com/sales.json')
  //     .then(response => response.json())
  //     .then(data => {


  //       setIsLoading(false);
  //     });
  // }, []);

  if(error) return <p>Failed to load!</p>;
  if(!data && !sales) return <p>Loading....</p>;

  return (
    <ul>
      { sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
    const trasformedSales = [];

    const response = await fetch('https://nextjs-course-8fe63-default-rtdb.firebaseio.com/sales.json');
    const data = await response.json();

    for(const key in data) {
      trasformedSales.push({
        id: key,
        username: data[key].username,
        volume:data[key].volume
      });
    }

    return {
      props: { sales: trasformedSales },
    };
}

export default LastSalesPage;