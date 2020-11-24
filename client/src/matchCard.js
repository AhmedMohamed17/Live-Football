import React, { Component } from "react";
import axios from "axios";
import "./matchCard.css";
export default class MatchCard extends Component {
  state = {
    matches: [],
  };
  componentDidMount = () => {
    this.getmatches();
  };
  getmatches = () => {
    axios
      .get("http://localhost:5000/api/matches")
      .then((response) => {
        const data = response.data;
        this.setState({ matches: data });
        console.log(data);
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  render() {
    const { matches } = this.state;
    return (
      <div>
        {" "}
        {matches.map((match) => (
          <div className="match-card-container container">
            <div className="match-card">
              <div className="card-content">
                <h5 className="team"> {match.homeTeam}</h5>
                <div className="date-and-status">
                  <span className="date">{match.duration}</span>
                  <span className="vs status">
                    {match.isActive ? "Live" : "finished"}
                  </span>
                </div>
                <h5 className="team">{match.awayTeam}</h5>
                <p className="league">{match.league}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
