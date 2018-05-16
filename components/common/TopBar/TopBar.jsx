import React from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar';

class TopBar extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    Title
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;
