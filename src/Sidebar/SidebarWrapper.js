import * as React from "react";

import avatar from "../assets/img/avatar.jpg";

import {
  boxShadow,
  defaultFont,
  infoColor,
} from "../assets/jss/defaultCss"
import {withStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import * as PropTypes from "prop-types";
import cx from "classnames";
import ListItem from "@material-ui/core/ListItem";
import {NavLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";


const style = theme => ({

    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch",
      transitionProperty: "top, bottom, width",
      transitionDuration: ".2s, .2s, .35s",
      transitionTimingFunction: "linear, linear, ease",
      color: "inherit",
    },

    user: {
      margin: "20px auto 0",
      position: "relative",

      "&:after": {
        content: '""',
        position: "absolute",
        right: "15px",
        height: "1px",
        width: "calc(100% - 30px)",
        // backgroundColor: "#ffeb3b"
      }
    },

    photo: {
      margin: 'auto',
      transition: "all 300ms linear",
      width: "150px",
      height: "150px",
      overflow: "hidden",
      float: "center",
      zIndex: "5",
      borderRadius: "50%",
      ...boxShadow,

    },

    avatarImg: {
      width: "100%",
      verticalAlign: "middle",
      border: "0",

    },


    list: {

      marginTop: "15px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",

    },


    item: {
      color: "inherit",
      position: "relative",
      display: "block",
      textDecoration: "none",
      margin: "0",
      padding: "0"
    },

    itemLink: {
      paddingLeft: "10px",
      paddingRight: "10px",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent",
      ...defaultFont,
      width: "auto",
      "&:hover": {
        outline: "none",
        backgroundColor: "rgba(200, 200, 200, 0.2)",
        boxShadow: "none"
      },
      "&,&:hover,&:focus": {
        color: "inherit"
      },
    },

    itemIcon: {
      color: "inherit",
      width: "30px",
      height: "24px",
      float: "left",
      position: "inherit",
      top: "3px",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      opacity: "0.8"
    },

    itemText: {
      color: "inherit",
      ...defaultFont,
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      transform: "translate3d(0px, 0, 0)",
      opacity: "1",
      transition: "transform 300ms ease 0s, opacity 300ms ease 0s",
      position: "relative",
      display: "block",
      height: "auto",
      whiteSpace: "nowrap"
    },

    blue: {
      "&,&:hover,&:focus": {
        color: "#FFFFFF",
        backgroundColor: infoColor,
        boxShadow: boxShadow,
        opacity: ".8",

      },
    },
  }


);

class SidebarWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.activeRoute.bind(this);
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,

  };


  activeRoute(routeName) {


    return true;
    // return this.props.location.pathname.indexOf(routeName) > -1;
  }

  render() {

    const {

      classes,
      routes,
      color,
    } = this.props;


    let user = (


      <div className={classes.user}>
        <div className={classes.photo}>
          <img src={avatar} className={classes.avatarImg} alt="..."/>
        </div>
      </div>
    );


    let links = (

      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }


          const navLinkClasses =
            classes.itemLink +
            " " +
            cx({
              [" " + classes[color]]: this.activeRoute(prop.path)
            });

          const itemText = classes.itemText;
          const itemIcon = classes.itemIcon;

          return (
            <ListItem key={key} className={classes.item}>
              <NavLink to={prop.path} className={navLinkClasses} style={{textDecoration: 'none'}}>
                <ListItemIcon className={itemIcon}>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <prop.icon/>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={prop.name}
                  disableTypography={true}
                  className={itemText}
                />
              </NavLink>
            </ListItem>
          );
        })}

      </List>


    );


    return (

      <div className={classes.sidebarWrapper} ref="sidebarWrapper">
        {user}
        {links}
      </div>
    )


  }
}

export default withStyles(style)(SidebarWrapper);
