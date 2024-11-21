function validateUrl(value)
{
    let expression = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/gi;
    let regexp = new RegExp(expression);
    return regexp.test(value);
} 

export { validateUrl };
