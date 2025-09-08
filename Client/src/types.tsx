export type MunchkinRace = 'Human' | 'Elf' | 'Dwarf' | 'Halfling';
export enum Gender {
    none = "none",
    male = 'male',
    female = 'female',
    other = 'other'
}

export interface Player {
    id: string
    name: string
    gender: Gender
    level: number
    bonus: number
    class: MunchkinClass
    race: MunchkinRace
}

// PlayerDto type for API usage
export interface PlayerDto {
    GameId: string;
    PlayerId: string;
    PlayerName: string;
    Gender: string;
    Level: number;
    Bonus: number;
    Race: MunchkinRace;
}

export interface Enemy {
    level: number
    bonus: number
}
export interface Combat {
    Player: Player
    Enemy: Enemy
    Assistant: Player | null
}
export interface Game {
    gameId: string
    gameName: string
    players: Player[]
    currentPlayerIndex: number
    isGameStarted: boolean
}

export type MunchkinClass = 'Warrior' | 'Wizard' | 'Thief' | 'Cleric';