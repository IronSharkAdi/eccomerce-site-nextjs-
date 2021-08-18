import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import Head from "next/head";
import UseStyles from "../utils/styles";
import Image from "next/image";
import NextLink from "next/link";

function layout({ children }) {
  const classes = UseStyles();
  return (
    <div>
      <Head>
        <title>IB-commerce</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Image
                src="/logo.png"
                alt="Ionic Byte Logo"
                width="50"
                height="50"
              />
            </Link>
          </NextLink>

          {/* Right Side links */}
          <div className={classes.grow}> </div>
            <div>
              <NextLink passHref href='/cart'>
                <Link>Cart</Link>
              </NextLink>
            </div>
            <div>
              <NextLink passHref href='/login'>
                <Link>Login</Link>
              </NextLink>
            </div>

          {/* Right Side links */}
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All right reserved , Ionic Byte</Typography>
      </footer>
    </div>
  );
}

export default layout;
