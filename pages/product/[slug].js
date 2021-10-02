import {
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Layout from "../../component/Layout";
import { Link } from "@material-ui/core";
import NextLink from "next/link";
import Image from "next/image";
import UseStyles from "../../utils/styles";
import db from '../../utils/db'
import Products from '../../models/products'

export default function slug({ product }) {
  const classes = UseStyles();

  if (!product) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <Layout title={product.name} description={product.description}>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>
              {" "}
              <Typography color="secondary"> Back To Products </Typography>
            </Link>
          </NextLink>
        </div>
        <Grid container spacing={1}>
          <Grid md={6} sm={12}>
            <Image
              alt={product.name}
              src={product.image}
              width={640}
              height={640}
              layout="responsive"
            />
          </Grid>
          <Grid item md={3} xm={12}>
            <List>
            <ListItem>
                <Typography variant="h1">{product.name}</Typography>{" "}
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>{" "}
              </ListItem>
              <ListItem>
                <Typography>Brand: {product.brand}</Typography>{" "}
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {product.rating} stars {product.numReviews}
                </Typography>{" "}
              </ListItem>
              <ListItem>
                <Typography>Description: {product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xm={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      {" "}
                      <Typography>Price</Typography>{" "}
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${product.price}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      {" "}
                      <Typography>Status</Typography>{" "}
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        ${product.countInStock > 0 ? "In Stock" : "Unavailable"}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth color="primary" variant="contained" >Add to Cart</Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}




export async function getServerSideProps(context) {
  const {params} = context;
  const { slug } = params;
  await db.connect();
  const product = await Products.findOne({slug}).lean();
  await db.disconnect;
  return {
    props: {
      product : db.convertDocToObj(product),
    },
  }
}