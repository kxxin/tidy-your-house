# Tidy Your House

A first-person 3D tidy-up game built in **Unity 6.3 LTS** and played inside a **React + TypeScript + Vite + Tailwind** web page.

Everything in the house has ended up on the floor. Pick each item up, carry it to where it belongs, and tidy every room as fast as you can. Finishing a room unlocks a skill that makes the next rooms quicker. Your full-house time goes on the leaderboard.

> Work in progress. Portfolio project for learning Unity C# and React.

## What it shows

- **Unity C#:** GameObjects, Prefabs, Coroutines, lifecycle methods, scene management, uGUI, ScriptableObjects
- **React:** components, Hooks and state, Tailwind, CSS Modules, TypeScript, Vite
- **Unity ↔ web communication:** the page sends settings into the game; the game sends progress, unlocks and the final time back to the page

## Repo layout

| Folder | What's in it |
| --- | --- |
| `unity/` | The Unity project (Universal 3D, Unity 6.3 LTS) |
| `web/` | The React site that hosts the WebGL build |
| `.github/workflows/` | Deploys `web/` to GitHub Pages on every push to `main` |

## Run the site locally

```bash
cd web
npm install
npm run dev
```

## Event contract

Page → Unity: `ApplySettings`, `StartGame`, `SetPaused`
Unity → Page: `GameReady`, `ItemPlaced`, `RoomCompleted`, `SkillUnlocked`, `TimerTick`, `GameCompleted`

Payload types live in [`web/src/game/gameEvents.ts`](web/src/game/gameEvents.ts).

## Links

- Live site: https://kxxin.github.io/tidy-your-house/ (after the first deploy)
- itch.io: coming soon
