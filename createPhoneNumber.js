function createPhoneNumber(numbers){
    var phoneNum = [];
    numbers.unshift('(');
    numbers.splice(4,0,')',' ');
    numbers.splice(9,0,'-');
    console.log(numbers.join(''));
    return numbers.join('');

}