import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    value: {
      playerOne: {
        name: 'P1',
        mark: 'X',
        plays: [],
        turn: 'active',
      },
      playerTwo: {
        name: 'P2',
        mark: 'O',
        plays: [],
        turn: '',
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
      cpu: {},
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
    changeTurns: (state: { value: any }, action: { payload: any }) => {
      if (state.value.playerTwo.turn === action.payload) {
        state.value.playerOne.turn = action.payload;
        state.value.playerTwo.turn = '';
        console.log('it works 2');
      } else {
        state.value.playerTwo.turn = action.payload;
        state.value.playerOne.turn = '';
        console.log('it works 1');
      }
    },
    pickATile: (state: { value: any }, action: { payload: any }) => {
      let pick: any = state.value.tiles.find(
        (item: any) => String(item.position) === action.payload[0]
      );
      let index = state.value.tiles.indexOf(pick);
      state.value.tiles[index].filled = action.payload[1];
    },
  },
});

export const { pickAMark } = gameSlice.actions;
export const { changeTurns } = gameSlice.actions;
export const { pickATile } = gameSlice.actions;

export default gameSlice.reducer;
