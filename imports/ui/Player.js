import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players'

export default class Player extends React.Component {
  render() {
    let itemClassName = this.props.player.rank <= 4 ? `item item--position-${this.props.player.rank}` : "item";

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place - {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={(e) => {
              let incAmount = 1;
              if (e.shiftKey) {
                incAmount = 5;
              } else if (e.ctrlKey) {
                incAmount = 10;
              } else if (e.altKey) {
                incAmount = 25;
              }
              Players.update(this.props.player._id, { $inc: {score: incAmount} })
            }}>+1</button>
            <button className="button button--round" onClick={(e) => {
              let decAmount = -1;
              if (e.shiftKey) {
                decAmount = -5;
              } else if (e.ctrlKey) {
                decAmount = -10;
              } else if (e.altKey) {
                decAmount = 25;
              }
              Players.update(this.props.player._id, { $inc: {score: decAmount} }) }}>-1</button>
            <button className="button button--round" onClick={() => { Players.remove(this.props.player._id) }}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}
