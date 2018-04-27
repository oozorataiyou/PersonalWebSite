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
      var school = (state.school !== undefined) ? state.school : [];
      school.push(action.school);
      return {
        ...state,
        isLoading: false,
        school
      }
      break;
    case 'LOADING_SCHOOL':
      return {
        ...state,
        isLoading: true
      }
    default:
      return {
        isLoading: true
      };
  }
}
