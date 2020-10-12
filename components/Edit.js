import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import ConfirmModal from "../components/ConfirmModal";
import InfoModal from "../components/InfoModal";

import { post } from "../pages/api/posts";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      zIndex: "1",
      position: "relative",
      boxShadow: theme.shadows[3],
      borderRadius: "10px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      zIndex: "1",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
    },
    insideDiv: {
      display: "flex",
      width: "100%",
      [theme.breakpoints.down("sm")]: { flexDirection: "column" },
    },
    contentDiv: {
      display: "flex",
      flex: "1 1",
      alignItems: "center",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
    icon: {
      color: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: { display: "none" },
    },
    textInput: {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(0),
      },
    },
    button: {
      color: "white",
      borderRadius: "36px",
      padding: "15px 26px",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
      },
    },
    nameDiv: {
      borderLeft: "1px solid #cae7fe",
      paddingLeft: "2rem",
      marginRight: "2rem",
    },
    emailDiv: {
      borderLeft: "1px solid #cae7fe",
      paddingLeft: "2rem",
      marginRight: "2rem",
    },

    phoneDiv: {
      borderLeft: "1px solid #cae7fe",
      paddingLeft: "2rem",
      marginRight: "2rem",
    },
  };
});

const Edit = () => {
  const classes = useStyles();

  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const [values, setValues] = React.useState({});

  const confirmModalRef = React.useRef({});
  const infoModalRef = React.useRef({});

  const handleSave = (e) => {
    e.preventDefault();
    const { name, email, phone } = e.target;
    const emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const namere = /^[a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ']{4,}(?: [a-zA-Zа-яА-ЯёЁІіЇїЄєҐґ']+){0,2}$/;
    const phonere = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    if (!emailre.test(String(email.value).toLowerCase())) {
      setEmailError(true);
    }
    if (!namere.test(String(name.value).toLowerCase())) {
      setNameError(true);
    }
    if (!phonere.test(String(phone.value))) {
      setPhoneError(true);
    } else if (
      emailre.test(String(email.value).toLowerCase()) &&
      namere.test(String(name.value).toLowerCase()) &&
      phonere.test(String(phone.value))
    ) {
      setEmailError(false);
      setNameError(false);
      setPhoneError(false);
      setValues({ name: name.value, email: email.value, phone: phone.value });
      confirmModalRef.current.open();
    }
  };

  const handleSubmit = () => {
    confirmModalRef.current.close();
    infoModalRef.current.open();
    try {
      localStorage.setItem("values", JSON.stringify(values));
      fetch("/api/posts", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ConfirmModal ref={confirmModalRef} onSubmit={handleSubmit} />
      <InfoModal ref={infoModalRef} />

      <Card className={classes.card}>
        <form onSubmit={handleSave} className={classes.form}>
          <div className={classes.insideDiv}>
            <div className={`${classes.nameDiv} ${classes.contentDiv}`}>
              <AssignmentIndIcon fontSize="large" className={classes.icon} />
              <TextField
                fullWidth
                name="name"
                className={classes.textInput}
                variant="outlined"
                placeholder="Укажите ваши фамилию и имя"
                label="Фамилия и имя"
                InputLabelProps={{
                  shrink: true,
                }}
                error={nameError}
                helperText={nameError ? "Вы неверно указали имя" : ""}
              />
            </div>
            <div className={`${classes.emailDiv} ${classes.contentDiv}`}>
              <AlternateEmailIcon fontSize="large" className={classes.icon} />

              <TextField
                fullWidth
                name="email"
                className={classes.textInput}
                variant="outlined"
                placeholder="ivanova@mail.ru"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                error={emailError}
                helperText={emailError ? "Вы неверно указали e-mail" : ""}
              />
            </div>
            <div className={`${classes.phoneDiv} ${classes.contentDiv} `}>
              <PhoneIcon fontSize="large" className={classes.icon} />
              <TextField
                fullWidth
                name="phone"
                className={classes.textInput}
                variant="outlined"
                placeholder="Укажите номер телефона"
                label="Номер телефона"
                InputLabelProps={{
                  shrink: true,
                }}
                error={phoneError}
                helperText={phoneError ? "Вы неверно указали телефон" : ""}
              />
            </div>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
            type="submit"
          >
            Сохранить изменения
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Edit;
