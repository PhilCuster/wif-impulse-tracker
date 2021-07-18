import { Storage } from '@capacitor/storage';

export async function getGameState() {
    const item = await Storage.get({ key: 'game' });
    if (item.value) {
        return JSON.parse(item.value)
    } else {
        return {};
    }
}