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
    id: string
    name: string
    players: Player[]
    status: string
}