import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";

import userData from "../mockup";

const useStyles = makeStyles((theme) => {
  return {
    contacts: {
      borderRadius: 10,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      marginBottom: 10,
    },

    cardContacts: {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      "&:last-child": {
        paddingBottom: 0,
      },
    },

    cardContacts__item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 64,
      paddingLeft: 12,

      [theme.breakpoints.between("md", "xl")]: {
        height: 96,
        paddingLeft: 77,
      },
    },

    contactText: {
      marginLeft: 10,

      [theme.breakpoints.between("md", "xl")]: {
        paddingLeft: 45,
      },
    },

    divider: {
      backgroundColor: "#CAE7FE",
    },

    contactsIcon: {
      [theme.breakpoints.between("md", "xl")]: {
        fontSize: 30,
      },
    },
  };
});

const Contacts = () => {
  const classes = useStyles();

  return (
    <Card className={classes.contacts}>
      <CardContent className={classes.cardContacts}>
        <div className={classes.cardContacts__item}>
          <AlternateEmailIcon
            className={classes.contactsIcon}
            color="secondary"
          />
          <Typography className={classes.contactText}>
            {userData.email}
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.cardContacts__item}>
          <PhoneIcon className={classes.contactsIcon} color="secondary" />
          <Typography className={classes.contactText}>
            {userData.phone}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contacts;
