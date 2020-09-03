export const required = (value) => {
    if(value) return undefined;
    return 'field is requared';
}


export const maxLengthCreator = (maxlength) => (value) => {
    if(value && value.length > maxlength) return `max length is ${maxlength} symbols`;
    return undefined;
}