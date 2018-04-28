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
    type: rConst.GOT_LANGUAGE_TOTAL,
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
