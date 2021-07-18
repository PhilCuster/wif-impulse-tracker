export interface ActivityLimit {
    [key: string]: PowerMap,
    land: PowerMap,
    naval: PowerMap,
    air: PowerMap,
    combined: PowerMap
}

export interface PowerMap {
    [key: string]: number,
    germany: number,
    italy: number,
    japan: number,
    cw: number,
    france: number,
    china: number,
    ussr: number,
    usa: number
}

export interface Activities {
    [key: string]: ActivityLimit,
    "port attack": ActivityLimit,
    "naval air": ActivityLimit,
    "naval movement": ActivityLimit,
    "naval combat": ActivityLimit,
    "strategic bombardment": ActivityLimit,
    "ground strike": ActivityLimit,
    "rail movement": ActivityLimit,
    "land movement": ActivityLimit,
    "air transport": ActivityLimit,
    "debark at sea": ActivityLimit,
    "invasions": ActivityLimit,
    "paradrops": ActivityLimit,
    "land combat": ActivityLimit,
    "air rebases": ActivityLimit,
    "reorganisation": ActivityLimit
}