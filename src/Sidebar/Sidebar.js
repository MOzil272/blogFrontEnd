import * as React from "react";
import Hidden from "@material-ui/core/Hidden";
import {withStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";

import {
  drawerWidth,
  transition,
  boxShadow
} from "../assets/jss/defaultCss"
import SidebarWrapper from "./SidebarWrapper";

const style = theme => ({

  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1024",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    overflow: 'auto',
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100vh"
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      top: "0"
    }
  },

  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    transition: "all 300ms linear"
  },

  blackBackground: {
    color: "#FFFFFF",
    "&:after": {
      background: "#000",
      opacity: ".5"
    }
  },
});


class Sidebar extends React.Component {


  render() {


    const {
      classes,
      image,
      bgColor,
      color,
      routes,
    } = this.props;


    const drawerPaper = classes.drawerPaper;

    return (


      <div ref="mainPanel">

        <Hidden smDown implementation="css">

          <Drawer
            variant="permanent"
            anchor={"left"}

            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
          >

            <SidebarWrapper

              routes={routes}
              color={color}
            />

            {image !== undefined ? (
              <div
                className={classes.background}
                style={{backgroundImage: "url(" + image + ")"}}
              />
            ) : null}
          </Drawer>

        </Hidden>
      </div>
    );
  }
}

export default withStyles(style)(Sidebar);
