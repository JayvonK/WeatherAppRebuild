export const ConvertToCelsius = (temp: number) => {
    return Math.round((temp - 32) * (5/9));
}

export const ConvertToFarenheit = (temp: number) => {
    return Math.round((temp * (9/5)) + 32);
}