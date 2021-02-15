//suggestion

//filterResults function (triggered by all selection elements)

// if team != All then ... filterTeam()
// if sport != All then ... take data from previus step (already filtered for team) and pass to filterSport()
// ... event ..
//





// Filter
export const filterTeam = (data, condition) => {
    return data.filter(athletes => athletes.team.toLowerCase().includes(condition));
};

export const filterName = (data, condition) => {
    return data.filter(athletes => athletes.name.toLowerCase().includes(condition));
};

export const filterSport = (data, condition) => {
    return data.filter(athletes => athletes.sport.toLowerCase().includes(condition));
};

export const filterEvent = (data, condition) => {
    return data.filter(athletes => athletes.event.toLowerCase().includes(condition));
};
export const filterFemale = (data) => {
    return data.filter(athletes => athletes.gender.includes('F'));
};
export const filterMale = (data) => {
    return data.filter(athletes => athletes.gender.includes('M'));
};

// export const filterGender = (data) => {
//         return data.filter(athletes => athletes.gender.includes(condition));
//     }
//     // data - peru - 
// export const filterMedalla = (data, conditionCountry, conditionMedal) => {
//     let objCountry = data.filter(athletes => athletes.team.includes(conditionCountry));
//     return objCountry.filter(medallas => medallas.medal.includes(conditionMedal)).length;
// }



//Sort 
export const sortByAz = (data) => data.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    };
});

export const sortByZa = (data) => data.sort((a, b) => {
    if (a.name < b.name) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    } else {
        return 0;
    }
});



//Map
export const mapTeam = (data) => {
    return data.map(athletes => athletes.team);
};

export const mapSport = (data) => {
    return data.map(athletes => athletes.sport);
};

export const mapEvent = (data) => {
    return data.map(athletes => athletes.event);
};