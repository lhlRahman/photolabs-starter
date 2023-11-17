export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED', // Action type for adding a favorite photo
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED', // Action type for removing a favorite photo
  SET_PHOTO_DATA: 'SET_PHOTO_DATA', // Action type for setting photo data
  SET_TOPIC_DATA: 'SET_TOPIC_DATA', // Action type for setting topic data
  OPEN_MODAL: 'OPEN_MODAL', // Action type for opening a modal
  CLOSE_MODAL: 'CLOSE_MODAL', // Action type for closing a modal
  ADD_FAV_NOTIFICATION: 'ADD_FAV_NOTIFICATION', // Action type for adding a favorite notification
  SET_CURRENT_TOPIC: 'SET_CURRENT_TOPIC', // Action type for setting the current topic
  SET_SEARCH_TERM: 'SET_SEARCH_TERM', // Action type for setting the search term
  SHOW_FAVORITES: 'SHOW_FAVORITES', // Action type for showing favorites
  HIDE_FAVORITES: 'HIDE_FAVORITES', // Action type for hiding favorites
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE' // Action type for toggling dark mode
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL: {
      // Update state to open the modal and set the selected photo
      return { ...state, isModalOpen: true, selectedPhoto: action.payload };
    }
    case ACTIONS.CLOSE_MODAL: {
      // Update state to close the modal and clear the selected photo
      return { ...state, isModalOpen: false, selectedPhoto: null };
    }
    case ACTIONS.FAV_PHOTO_ADDED: {
      // Update state to add a favorite photo to the favorites set
      return { ...state, favorites: new Set([...state.favorites, action.payload]) };
    }
    case ACTIONS.FAV_PHOTO_REMOVED: {
      // Update state to remove a favorite photo from the favorites set
      return {...state, favorites: new Set([...state.favorites].filter(item => item !== action.payload)) };
    }
    case ACTIONS.ADD_FAV_NOTIFICATION: {
      // Update state to display a favorite notification if there are favorites
      return {...state, displayAlert: state.favorites && state.favorites.size > 0 };
    }
    case ACTIONS.SET_PHOTO_DATA: {
      // Update state to set the photo data
      return {...state, photos: action.payload };
    }
    case ACTIONS.SET_TOPIC_DATA: {
      // Update state to set the topic data
      return {...state, topics: action.payload };
    }
    case ACTIONS.SET_CURRENT_TOPIC: {
      // Update state to set the current topic
      return {...state, currentTopic: action.payload };
    }
    case ACTIONS.SET_SEARCH_TERM: {
      // Update state to set the search term
      return {...state, searchTerm: action.payload };
    }
    case ACTIONS.SHOW_FAVORITES: {
      // Update state to show favorites
      return {...state, displayFavorites: true };
    }
    case ACTIONS.HIDE_FAVORITES: {
      // Update state to hide favorites
      return {...state, displayFavorites: false };
    }
    case ACTIONS.TOGGLE_DARK_MODE: {
      // Update state to toggle dark mode
      return {...state, darkMode: state.darkMode ? false : true};
    }
    default: {
      return state;
    }
  }
};

export default reducer;