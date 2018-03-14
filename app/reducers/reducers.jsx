export const authReducer = (state = {}, action) =>{
  switch (action.type) {
    case 'ADD_SESSION':
      return{
        ...action.session
      }
    default:
      return state;
  }
}

export const schoolsReducer = (state = [], action) =>{
  switch (action.type) {
    case 'ADD_SCHOOL':
      return [
        ...state,
        action.schools
      ]
      break;
    default:
      return state;
  }
}
