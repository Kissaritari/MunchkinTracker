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
}

// PlayerDto type for API usage
export interface PlayerDto {
    GameId: string;
    PlayerId: string;
    PlayerName: string;
    Gender: string;
    Level: number;
    Bonus: number;
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