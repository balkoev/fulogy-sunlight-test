import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },

  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  border: {
    height: 24,
    width: 1,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    marginRight: 10,

    [theme.breakpoints.between("md", "xl")]: {
      height: 39,
      marginRight: 20,
      marginLeft: 10,
    },
  },

  notifyBtn: {
    color: "#fff",
    width: 24,
    height: 24,

    [theme.breakpoints.between("md", "xl")]: {
      width: 40,
      height: 40,
    },
  },

  avatar: {
    width: 24,
    height: 24,

    [theme.breakpoints.between("md", "xl")]: {
      width: 40,
      height: 40,
    },
  },

  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 9,

    [theme.breakpoints.between("md", "xl")]: {
      fontSize: 18,
    },
  },

  breadcrumbs: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 400,

    [theme.breakpoints.between("md", "xl")]: {
      fontSize: 14,
    },
  },

  userName: {
    display: "none",

    [theme.breakpoints.between("md", "xl")]: {
      display: "flex",
      color: "#fff",
      marginLeft: 20,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.header}>
        <Box>
          <IconButton className={classes.iconButton}>
            <NotificationsNoneIcon className={classes.notifyBtn} />
          </IconButton>
        </Box>
        <Box className={classes.border} />
        <Box>
          <Avatar className={classes.avatar} alt={"Adam"} src="/avatar.png" />
        </Box>
        <Box className={classes.userName}>
          <Typography className={classes.name}>Иванова А</Typography>
        </Box>
      </Box>
      <Typography className={classes.title}>
        {`Личный профиль`.toUpperCase()}
      </Typography>

      <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
        <Link className={classes.breadcrumbs} href="/">
          Главная
        </Link>
        <Typography className={classes.breadcrumbs}>Личный профиль</Typography>
      </Breadcrumbs>
    </>
  );
};

export default Header;
