import * as React from "react";
import {withStyles} from "@material-ui/core";


import card1 from "../assets/img/card-1.jpeg";
import card2 from "../assets/img/card-2.jpeg";
import card3 from "../assets/img/card-3.jpeg";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import CardBody from "../components/Card/CardBody";
import CardFooter from "../components/Card/CardFooter";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import Tooltip from "@material-ui/core/Tooltip";


import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";

import ArtTrack from "@material-ui/icons/ArtTrack";

import {

  cardTitle
} from "../assets/jss/defaultCss";
import Button from "../components/CustomButtons/Button";


const style = theme => ({

  cardHover: {
    "&:hover": {
      "& $cardHeaderHover": {
        transform: "translate3d(0, -50px, 0)"
      }
    }
  },

  cardHeaderHover: {
    transition: "all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)"
  },

  cardHoverUnder: {
    position: "absolute",
    zIndex: "1",
    top: "-50px",
    width: "calc(100% - 30px)",
    left: "17px",
    right: "17px",
    textAlign: "center"
  },
  underChartIcons: {
    width: "17px",
    height: "17px"
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: '20px'
  },
  cardProductDescription: {
    textAlign: "center",
    color: "#424242",
    fontSize: '15px'
  },
});


class MainPage extends React.Component {


  render() {

    const {

      classes,


    } = this.props;

    return (


      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover} color={'rose'}>
            <CardHeader image className={classes.cardHeaderHover}>

              <img src={card1} alt="..."/>

            </CardHeader>

            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{tooltip: classes.tooltip}}>
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons}/>
                  </Button>
                </Tooltip>

                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{tooltip: classes.tooltip}}>
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons}/>
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>

                <p>
                  Title
                </p>

              </h4>
              <p className={classes.cardProductDescription}>

                Description

              </p>
            </CardBody>

          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover} color={'rose'}>
            <CardHeader image className={classes.cardHeaderHover}>

              <img src={card2} alt="..."/>

            </CardHeader>

            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{tooltip: classes.tooltip}}>
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons}/>
                  </Button>
                </Tooltip>

                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{tooltip: classes.tooltip}}>
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons}/>
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>

                <p>
                  Title
                </p>

              </h4>
              <p className={classes.cardProductDescription}>

                Description

              </p>
            </CardBody>

          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover} color={'rose'}>
            <CardHeader image className={classes.cardHeaderHover}>

              <img src={card3} alt="..."/>

            </CardHeader>

            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{tooltip: classes.tooltip}}>
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons}/>
                  </Button>
                </Tooltip>

                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{tooltip: classes.tooltip}}>
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons}/>
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>

                <p>
                  Title
                </p>

              </h4>
              <p className={classes.cardProductDescription}>

                Description

              </p>
            </CardBody>

          </Card>
        </GridItem>

      </GridContainer>


    )
  }
}


export default (withStyles(style)(MainPage));
