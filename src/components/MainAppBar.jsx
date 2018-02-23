import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import { navigateTo } from "gatsby-link";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class MainAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              MHW Build
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                navigateTo("/plan");
              }}
            >
              Plan
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigateTo("/");
              }}
            >
              Search
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href =
                  "https://github.com/alexmnguyen/mhwbuild";
              }}
            >
              github
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MainAppBar);
