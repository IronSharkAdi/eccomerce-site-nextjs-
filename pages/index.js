import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../component/Layout";
import { useEffect } from "react";
import data from "../utils/data";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import NextLink from 'next/link'
import db from '../utils/db'
import Products from '../models/products'

export default function Home({products}) {

  return (
    <>
      <Layout>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid md={4} item key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" >Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
            
          ))}
        </Grid>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Products.find({}).lean();
  await db.disconnect;
  return {
    props: {
      products : products.map(db.convertDocToObj),
    },
  }
}