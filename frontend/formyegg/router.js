import React, {Component} from 'react';
import Navigation from './src/navigator';

import { setTopLevelNavigator } from './src/common/NavigationService';


class Router extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
            <Navigation
                ref={navigatorRef => {
                    setTopLevelNavigator(navigatorRef);
                }}
            />
        )
    }
}

export default Router;
