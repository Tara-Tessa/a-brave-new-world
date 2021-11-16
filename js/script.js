let index = 0;

const handleSubmitForm = (e) => {
    e.preventDefault();
    //console.log(e);

    showOutcome();

    const vIndex = visualTest();
    //console.log(vIndex);

    const rIndex = radioTest(vIndex);
    //console.log(rIndex);

    const finalIndex = sliderTest(rIndex);
    //console.log(finalIndex); //29 totaal

    const percentage = calcPercentage(finalIndex);
    //console.log(percentage);

    const list = calcList(percentage);
    //console.log(list);

    //naam ophalen
    getInfo();

    setNumbers(percentage, list);

    calcTimer(list);
}

const showOutcome = () => {
    $outcome = document.querySelector(`.outcome`);
    $outcome.innerHTML = `<p class="outcome-name">Hallo naam,</p>
            <div class="outcome-nrs clock-img">
                <p class="outcome-txt prcnt">percentage</p>
                <p class="outcome-txt list">lijst</p>
                <p class="outcome-txt clock">klok</p>
            </div>
            <div class="outcome-box">
                <p class="txt_adres">"The Box" is opweg naar u! U zult deze ontvangen op het adres: <span
                        class="outcome-adress">adres</span>.</p>
                <img src="../assets/img/box.png" alt="box" width="222" height="210">
            </div>
            <a class="world_button" href="../pages/world.html">Ontdek "The World"</a>`
}

const setNumbers = (percentage, list) => {
    const $percentage = document.querySelector(`.prcnt`);
    $percentage.textContent = `${percentage}%`;

    const $list = document.querySelector(`.list`);
    $list.textContent = `${list}e op de lijst`;
}

const getInfo = () => {
    getName();
    getAdress();
}

const getName = () => {
    const $name = document.querySelector(`.namefield`);
    const name = $name.value;
    //console.log(name);
    const $salutation = document.querySelector(`.outcome-name`);
    $salutation.textContent = `Hallo, ${name}`;
}

const getAdress = () => {
    const $street = document.querySelector(`.streetfield`);
    const street = $street.value;
    console.log(street);

    const $number = document.querySelector(`.numberfield`);
    const number = $number.value;
    console.log(number);

    const $postalnr = document.querySelector(`.postalnrfield`);
    const postalnr = $postalnr.value;
    console.log(postalnr);

    const $city = document.querySelector(`.cityfield`);
    const city = $city.value;
    console.log(city);

    const $adress = document.querySelector(`.outcome-adress`);
    $adress.textContent = `${street} ${number} in ${postalnr} ${city}`;
}

const calcTimer = (list) => {
    const numbers = list.toString();
    const stringed = numbers.split(``);
    const reversed = stringed.reverse();
    let joined = reversed.join(``)
    //console.log(joined);
    const id = setInterval(count => {
        joined++
        //console.log(joined);
        const $clock = document.querySelector(`.clock`)
        $clock.textContent = joined
    }, 1000);
}

const calcList = (percentage) => {
    newNr = (101 - percentage) * 3 * 26
    //console.log(newNr)
    listNr = newNr;
    return listNr;
}

const calcPercentage = (finalIndex) => {
    const prcnt = ((finalIndex / 29) * 100).toFixed(0);
    //console.log(prcnt);
    return prcnt;
}

const sliderTest = (rIndex) => {
    const bathIndex = bathResult(rIndex);
    //console.log(bathIndex);

    const nailIndex = nailResult(bathIndex);
    //console.log(nailIndex);

    const index = nailIndex;
    return index;
}

const nailResult = (bathIndex) => {
    const $nail = document.querySelector(`.nailrange`);
    const nailValue = parseInt($nail.value);
    bathIndex += nailValue;
    return bathIndex;
}

const bathResult = (rIndex) => {
    const $bath = document.querySelector(`.bathrange`);
    const bathValue = parseInt($bath.value);
    rIndex += bathValue;
    return rIndex;
}

const radioTest = (vIndex) => {
    const handIndex = handResult(vIndex);
    //console.log(handIndex);

    const combIndex = combResult(handIndex);
    //console.log(combIndex);

    const vacuumIndex = vacuumResult(combIndex);
    //console.log(vacuumIndex);

    index = vacuumIndex;
    return index;
}

const vacuumResult = (combIndex) => {
    const $vacuum = document.querySelector(`.vacuumbutton:checked`);
    const valueVacuum = parseInt($vacuum.value);
    combIndex += valueVacuum;
    return combIndex;
}

const combResult = (handIndex) => {
    const $comb = document.querySelector(`.combbutton:checked`);
    const valueComb = parseInt($comb.value);
    handIndex += valueComb;
    return handIndex;
}

const handResult = (vIndex) => {
    const $hand = document.querySelector(`.handbutton:checked`);
    const valueHand = parseInt($hand.value);
    vIndex += valueHand;
    return vIndex;
}

const visualTest = () => {
    const pinkIndex = pinkResult();
    //console.log(pinkIndex);

    const blueIndex = blueResult(pinkIndex);
    //console.log(blueIndex);

    const whiteIndex = whiteResult(blueIndex);
    //console.log(whiteIndex);

    const index = whiteIndex;
    return index;
}

const pinkResult = () => {
    const $pink = document.querySelector(`.pink_visual:checked`);
    const valuePink = parseInt($pink.value);
    //console.log(valuePink);
    //console.log(index);
    index += valuePink;
    //console.log(index);
    return index;
}

const blueResult = (pinkIndex) => {
    const $blue = document.querySelector(`.blue_visual:checked`);
    const valueBlue = parseInt($blue.value);
    //console.log(valuePink);
    //console.log(index);
    pinkIndex += valueBlue;
    //console.log(index);
    return pinkIndex;
}

const whiteResult = (blueIndex) => {
    const $white = document.querySelector(`.white_visual:checked`);
    const valueWhite = parseInt($white.value);
    //console.log(valuePink);
    //console.log(index);
    blueIndex += valueWhite;
    //console.log(index);
    return blueIndex;
}

const init = () => {
    const $form = document.querySelector(`.form`);
    //console.log($form);

    $form.addEventListener(`submit`, handleSubmitForm);
}

init();