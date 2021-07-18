import { ActivityLimit } from "../model/Limits";

export function getActivityLimit(limits: ActivityLimit, action: string, power: string) {
    if (action === 'pass') {
        return 0;
    }
    if (action === 'combined') {
        return limits.combined[power];
    }
    let secondAction = undefined;
    if (action.includes('-')) {
        secondAction = action.split('-')[1];
        action = action.split('-')[0];
    }
    let result = limits[action][power];
    if (result === -1) {
        return result;
    }
    if (secondAction) {
        let second = limits[secondAction][power];
        if (second === -1) {
            return second;
        }
        result += second;
    }
    return result;
}