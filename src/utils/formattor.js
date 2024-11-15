// export const formatValue = (value) => {
//     const formattedNumber = new Intl.NumberFormat('en-US').format(value);
//     return formattedNumber
// }

export const formatValue = (value) => {
    const formattedNumber = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    return formattedNumber;
}
