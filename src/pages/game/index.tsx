import * as React from "react";
import styled from 'styled-components'
import {Fieldset, TextInput, Button} from '@mantine/core';



type PropsGamer = {
  index: number;
  removeGamer: (index: number) => void;
}
const GamerComponent = (p: PropsGamer) => {
  const numberGamer = p.index + 1;
  return (
    <GamerWrapper>
      <TextInput label="Your name" placeholder={`Имя игрока ${numberGamer}`}/>
      <Button onClick={() => p.removeGamer(p.index)} color={"red"} style={{alignSelf: 'end'}}>Удалить игрока {numberGamer}</Button>
    </GamerWrapper>
  )
}


const Container = styled.div``
const GamersContainer = styled.div``
const InputsGamerWrapper = styled.div`
    max-width: 500px;
`
const GamerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
`
const ActiveGamers = styled.div``
export const Game = () => {

  const [gamersCountArr, setGamersCount] = React.useState([1]);

  const removeGamer = (index: number) => {
    if (gamersCountArr.length === 1) return;
    setGamersCount(prev => prev.slice(0, index).concat(prev.slice(index + 1)))
  }


  const addGamer = () => {
    setGamersCount(prev => [...prev, 1])
  }
  return (
    <Container>
      <GamersContainer>
        <InputsGamerWrapper>
          <Button color={"green"} onClick={addGamer}>Добавить игрока</Button>
          <Fieldset legend="Введите игроков">
            {gamersCountArr.map((_, index) => <GamerComponent key={index} index={index} removeGamer={removeGamer}/>)}
          </Fieldset>
        </InputsGamerWrapper>
        <ActiveGamers>
          <div>actiove</div>
        </ActiveGamers>
      </GamersContainer>
    </Container>
  );
};

