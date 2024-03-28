export const DescriptionFormat = (description: string) => {
    return description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

export const CityNameFormat = (name: string) => {
    let nameArray = name.split(",");
    nameArray[0] = DescriptionFormat(nameArray[0]);
    nameArray[1] = nameArray[1].toUpperCase();
    
    return nameArray.join(", ");
}