import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { authContext } from "../providers/authProvider";
import {
  AppBar,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Toolbar,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { makeStyles, alpha } from "@material-ui/core/styles";

import MuiAlert from "@material-ui/lab/Alert";
import AccountCircle from "@material-ui/icons/AccountCircle";

import "./TopNav.scss";

const useStyles = makeStyles((theme) => ({
  login: {
    font: 'Trebuchet MS',
    fontSize: "larger",
  },
  topnav__logo: {
    font: 'Trebuchet MS',

  },
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  iconButton: {
    font: 'Trebuchet MS',
    minWidth: "48px",
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: theme.typography.pxToRem(22),
    padding: 12,
    borderRadius: "50%",
    overflow: "visible",
    textTransform: "none",
    // Explicitly set the default value to solve a bug on IE 11.
    color: theme.palette.action.active,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      backgroundColor: (0, alpha)(
        theme.palette.action.active,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      backgroundColor: "transparent",
      color: theme.palette.action.disabled,
    },
  },
}));

