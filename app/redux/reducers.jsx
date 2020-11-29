import * as rConst from "reduxConstants";

export const schoolsReducer = (state = [], action) =>{
  switch (action.type) {
    case rConst.ADD_SCHOOL:
      var school = (state.data !== undefined) ? state.data : [];
      school.push(action.school);
      return {
        ...state,
        isLoading: false,
        data: school
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
        data: action.languages
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
        data: action.skills
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
        data: action.cert
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

export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case rConst.ADD_PROJECTS:
      return {
        ...state,
        isLoading: false,
        data: action.projects
      }
    case rConst.LOADING_PROJECT:
      return {
        ...state,
        isLoading: true
      }
    case rConst.GOT_PROJECTS_TOTAL:
      return {
        ...state,
        size: action.number
      }
    default: return state;
  }
}
