export function toAgoraDate(date) {
    return date.toISOString().split('T')[0]; // TODO: UTC problem, do not rely on this!
}