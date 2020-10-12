import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import userData from "../mockup";

import Edit from "../components/Edit";
import Contacts from "../components/Contacts";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      paddingLeft: 10,
      paddingRight: 10,
    },

    card: {
      background: "#1a78c2",
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,

      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",

      [theme.breakpoints.between("md", "xl")]: {
        marginTop: 32,
        marginBottom: 24,
      },
    },

    cardContent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      color: "white",
      padding: "16px 0px 15px 10px",

      "&:last-child": {
        paddingBottom: 15,
      },

      [theme.breakpoints.between("md", "xl")]: {
        padding: "24px 28px 24px 30px",

        "&:last-child": {
          paddingBottom: 24,
        },
      },
    },

    edit: {
      color: "white",
    },

    bg: {
      position: "absolute",
      backgroundImage: "url('/bg-mobile.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundSize: "100% 100% ",
      width: "100%",
      height: "199px",
      zIndex: -1,

      [theme.breakpoints.between("md", "xl")]: {
        backgroundImage: "url('/bg-desktop.png')",
        backgroundSize: "100% 100% ",
        height: "470px",
        width: "100%",
        backgroundPosition: "right",
      },
    },

    iconEdit: {
      color: "#fff",

      [theme.breakpoints.between("md", "xl")]: {
        display: "none",
      },
    },

    userName: {
      fontSize: 14,
      marginLeft: 10,
      marginRight: "auto",

      [theme.breakpoints.between("md", "xl")]: {
        display: "flex",
        fontSize: 30,
        alignSelf: "center",
        marginLeft: 42,
      },
    },

    avatar: {
      [theme.breakpoints.between("md", "xl")]: {
        width: 80,
        height: 80,
      },
    },

    btnEdit: {
      display: "none",

      [theme.breakpoints.between("md", "xl")]: {
        display: "flex",
        color: "#fff",
      },
    },
  };
});

export default function Home() {
  const classes = useStyles();
  const [isEdit, setIsEdit] = React.useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <div className={classes.bg} />
      <Container className={classes.root}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Avatar className={classes.avatar} alt={"Анна"} src="/avatar.png" />
            <Typography className={classes.userName}>
              {userData.name}
            </Typography>
            <Button
              size="medium"
              className={classes.btnEdit}
              endIcon={isEdit ? <CloseIcon /> : <EditIcon />}
              onClick={handleEdit}
            >
              РЕДАКТИРОВАТЬ
            </Button>

            <IconButton className={classes.iconEdit} onClick={handleEdit}>
              {isEdit ? <CloseIcon /> : <EditIcon />}
            </IconButton>
          </CardContent>
        </Card>

        {!isEdit ? <Contacts /> : <Edit />}
      </Container>
    </>
  );
}
