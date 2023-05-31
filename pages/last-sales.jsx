import { useEffect, useState } from "react";

function LastSalesPage(props) {

  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://nextjs-course-8fe63-default-rtdb.firebaseio.com/sales.json')
      .then(response => response.json())
      .then(data => {
        const trasformedSales = [];

        for(const key in data) {
          trasformedSales.push({
            id: key,
            username: data[key].username,
            volume:data[key].volume
          });
        }

        console.log(trasformedSales);

        setSales(trasformedSales);
        setIsLoading(false);
      });
  }, []);

  if(isLoading) return <p>Loading....</p>;
  if(!sales) return <p>No data yet</p>;

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

export default LastSalesPage;