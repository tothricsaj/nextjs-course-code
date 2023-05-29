import fs from 'fs/promises';
import path from 'path';

import { getStaticProps } from ".";

function ProductDetailPage(props) {
  const { loadedProduct } = props;
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const data = JSON.parse(jsonData);
  const productId = params.pid

  const { params } = context;
  const filePath = path.join(process.cwd(), 'data/dummy-backend.json');
  const jsonData = await fs.readFile(filePath);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product
    }
  }
}

export default ProductDetailPage;