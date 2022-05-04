import ProductPageConent from "../../components/ProductPageConent";
import { getAllProducts } from "../../lib/shopify";
import { getSingleProduct } from "../../lib/shopify";

const ProductPage = ({ product }) => {
  return <ProductPageConent product={product} />;
};

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const handle = item.node.handle;

    return {
      params: { product: handle.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getSingleProduct(params.product);
  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
