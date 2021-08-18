import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import data from "../../utils/data";

function slug() {
  const router = useRouter() ;
  const { slug } = router.query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <Typography>{product.name}</Typography>
    </> 

  );

}

export default slug;
