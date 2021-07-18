import { Storage } from '@capacitor/storage';
import { GameState } from '../model/gameState.model';

export async function saveGameState(state: GameState) {
    await Storage.set({
        key: 'game',
        value: JSON.stringify(state)
    });
}