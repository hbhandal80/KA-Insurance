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
