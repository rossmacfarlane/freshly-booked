export default function getDateNumber(dateString) {
    const date = new Date(dateString)
    return date.getDate()
}

export function getDateDay(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date(dateString)
    return days[date.getDay()]
}
