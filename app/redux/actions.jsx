import firebase, {firebaseStore} from 'app/firebase/';
import * as rConst from "reduxConstants";

export const addSchool = (school) =>{
  return{
    type: rConst.ADD_SCHOOL,
    school
  }
}

export const loadingSchools = ()=>{
  return{
    type: rConst.LOADING_SCHOOL
  }
}

export const gotSchoolsTotal = (number) =>{
  return{
    type: rConst.GOT_SCHOOLS_TOTAL,
    number
  }
}

export var startGetSchools = () =>{
  return(dispatch, getState) =>{
    dispatch(loadingSchools());
    var schoolsRef = firebaseStore.collection(`school`).orderBy('timeFrom', 'desc');

    return schoolsRef.get().then((snapshot) =>{
      var schools = [];
      dispatch(gotSchoolsTotal(snapshot.size));

      snapshot.forEach((school) =>{
        var proSubject = firebaseStore.collection('school').doc(school.id).collection('Subjects').orderBy('name').get();
        var proCCA = firebaseStore.collection('school').doc(school.id).collection('CCA').get();
        return Promise.all([proSubject, proCCA]).then((docs) =>{
          var subjects = [];
          var ccas = [];
          docs[0].forEach((subject) =>{
            subjects.push({
              id: subject.id,
              ...subject.data()
            })
          });
          docs[1].forEach((cca) =>{
            ccas.push({
              id: cca.id,
              ...cca.data()
            })
          });
          schools.push();
          dispatch(addSchool({
            id: school.id,
            ...school.data(),
            subjects: subjects,
            ccas: ccas
          }));
        });
      });
    }).catch((err) => {
      console.log('Error getting documents', err);
    });
  }
}

export const addLanguages = (languages) =>{
  return{
    type: rConst.ADD_LANGUAGES,
    languages
  }
}

export const loadingLanguage = () =>{
  return{
    type: rConst.LOADING_LANGUAGE
  }
}

export const gotLangugeTotal = (number) =>{
  return{
    type: rConst.GOT_LANGUAGES_TOTAL,
    number
  }
}

export var startGetLanguages = () =>{
  return(dispatch, getState)=>{
    dispatch(loadingLanguage());
    var languageRef = firebaseStore.collection(`language`).orderBy('listen', 'desc');

    return languageRef.get().then((snapshot) =>{
      var languages = [];
      dispatch(gotLangugeTotal(snapshot.size));

      snapshot.forEach((language) =>{
        languages.push({
          id: language.id,
          ...language.data()
        })
      });

      dispatch(addLanguages(languages));
    })
  }
}

export const addSkills = (skills) =>{
  return{
    type: rConst.ADD_SKILLS,
    skills
  }
}

export const loadingSkill = () =>{
  return{
    type: rConst.LOADING_SKILL
  }
}

export const gotSkillTotal = (number) =>{
  return{
    type: rConst.GOT_SKILLS_TOTAL,
    number
  }
}

export var startGetSkills = () =>{
  return(dispatch, getState)=>{
    dispatch(loadingSkill());
    var skillRef = firebaseStore.collection(`skills`).orderBy('name', 'asc');

    return skillRef.get().then((snapshot) =>{
      var skills = [];
      dispatch(gotSkillTotal(snapshot.size));

      snapshot.forEach((skill) =>{
        skills.push({
          id: skill.id,
          ...skill.data()
        })
      });

      dispatch(addSkills(skills));
    })
  }
}

export const addCerts = (cert) =>{
  return{
    type: rConst.ADD_CERTIFICATIONS,
    cert
  }
}

export const loadingCert = () =>{
  return{
    type: rConst.LOADING_CERTIFICATION
  }
}

export const gotCertTotal = (number) =>{
  return{
    type: rConst.GOT_CERTIFICATIONS_TOTAL,
    number
  }
}

export var startGetCerts = () =>{
  return(dispatch, getState)=>{
    dispatch(loadingCert());
    var certRef = firebaseStore.collection(`certifications`).orderBy('name', 'asc');

    return certRef.get().then((snapshot) =>{
      var certs = [];
      dispatch(gotCertTotal(snapshot.size));

      snapshot.forEach((cert) =>{
        certs.push({
          id: cert.id,
          ...cert.data()
        })
      });

      dispatch(addCerts(certs));
    })
  }
}


export const addProjects = (projects) => {
  return {
    type: rConst.ADD_PROJECTS,
    projects
  }
}

export const loadingProject = () => {
  return {
    type: rConst.LOADING_PROJECT
  }
}

export const gotProjectTotal = (number) => {
  return {
    type: rConst.GOT_PROJECTS_TOTAL,
    number
  }
}

export var startGetProjects = () => {
  return (dispatch, getState) => {
    dispatch(loadingProject());
    var projectRef = firebaseStore.collection("projects").orderBy('last Updated', 'desc');

    return projectRef.get().then((snapshot) => {
      var projects = [];
      dispatch(gotProjectTotal(snapshot.size));

      snapshot.forEach((project) => {
        projects.push({
          id: project.id,
          ...project.data()
        })
      });

      dispatch(addProjects(projects));
    })
  }
}