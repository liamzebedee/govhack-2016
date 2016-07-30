/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import SwipeableViews from 'react-swipeable-views';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  toolbar: {
    alignContent: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '6em',
    background: "#eee",
    justifyContent: 'center',
    display: 'flex'
  },
  toolbarCtn: {
    display: 'flex',
    alignItems: 'center'
  },
  iconButton: {
    width: '120px'
  },

  feed: {
    background: '#fff',
    paddingBottom: '10em'
  },

  feedItemImg: {
    fontSize: '18px',
    lineHeight: '18px',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#292f33',
    borderBottom: '1px solid #e1e8ed',
    
  },
  
  feedItemText: {
    fontSize: '18px',
    lineHeight: '18px',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#292f33',
    borderBottom: '1px solid #e1e8ed',
    padding: '1em',
  },

  feedItemImgCaption: {
    fontSize: '15px',
    color: '#aaa',
    lineHeight: '18px',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#292f33',
    paddingLeft: '1em',
    marginTop: '1em',
    display: 'block'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const iconStyles = {
  marginRight: 24,
};

const tileStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};


class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.navigateToPoi = this.navigateToPoi.bind(this);

    this.state = {
      pois: [{
        id: 0,
        name: "The Opera House",
        stats: {
          posts: 5
        }
      },
      {
        id: 1,
        name: "Circular Quay",
        stats: {
          posts: 2
        }
      },
      {
        id: 2,
        name: "464 Bus",
        stats: {
          posts: 13
        }
      }
      ]
    };
  }

  navigateToPoi() {

  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          
            <ViewPlace/>
        </div>
      </MuiThemeProvider>
    );
  }
}

class ViewPlace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feedItems: [
        { contentText: "Some stupid tweet thingo that goes here",  },
        { contentText: "Some other stupid thing that does things" },
        { contentImg: "/img1.jpg", contentText: "Here's a silly caption for a silly photo, bitch!" },
        { contentImg: "/img2.jpg" },
        { contentText: "Some other stupid thing that does things" },
      ],
      postTextOpen: false,
      postImageOpen: false,

      newPostText: "",
      newImageUrl: "/img1.jpg"
    }
    this.goBack = this.goBack.bind(this)
    this.postText = this.postText.bind(this)
    this.postPhoto = this.postPhoto.bind(this)
  }

  goBack(ev) {
    alert(1)
  }

  postText(ev) {
    this.setState({ postTextOpen: true })
  }

  postPhoto(ev) {
    this.imgInput.click();
    let self = this;

    this.imgInput.onchange = function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        let url = reader.result;
        self.setState({ newImageUrl: url });
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }

      self.setState({ postImageOpen: true })
    }

  }

  render() {
    return <div>
      <AppBar
        title="Place"

        // onLeftIconButtonTouchTap={this.goBack}
        // onRightIconButtonTouchTap={this.postSomething}


        // iconElementRight={
        //   <FlatButton icon={<FontIcon className="material-icons" style={iconStyles}>edit</FontIcon>} label="Post"/>}

  // <IconButton style={styles.iconButton} ><FontIcon className="material-icons" style={iconStyles}>face</FontIcon></IconButton>

        iconElementLeft={<IconButton onClick={this.goBack}><FontIcon className="material-icons" style={iconStyles}>arrow_back</FontIcon></IconButton>}

      />

      <input ref={(ref) => this.imgInput = ref} type='file' style={{ display: 'none' }}/> 

      <Dialog
          modal={true}
          open={this.state.postTextOpen}
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={() => this.setState({ newPostText: '', postTextOpen: false })}
            />,
            <FlatButton
              label="Post text"
              primary={true}
              disabled={this.state.newPostText.length < 3}
              onTouchTap={this.postNewText}
            />,
          ]}
        >
          <TextField
            hintText="Write your memes here."
            style={{ minHeight: '50%' }}
            multiLine={true}
            rows={12}
            onChange={(ev) => this.setState({ newPostText: ev.target.value })}
            value={this.state.newPostText}
          />
        </Dialog>


      <Dialog
          modal={true}
          open={this.state.postImageOpen}
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={() => this.setState({ postImageOpen: false, newPostText: "" })}
            />,
            <FlatButton
              label="Post photo"
              primary={true}
              disabled={false}
              onTouchTap={this.postNewImage}
            />,
          ]}
        >
          <img className='responsive' src={this.state.newImageUrl}/>
          <TextField
            hintText="Write your memes here."
            style={{ minHeight: '50%' }}
            multiLine={true}
            rows={5}
            onChange={(ev) => this.setState({ newPostText: ev.target.value })}
            value={this.state.newPostText}
          />
        </Dialog>



      <div style={styles.feed}>
        {this.state.feedItems.map((item, i) => {
          if(item.contentImg) {
            let text;
            if(item.contentText) text = <span style={styles.feedItemImgCaption}>{item.contentText}</span>;
            return <div key={i} style={styles.feedItemImg}>
              {text}
              <img className='responsive' src={item.contentImg}/>
            </div>
          }

          else if(item.contentText) {
            return <div key={i} style={styles.feedItemText}>{item.contentText}</div> 
          }
         
        })}

        <center><span style={{ fontSize: "20px", fontWeight: '700', paddingTop: '1em', display: 'block' }}> :-) </span></center>

      </div>



<div style={styles.toolbar}>
  
  <div style={styles.toolbarCtn}>
  <IconButton style={styles.iconButton} onClick={this.postText}><FontIcon label='edit' className="material-icons" style={iconStyles}>font_download</FontIcon></IconButton>

  <IconButton style={styles.iconButton} onClick={this.postPhoto}><FontIcon className="material-icons" style={iconStyles}>add_a_photo</FontIcon></IconButton>
  
  </div>

</div>


    </div>
  }
}


<Toolbar >
  <ToolbarGroup style={{ alignItems: 'center' }}>
    
  </ToolbarGroup>
</Toolbar>


class LookForPlaces extends Component {
  constructor(props) {
    super(props)
    this.state = this.props
  }

  render() {
    return <div>

          <AppBar
            title="Taggr"
          />

          <List>
            <ListItem>
              <LocationPOIControl/>
            </ListItem>
          </List>
          
          <Divider />

          <div style={tileStyles.root}>
          <h1>
            <FontIcon className="material-icons" style={iconStyles}>place</FontIcon>
            Places near ya'
          </h1>

          <GridList
            cellHeight={200}
            style={tileStyles.gridList}>

            {this.state.pois.map((poi, i) => {
              return <GridTile
                onClick={this.navigateToPoi}
                key={poi.id}
                title={poi.name}
                subtitle={<span><b>{poi.stats.posts}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
              </GridTile>
            })}

          </GridList>
        </div>
        </div>;
  }
}

class LocationPOIControl extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return <div>
      <FontIcon className="material-icons" style={iconStyles}>crop free</FontIcon>
    </div>;
  }
}

export default Main;
