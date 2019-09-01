let people = [];

export const loadAllPeople = async () => {
    let url = "https://randomuser.me/api/?results=10";
    let response = await fetch(url);
    let result = await response.json();
    people = result.results;
    return people
};




export const getPersonById = _id => {
    return people.find(person => {
      return person.id.value == _id;
    });
  };