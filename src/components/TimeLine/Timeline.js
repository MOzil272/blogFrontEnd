import * as React from "react";
import {withStyles} from "@material-ui/core";

import cx from "classnames";

import Badge from "../Badge/Badge";

import {
  infoColor,
  primaryColor,
  successColor,
  dangerColor,
  warningColor,
  informationColor,
} from "../../assets/jss/defaultCss";
import Grid from "@material-ui/core/Grid";
import card1 from "../../assets/img/card-1.jpeg";

const style = theme => ({
    timeline: {
      [theme.breakpoints.down("sm")]: {
        "&:before": {
          left: "5% !important"
        }
      },
      listStyle: "none",
      padding: "20px 0 20px",
      position: "relative",
      marginTop: "30px",
      "&:before": {
        top: "50px",
        bottom: "0",
        position: "absolute",
        content: '" "',
        width: "3px",
        backgroundColor: "#E5E5E5",
        left: "50%",
        marginLeft: "-1px"
      }
    },
    timelineSimple: {
      marginTop: "30px",
      padding: "0 0 20px",
      "&:before": {
        left: "5%"
      }
    },
    item: {
      marginBottom: "20px",
      position: "relative",

      "&:before,&:after": {
        content: '" "',
        display: "table"
      },
      "&:after": {
        clear: "both"
      },

    },
    timelineBadge: {
      [theme.breakpoints.down("sm")]: {
        left: "5% !important"
      },
      color: "#FFFFFF",
      width: "50px",
      height: "50px",
      lineHeight: "51px",
      fontSize: "1.4em",
      textAlign: "center",
      position: "absolute",
      top: "16px",
      left: "50%",
      marginLeft: "-24px",
      zIndex: "100",
      borderTopRightRadius: "50%",
      borderTopLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      borderBottomLeftRadius: "50%"
    },
    timelineSimpleBadge: {
      left: "5%"
    },
    info: {
      backgroundColor: infoColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)"
    },

    information: {
      backgroundColor: informationColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)"
    },

    success: {
      backgroundColor: successColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
    },
    danger: {
      backgroundColor: dangerColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)"
    },
    warning: {
      backgroundColor: warningColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    },
    primary: {
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    },
    badgeIcon: {
      width: "24px",
      height: "51px"
    },
    timelinePanel: {
      [theme.breakpoints.down("sm")]: {
        float: "right !important",
        width: "86% !important",
        "&:before": {
          borderLeftWidth: "0 !important",
          borderRightWidth: "15px !important",
          left: "-15px !important",
          right: "auto !important"
        },
        "&:after": {
          borderLeftWidth: "0 !important",
          borderRightWidth: "14px !important",
          left: "-14px !important",
          right: "auto !important"
        }
      },
      width: "45%",
      float: "left",
      padding: "20px",
      marginBottom: "20px",
      position: "relative",
      boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
      borderRadius: "6px",
      color: "rgba(0, 0, 0, 0.87)",
      background: "linear-gradient(to bottom,#757575,#424242)",
      "&:before": {
        position: "absolute",
        top: "26px",
        right: "-15px",
        display: "inline-block",
        borderTop: "15px solid transparent",
        borderLeft: "15px solid #e4e4e4",
        borderRight: "0 solid #e4e4e4",
        borderBottom: "15px solid transparent",
        content: '" "'
      },
      "&:after": {
        position: "absolute",
        top: "27px",
        right: "-14px",
        display: "inline-block",
        borderTop: "14px solid transparent",
        borderLeft: "14px solid #FFFFFF",
        borderRight: "0 solid #FFFFFF",
        borderBottom: "14px solid transparent",
        content: '" "'
      },


    },
    timelineSimplePanel: {
      width: "86%"
    },
    timelinePanelInverted: {
      [theme.breakpoints.up("sm")]: {
        float: "right",
        backgroundColor: "#FFFFFF",
        "&:before": {
          borderLeftWidth: "0",
          borderRightWidth: "15px",
          left: "-15px",
          right: "auto"
        },
        "&:after": {
          borderLeftWidth: "0",
          borderRightWidth: "14px",
          left: "-14px",
          right: "auto"
        }
      }
    },
    timelineHeading: {
      marginBottom: "15px"
    },
    timelineBody: {
      color: "#FFF",
      flexBasis: "70%",
      fontSize: "14px",
      lineHeight: "21px"
    },
    timelineFooter: {
      zIndex: "1000",
      position: "relative",
      float: "left"
    },
    footerTitle: {
      color: "#333333",
      fontWeight: "400",
      margin: "10px 0px 0px"
    },
    footerLine: {
      marginTop: "10px",
      marginBottom: "5px"
    },

    bodyGrid: {
      display: "flex",
    },

    bodyImageContainer: {
      flexBasis: "30%",

      width: "120px",
      height: "120px",
    },

    bodyImage: {

      maxWidth: "100%",
      maxHeight: "100%"
    },
  }
);

class Timeline extends React.Component {


  render() {

    const {

      classes,
      simple,
      stories,

    } = this.props;


    const timelineClass =
      classes.timeline +
      " " +
      cx({
        [classes.timelineSimple]: simple
      });


    return (


      <ul className={timelineClass}>

        {stories.map((prop, key) => {


          const panelClasses =

            classes.timelinePanel +
            " " +
            cx({
              [classes.timelinePanelInverted]: prop.inverted,
              [classes.timelineSimplePanel]: simple
            });


          const timelineBadgeClasses =
            classes.timelineBadge +
            " " +
            classes[prop.badgeColor] +
            " " +
            cx({
              [classes.timelineSimpleBadge]: simple
            });


          const image = "../../assets/img/s" + key + ".jpg";

          return (
            <li className={classes.item} key={key}>
              {prop.badgeIcon ? (
                <div className={timelineBadgeClasses}>
                  <prop.badgeIcon className={classes.badgeIcon}/>
                </div>
              ) : null}
              <div className={panelClasses}>
                {prop.title ? (
                  <div className={classes.timelineHeading}>
                    <Badge color={prop.titleColor}>{prop.title}</Badge>
                  </div>
                ) : null}

                <Grid className={classes.bodyGrid}>


                  <div className={classes.bodyImageContainer}>
                    <img className={classes.bodyImage} src={image} alt="..."/>
                  </div>
                  <div className={classes.timelineBody}>{prop.body}
                  </div>
                </Grid>
                {prop.footerTitle ? (
                  <h6 className={classes.footerTitle}>{prop.footerTitle}</h6>
                ) : null}
                {prop.footer ? <hr className={classes.footerLine}/> : null}
                {prop.footer ? (
                  <div className={classes.timelineFooter}>{prop.footer}</div>
                ) : null}
              </div>
            </li>
          );

        })}


      </ul>
    )

  }


}

export default withStyles(style)(Timeline);
