import { makeStyles } from "@material-ui/core";

const UseStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer:{
      textAlign : "center"
  },
  grow :{
    flexGrow : 1,
  }
});

export default UseStyles;
