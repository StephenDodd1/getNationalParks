//'X-Api-Key'=NUKvX2jbb8rNB6KVyzdqGObtrWRRDaY5rnEscNA6
const stateAbbrev = {
    alabama: 'al',
    alaska: 'ak',
    arizona: 'az',
    arkansas: 'ar',
    california: 'ca',
    colorado: 'co',
    connecticut: 'ct',
    delaware: 'de',
    florida: 'fl',
    georgia: 'ga',
    hawaii: 'hi',
    idaho: 'id',
    illinois: 'il',
    indiana: 'in',
    iowa: 'ia',
    kansas: 'ks',
    kentucky: 'ky',
    louisiana: 'la',
    maine: 'me',
    maryland: 'md',
    massachusetts: 'ma',
    michigan: 'mi',
    minnesota: 'mn',
    mississippi: 'ms',
    missouri: 'mo',
    montana: 'mt',
    nebraska: 'ne',
    nevada: 'nv',
    'new hampshire': 'nh',
    'new jersey': 'nj',
    'new mexico': 'nm',
    'new york': 'ny',
    'north carolina': 'nc',
    'north dakota': 'nd',
    ohio: 'oh',
    oklahoma: 'ok',
    oregon: 'or',
    pennsylvania: 'pa',
    'rhode island': 'ri',
    'south carolina': 'sc',
    'south dakota': 'sd',
    tennessee: 'tn',
    texas: 'tx',
    utah: 'ut',
    vermont: 'vt',
    virginia: 'va',
    washington: 'wa',
    'west virginia': 'wv',
    wisconsin: 'wi',
    wyoming: 'wy'
}


function formatQuery(userInput, numResults) {
    console.log(userInput);
    for (let i = 0; i < userInput.length; i++) {
        if (stateAbbrev[userInput[i]] !== undefined) {
            console.log(`${stateAbbrev[userInput[i]]}`)
        }
        else if (Object.values(stateAbbrev).indexOf(userInput[i]) !== -1){
            console.log(`${userInput[i]}`);
        }
    }
}

function findUserInput() {
    $('form').submit(event => {
        event.preventDefault();
        let userInput = $('#userStates').val().toLowerCase().replace(/\s/g,'').split(',');
        let numResults = $('#maxResults').val();
        formatQuery(userInput, numResults)
    })
}

function handleEventListeners() {
    findUserInput()
}
$(handleEventListeners)