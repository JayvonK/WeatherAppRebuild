export const DescriptionFormat = (description: string) => {
    return description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}