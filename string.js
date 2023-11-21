// check blank or not
function is_Blank(str){
    if(str.length === 0){
        return `TRUE`
    }else{
        return  `FALSE`
    }
}
console.log(is_Blank(''));

// string from number range
function truncate_string(text, length){
    if(text.length <= length){
        return text;
    }else{
        return text.slice(0, length);
    }
}
console.log(truncate_string('terra skillvul', 5));

// first name only
function firstNameOnly(name){
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    let lastNameInitial = '';
    if(nameParts.length > 1){
        const lastName = nameParts[nameParts.length - 1];
        lastNameInitial = lastName.charAt(0) + '.';
    }
    const result = `${firstName} ${lastNameInitial}`;
    return result;
}
console.log(firstNameOnly('Marliana Azizah'));

// capitalize phrase
function capitalize(teks){
    return teks.charAt(0).toUpperCase() + teks.slice(1)
}
console.log(capitalize('javascript adalah sebuah bahasa pemrograman yang sangat powerful'));

// text truncate
function text_truncate(str, length = 100, ending = '...'){
    if(str.length <= length){
        return str;
    }else{
        return str.slice(0, length - ending.length) + ending;
    }
}
console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.', 19));
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
