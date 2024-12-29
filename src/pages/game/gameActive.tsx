import {Gamer, GameStatus} from "./index.tsx";
// import * as React from "react";
import {Modal} from "@mantine/core";


type Props = {
  deletedGamers: Record<string, Gamer>,
  gameStatus: GameStatus,
  activeGamers: Record<string, Gamer>,
  setGameStatus: (x: GameStatus) => void,

}
export const GameActive = (p: Props) => {
  console.log('GAME STATUS', p.gameStatus)

  const foo = () => {
      if (Object.values(p.activeGamers).length - Object.values(p.deletedGamers).length === 1 && p.gameStatus === 'active') {
        p.setGameStatus('finished')
        console.log('OPEN MODAL!', p.gameStatus)
      }
      return null
  }
  return (
    <div>
      {foo()}
      <Modal opened={p.gameStatus === 'finished'} onClose={() => p.setGameStatus('notActive')}>
        <div>POBEDA CYKJA</div>
      </Modal>
    </div>
  );
};

