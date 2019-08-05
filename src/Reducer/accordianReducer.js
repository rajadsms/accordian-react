const accordianReducer = (state = {}, action) => {
    switch(action.type) {
        case 'TOGGLE':
          return {
            ...state,
            toggleState:action.payload
          }
        
        default:
          return state;
      }
    }

export default accordianReducer;

//Based on the action it will update the state in a pure function maintain immutability