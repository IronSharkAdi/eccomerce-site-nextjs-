import { CardMedia, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../component/Layout";
import { Link } from '@material-ui/core'
import NextLink from 'next/link'


function slug({imgAlt , imgPic}) {
  const router = useRouter() ;
  const { slug } = router.query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <Layout>
        <div>
          <NextLink>
            <Link>Back</Link>
          </NextLink>
        </div>
      </Layout>
    </> 

  );

}

export default slug;
