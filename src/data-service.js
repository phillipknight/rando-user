let people = [];

export const loadAllPeople = async () => {
    let url = "https://randomuser.me/api/?results=10";
    let response = await fetch(url);
    let result = await response.json();
    people = result.results;
    return people
};