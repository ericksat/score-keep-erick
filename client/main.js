import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import App from './../imports/ui/App';
import {Players, calculatePlayerPositions} from './../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let title = "Score Keep";
    let subtitle = "Created By Erick.S, (C)2017.";
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDom.render(<App title={title} subtitle={subtitle} players={positionedPlayers} />, document.getElementById('app'))
  });

})
