export default function formatTime(timeInput: string): string {
    // Validasi input agar sesuai format hh:mm
    if (!/^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(timeInput)) {
        throw new Error("Invalid time format. Expected format is hh:mm");
    }
    const [hours, minutes] = timeInput.split(":").map(Number);

    const fullDate = new Date(1970, 0, 1, hours, minutes);

    return fullDate.toISOString();
}
