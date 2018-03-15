import firebase, {firebaseStore} from 'app/firebase/';

export const addSchool = (schools) =>{
  return{
    type: 'ADD_SCHOOL',
    schools
  }
}

export var startGetSchools = () =>{
  return(dispatch, getState) =>{
    var schoolsRef = firebaseStore.collection(`school`).orderBy('timeFrom', 'desc');

    return schoolsRef.get().then((snapshot) =>{
      var schools = [];

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
