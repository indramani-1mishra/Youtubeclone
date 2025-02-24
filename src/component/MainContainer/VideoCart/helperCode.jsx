

 export function formatViews(views) {
    if (!views) return "0"; // Agar null/undefined ho to 0 return kare
    let num = Number(views); // Ensure it's a number

    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M"; // 1.2M format
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K"; // 1.2K format
    } else {
        return num; // Agar value 1000 se chhoti hai, to as it is
    }
}

//export default formatViews;
export const api ="AIzaSyCWH-0AftDJa1SOzcKCKViDhezvLO2BcKE";