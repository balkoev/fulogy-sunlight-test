import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    [theme.breakpoints.between("md", "xl")]: {
      alignItems: "flex-start",
      marginTop: 185,
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    width: 320,
    height: 80,
    boxShadow: theme.shadows[5],
    alignItems: "center",
    borderRadius: "15px 15px 0px 0px",

    [theme.breakpoints.between("md", "xl")]: {
      width: 600,
      height: 318,
      borderRadius: 15,
    },
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: "rgba(49, 49, 49, 0.7)",
    marginTop: 29,
    fontWeight: 600,

    [theme.breakpoints.between("md", "xl")]: {
      marginTop: 84,
      fontSize: 24,
    },
  },

  saveBtn: {
    display: "none",
    width: 202,
    height: 50,
    borderRadius: 36,
    color: "#fff",
    textTransform: "none",
    marginTop: 40,
    fontWeight: 600,

    [theme.breakpoints.between("md", "xl")]: {
      display: "flex",
      marginTop: 42,
    },
  },
}));

const InfoModal = ({}, ref) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  // Set modal methods to ref
  React.useEffect(() => {
    ref.current = {
      close,
      open,
    };
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <Typography className={classes.modalTitle}>
              Данные успешно сохранены
            </Typography>
            <Button
              className={classes.saveBtn}
              variant="contained"
              color="primary"
              onClick={close}
            >
              Хорошо
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default React.forwardRef(InfoModal);
