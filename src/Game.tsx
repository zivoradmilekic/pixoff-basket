import * as React from "react";

function Game() {
  const [misses, setMisses] = React.useState(0);
  const [hits, setHits] = React.useState(0);

  const [players, setPlayers] = React.useState([]);

  const _handleScore = () => {
    const name = prompt(`Game over! Enter player name`);
    setPlayers([
      ...players,
      {
        name,
        hits
      }
    ]);
    setMisses(0);
    setHits(0);
  };

  React.useEffect(() => {
    console.log(misses);
    if (misses === 10) {
      _handleScore();
    }
  }, [misses]);

  const playersDisplay = !!players.length && (
    <div className="col-12 mt-4">
      <div className="card">
        <div className="card-header">Players</div>
        <div className="card-body">
          {players.map(({ name, hits }, index) => (
            <div className="row" key={index}>
              <div className="col">{name}</div>
              <div className="col-auto">{hits}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="Game">
      <div className="row">
        <div className="col-6 text-center">
          <h3>You missed: {misses} time(s)</h3>
          <button
            className="btn btn-danger"
            onClick={() => setMisses(misses + 1)}
          >
            Miss
          </button>
        </div>
        <div className="col-6 text-center">
          <h3>You scored: {hits} time(s)</h3>
          <button className="btn btn-success" onClick={() => setHits(hits + 1)}>
            Hit
          </button>
        </div>
        {playersDisplay}
      </div>
    </div>
  );
}

export default Game;
