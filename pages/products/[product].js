import ProductPageContent from "../../components/ProductPageContent";
import { getAllProducts } from "../../lib/shopify";
import { getSingleProduct } from "../../lib/shopify";

const ProductPage = ({ product }) => {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
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
