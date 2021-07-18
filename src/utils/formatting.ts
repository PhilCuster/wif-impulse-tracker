export function displayPhase(phase: string): string {
    return phase.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export function displayCountry(country: string): string {
    return country.toUpperCase();
}
