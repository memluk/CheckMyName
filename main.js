async function checkName(){
    let input = document.getElementById('input');

    let genderJsonLink = 'https://api.genderize.io/?name=';
    genderJsonLink += input.value;

    let genderRequest = new Request(genderJsonLink);
    let genderResponse = await fetch(genderRequest);
    genderResult = await genderResponse.json();

    let name = document.createElement('h2');
    document.body.appendChild(name);
    name.textContent = input.value;

    let gender = document.createElement('p');
    document.body.appendChild(gender);
    gender.textContent = `${genderResult.gender} ${genderResult.probability*100}%`;

    let nationalityJsonLink = 'https://api.nationalize.io/?name=';
    nationalityJsonLink += input.value;

    let nationalityRequest = new Request(nationalityJsonLink);
    let nationalityResponse = await fetch(nationalityRequest);
    natResult = await nationalityResponse.json();

    for(let i=0; i<natResult.country.length; i++){
        let nationality = document.createElement('p');
        document.body.appendChild(nationality);
        let pro = natResult.country[i].probability*100;
        nationality.textContent = `${natResult.country[i].country_id}: ${pro.toFixed(2)}%`;
    }
}
