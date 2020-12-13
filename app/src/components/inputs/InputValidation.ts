export const hasLoginError = (data: string) : boolean => {
    return data.length < 3;

};

export const hasPasswordError = (data: string) : boolean => {
    return data.length < 3;

};

export const hasEmailError = (data: string) : boolean => {
    return data.length < 3 || !data.includes('@') || !data.includes('.');

};

