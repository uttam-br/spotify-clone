export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCp73KkA3K1Bh8NWZjHLiM1p-Y9dU5cdwY2iJuck0PALy70Bi2QuGehATN9dIxvu8btEIT_PYHM7n-Kj4zUaWdYZC3IhhipbHPatIBNPYF0CcfrklxPykM68a04jU4W3ObrAjWqIzCqBrVluD8qz93lLlr2BxT2FgKK5NPZ9Br24zTS",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };

    default:
      return state;
  }
};

export default reducer;
