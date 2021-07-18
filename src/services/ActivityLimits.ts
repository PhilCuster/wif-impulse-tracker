import { Activities } from '../model/Limits';
import data from './LimitData';

export function getActivityLimitData(): Activities {
    return data.activities;
}

export function getActivityNotes() {
    return data.notes;
}