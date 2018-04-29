import * as rConst from "reduxConstants";

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
    case rConst.GOT_LANGUAGES_TOTAL:
      return {
        ...state,
        size: action.number
      }
    default: return state;
  }
}

export const skillsReducer = (state = [], action) =>{
  switch (action.type) {
    case rConst.ADD_SKILLS:
      return {
        ...state,
        isLoading: false,
        skills: action.skills
      }
    case rConst.LOADING_SKILL:
      return {
        ...state,
        isLoading: true
      }
    case rConst.GOT_SKILLS_TOTAL:
      return {
        ...state,
        size: action.number
      }
    default: return state;
  }
}

export const certificationsReducer = (state = [], action) =>{
  switch (action.type) {
    case rConst.ADD_CERTIFICATIONS:
      return {
        ...state,
        isLoading: false,
        cert: action.cert
      }
    case rConst.LOADING_CERTIFICATION:
      return {
        ...state,
        isLoading: true
      }
    case rConst.GOT_CERTIFICATIONS_TOTAL:
      return {
        ...state,
        size: action.number
      }
    default: return state;
  }
}
