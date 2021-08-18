//set random to display
document.querySelector('.generate-btn').addEventListener('click', function () {
    const randomNumber = getRandom()
    document.getElementById('generate-input').value = randomNumber

})
//generate random number
function getRandom() {
    const randomNumber = Math.round((Math.random() * 10000));
    if ((randomNumber.toString()).length == 4) {
        return randomNumber
    } else {
        return getRandom()
    }
}
// target button html for calculator and display them to calculator display 
// access button via loop its also possible to do with event delegate method.
const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
    button.addEventListener('click', function (e) {
        const currentDigit = document.getElementById('submit-input').value;
        let updateByClick = currentDigit + e.target.innerText
        if (e.target.innerText == 'C') {
            document.getElementById('submit-input').value = ''
        } else if (isNaN(parseInt(e.target.innerText))) {
            return
        } else {
            document.getElementById('submit-input').value = updateByClick;
        }
    })
}
// check pin matching
function submitButton() {
    const submitPin = document.getElementById('submit-input').value;
    const generatedPin = document.getElementById('generate-input').value;
    if (submitPin == generatedPin && submitPin != '') {
       displayWarning('block','none');
    } else {
        displayWarning('none', 'block');
    };
}
// show warning msg
function displayWarning(view1, view2) {
    document.querySelector('.notify-ok').style.display = view1;
    document.querySelector('.notify-no').style.display = view2;
};