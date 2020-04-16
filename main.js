const APIkey = {
    headers: new Headers({
        "x-api-key":'IVqMcW16jeMCCyCdfkRdd9KfjrZMhJYAwOpSdjB4',
        "accept": 'application/json'})};

const stateAbbrev = {
    ALABAMA: 'AL',
    ALASKA: 'AK',
    ARIZONA: 'AZ',
    ARKANSAS: 'AR',
    CALIFORNIA: 'CA',
    COLORADO: 'CO',
    CONNECTICUT: 'CT',
    DELAWARE: 'DE',
    FLORIDA: 'FL',
    GEORGIA: 'GA',
    HAWAII: 'HI',
    IDAHO: 'ID',
    ILLINOIS: 'IL',
    INDIANA: 'IN',
    IOWA: 'IA',
    KANSAS: 'KS',
    KENTUCKY: 'KY',
    LOUISIANA: 'LA',
    MAINE: 'ME',
    MARYLAND: 'MD',
    MASSACHUSSETTS: 'MA',
    MICHIGAN: 'MI',
    MINNESOTA: 'MN',
    MISSISSIPPI: 'MS',
    MISSOURI: 'MO',
    MONTANA: 'MT',
    NEBRASKA: 'NE',
    NEVADA: 'NV',
    NEWHAMPSHIRE: 'NH',
    NEWJERSEY: 'NJ',
    NEWMEXICO: 'NM',
    NEWYORK: 'NY',
    NORTHCAROLINA: 'NC',
    NORTHDAKOTA: 'ND',
    OHIO: 'OH',
    OKLAHOMA: 'OR',
    OREGON: 'OR',
    PENNSYLVANIA: 'PA',
    RHODEISLAND: 'RI',
    SOUTHCAROLINA: 'SC',
    SOUTHDAKOTA: 'SD',
    TENNESSEE: 'TN',
    TEXAS: 'TX',
    UTAH: 'UT',
    VERMONT: 'VT',
    VIRGINIA: 'VA',
    WASHINGTON: 'WA',
    WESTVIRGINIA: 'WV',
    WISCONSIN: 'WI',
    WYOMING: 'WY'
}

function displayResults(responseJson) {
    console.log(responseJson);
}

function getParksResponse(url, options) {
    fetch(url,options).then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    })
}

function formatUrl(userInputString, maxResults) {
    let getNationalParks = `https://developer.nps.gov/api/vl/parks?${userInputString}&limit=${maxResults}`;
    getParksResponse(getNationalParks, APIkey)
}

function formatUserInput(userInput, numResults) {
    console.log(userInput);
    let userInputArray = [];
    for (let i = 0; i < userInput.length; i++) {
        if (stateAbbrev[userInput[i]] !== undefined) {
            userInputArray.push(`stateCode=${stateAbbrev[userInput[i]]}`)
        }
        else if (Object.values(stateAbbrev).indexOf(userInput[i]) !== -1){
            userInputArray.push(`stateCode=${userInput[i]}`);
        }
    }
    userInputString = userInputArray.join('&')
    formatUrl(userInputString, numResults);
}

function findUserInput() {
    $('form').submit(event => {
        event.preventDefault();
        let userInput = $('#userStates').val().toUpperCase().replace(/\s/g,'').split(',');
        let numResults = $('#maxResults').val();
        formatUserInput(userInput, numResults)
    })
}

function handleEventListeners() {
    findUserInput()
}
$(handleEventListeners)