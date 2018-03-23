import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 700,
      height: 450,
      overflowY: 'auto',
    },
  };

export default class BugListComponent extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.root}>
                    <GridList
                        cellHeight={180}
                        style={styles.gridList}>
                    <Subheader>Bugs</Subheader>
                    {this.props.bugs && this.props.bugs.map((bug, i) => (
                        <GridTile
                            key={i}
                            title={bug.title}
                            subtitle={<div><span><b>{bug.description}</b></span><br/><span>creada por <b>{bug.author}</b></span></div>}
                            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
                            <img src={bug.pictures[0]} />
                        </GridTile>
                    ))}
                    </GridList>
                </div>
            </MuiThemeProvider>
        )
    }
}