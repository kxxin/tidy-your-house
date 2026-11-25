// The contract between the Unity game and this page.
// Keep it in sync with GameBridge.cs and BridgePlugin.jslib in the Unity project.

// ---- Page -> Unity (sent with sendMessage to the "GameBridge" GameObject) ----

export interface ApplySettingsPayload {
  playerName: string
  soundOn: boolean
}

export interface SetPausedPayload {
  paused: boolean
}

// ---- Unity -> Page (dispatched from BridgePlugin.jslib) ----

export type RoomId = 'bedroom' | 'bathroom' | 'kitchen' | 'livingRoom'
export type SkillId = 'bigBasket' | 'tidySense' | 'quickFeet'

export interface ItemPlacedPayload {
  itemId: string
  roomId: RoomId
  roomTidy: number
  roomTotal: number
}

export interface RoomCompletedPayload {
  roomId: RoomId
  timeSec: number
}

export interface SkillUnlockedPayload {
  skillId: SkillId
}

export interface TimerTickPayload {
  elapsedSec: number
}

export interface GameCompletedPayload {
  totalTimeSec: number
  itemsPlaced: number
  wrongDrops: number
}

// Event name -> payload type. GameReady carries no payload.
export interface GameEventMap {
  GameReady: undefined
  ItemPlaced: ItemPlacedPayload
  RoomCompleted: RoomCompletedPayload
  SkillUnlocked: SkillUnlockedPayload
  TimerTick: TimerTickPayload
  GameCompleted: GameCompletedPayload
}
