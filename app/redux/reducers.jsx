import * as rConst from "reduxConstants";

// export const authReducer = (state = {}, action) =>{
//   switch (action.type) {
//     case 'ADD_SESSION':
//       return{
//         ...action.session
//       }
//     default:
//       return state;
//   }
// }

export const schoolsReducer = (state = [], action) =>{
  switch (action.type) {
    case rConst.ADD_SCHOOL:
      var school = (state.school !== undefined) ? state.school : [];
      school.push(action.school);
      return {
        ...state,
        isLoading: false,
        school
      }
    case rConst.LOADING_SCHOOL:
      return {
        ...state,
        isLoading: true
      }
    case rConst.GOT_SCHOOLS_TOTAL:
      return {
        ...state,
        size: action.number
      }
    default: return state;
  }
}

export const languagesReducer = (state = [], action) =>{
  switch (action.type) {
    case rConst.ADD_LANGUAGES:
      return {
        ...state,
        isLoading: false,
        languages: action.languages
      }
    case rConst.LOADING_LANGUAGE:
      return {
        ...state,
        isLoading: true
      }
    case rConst.GOT_LANGUAGE_TOTAL:
      return {
        ...state,
        size: action.number
      }
    default: return state;
  }
}
