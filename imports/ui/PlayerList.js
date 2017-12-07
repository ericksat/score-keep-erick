import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player';

export default class PlayerList extends React.Component {
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true} easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }

  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">No players bucko.</p>
        </div>
      );
    }
    return this.props.players.map(player => {
      return <Player key={player._id} player={player} />
    })
  };
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
