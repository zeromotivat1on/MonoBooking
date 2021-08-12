// Return current Time in hh-mm format
export default function getCurrentTime(): string {
    let date = new Date();
    return date.toString().substr(16, 5);
}