import { createSlice } from '@reduxjs/toolkit';

const winningTiles = [
  // horizontal
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // vertical
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  // diagonal
  [1, 5, 9],
  [3, 5, 7],
];

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    value: {
      playerOne: {
        name: 'P1',
        mark: 'X',
        turn: 'active',
        plays: [],
        wins: 0,
      },
      playerTwo: {
        name: 'P2',
        mark: 'O',
        turn: '',
        plays: [],
        wins: 0,
      },
      tiles: [
        {
          position: 1,
          filled: '',
        },
        {
          position: 2,
          filled: '',
        },
        {
          position: 3,
          filled: '',
        },
        {
          position: 4,
          filled: '',
        },
        {
          position: 5,
          filled: '',
        },
        {
          position: 6,
          filled: '',
        },
        {
          position: 7,
          filled: '',
        },
        {
          position: 8,
          filled: '',
        },
        {
          position: 9,
          filled: '',
        },
      ],
    },
  },
  reducers: {
    pickAMark: (state: { value: any }, action: { payload: any }) => {
      state.value.playerOne.mark = action.payload;

      if (action.payload === 'X') {
        state.value.playerTwo.mark = 'O';
        state.value.playerTwo.turn = '';
        state.value.playerOne.turn = 'active';
      } else {
        state.value.playerTwo.mark = 'X';
        state.value.playerTwo.turn = 'active';
        state.value.playerOne.turn = '';
      }
    },

    pickATile: (state: { value: any }, action: { payload: any }) => {
      let pick: any = state.value.tiles.find(
        (item: any) => String(item.position) === action.payload[0]
      );
      let index = state.value.tiles.indexOf(pick);
      state.value.tiles[index].filled = action.payload[1];
    },

    changeTurns: (state: { value: any }, action: { payload: any }) => {
      if (state.value.playerTwo.turn === action.payload) {
        state.value.playerOne.turn = action.payload;
        state.value.playerTwo.turn = '';
      } else {
        state.value.playerTwo.turn = action.payload;
        state.value.playerOne.turn = '';
      }
    },

    updatePlays: (state: { value: any }, action: { payload: any }) => {
      let activePlayer = [state.value.playerOne, state.value.playerTwo].find(
        player => player.turn === 'active'
      );

      activePlayer.plays.push(Number(action.payload));
    },

    checkForWin: (state: { value: any }, action: { payload: any }) => {
      let playerOne: any = action.payload[0];
      let playerTwo: any = action.payload[1];
      let gameTiles: any = state.value.tiles;
      let winner: any = undefined;

      const checker = (player: any) => {
        winningTiles.forEach(winningMove => {
          let counter: any = 0;
          let winArr: any = [];

          player.plays.forEach((play: any) => {
            // Loop over winning moves and check if includes any player plays
            if (winningMove.includes(play)) {
              // increase the counter
              counter++;

              if (counter === 3) {
                // push the winning move to the win array
                winArr.push(...winningMove);
              }
            }
          });

          gameTiles.forEach((tile: any) => {
            winArr.forEach((move: number) => {
              if (tile.position === move) {
                tile.winner = player.mark;
                winner = player.name;
              }
            });
          });
        });
      };

      checker(playerOne);
      checker(playerTwo);

      if (winner) {
        [state.value.playerOne, state.value.playerTwo].find(
          player => player.name === winner
        ).wins++;
      }
    },
  },
});

export const { pickAMark } = gameSlice.actions;
export const { changeTurns } = gameSlice.actions;
export const { pickATile } = gameSlice.actions;
export const { updatePlays } = gameSlice.actions;
export const { checkForWin } = gameSlice.actions;

export default gameSlice.reducer;
