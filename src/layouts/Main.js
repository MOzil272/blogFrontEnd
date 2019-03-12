import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PropTypes from 'prop-types';
import blogAction from '../actions/blogActions';
import {selectBlog} from '../selectors/blogSelectors';
import {withStyles} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import image from "../assets/img/sideBarBackground.jpg";

import mainRoutes from "../routes/mainRoutes";
import {Switch, Route, Redirect, withRouter, HashRouter} from "react-router-dom";
import {containerFluid, drawerWidth, transition} from "../assets/jss/defaultCss";
import MainPage from "../view/MainPage";
import BlogPage from "../view/BlogPage";

const style = theme => ({


  wrapper: {

    position: "relative",
    top: "0",
    height: "100vh",
    "&:after": {
      display: "table",
      clear: "both",
      content: '" "'
    }
  },


  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },

  container: {...containerFluid},

  mainPanel: {
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",

    background: "linear-gradient(to bottom,#434343,#000000)",
    height: "100vh",
  },
});

const switchRoutes = (
  <Switch>
    {mainRoutes.map((prop, key) => {
      // if (prop.redirect) {
      //   return <Redirect from={prop.path} to={prop.pathTo} key={key}/>;
      // }
      return <Route path={prop.path} component={prop.component} key={key}/>;
    })}
  </Switch>
);


class Main extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {


    this.loadData();
  }

  loadData() {
    const {
      actions,
    } = this.props;

    // actions.getBlog();

  }

  render() {

    const {
      classes,
      blog,
    } = this.props;

    const mainPanel = classes.mainPanel;


    return (


      <div className={classes.wrapper}>
        <Sidebar
          image={image}
          routes={mainRoutes}
          color="blue"
          bgColor="black"
        />

        <div className={mainPanel} ref="mainPanel">

            {/*<div className={classes.content}>*/}
              {/*<div className={classes.container}>{switchRoutes}</div>*/}
            {/*</div>*/}


          <main className={classes.content}>

          <div className={classes.container}>
          <Switch>


          <Route exact path='/' component={MainPage}/>
          <Route path='/blog' component={BlogPage}/>
          </Switch>
          </div>


          </main>


        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {

    blog: selectBlog(state),

  };
}

function mapDispatchToProps(dispatch) {

  return {
    dispatch,
    actions: bindActionCreators(blogAction, dispatch),
  };
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Main)));


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  withStyles(style, {withTheme: true})(Main)));
