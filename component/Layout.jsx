import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import Head from "next/head";
import UseStyles from "../utils/styles";
import Image from "next/image";
import NextLink from "next/link";

function layout({ children , title , description   }) {
  const theme = createMuiTheme({
      typography:{
       
        h1:{
          fontSize:"1.6rem",
          fontWeight:500,
          margin:"1rem 0"
        },
        h2:{
          fontSize:"1.4rem",
          fontWeight:400,
          margin:"1rem 0"
        },
        body1:{
          fontWeight:'normal'
        }
      }
  })

  const classes = UseStyles();
  return (

    <div>
      <Head>
        <title>{title ? title : ''} IB-commerce</title>
        {description ? <meta name='description' content={description} /> : ''}
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
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
      </ThemeProvider>
    </div>
  );
}

export default layout;
