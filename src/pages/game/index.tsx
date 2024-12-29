import * as React from "react";
import styled from 'styled-components'
import {Fieldset, TextInput, Button, Radio, Group} from '@mantine/core';

type Gamer = {
  id: string;
  gender: 'male' | 'female';
  name: string;
}

type PropsGamer = {
  index: number;
  removeGamer: (index: number) => void;
  setGamer: (gamer: Gamer) => void;
}
const GamerComponent = (p: PropsGamer) => {
  const id = React.useId()
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [name, setName] = React.useState('');
  const numberGamer = p.index + 1;

  const onBlur = () => p.setGamer({name,gender, id})
  return (
    <GamerWrapper>
      <div>
        <Group mt="xs">
          <Radio onChange={(e) => setGender(e.currentTarget.value as 'male' | 'female')} checked={gender === 'male'} value="male" label="Гигачад" />
          <Radio onChange={(e) => setGender(e.currentTarget.value as 'male' | 'female')} checked={gender === 'female'} value="female" label="Хозяйка" />
        </Group>
        <TextInput
          value={name}
          onBlur={onBlur}
          onChange={(e) => setName(e.currentTarget.value)}
          label="Хто ты?"
          placeholder={`Имя игрока ${numberGamer}`}/>
      </div>

      <Button
        onClick={() => p.removeGamer(p.index)} color={"yellow"} style={{alignSelf: 'end'}}
      >
        Удалить игрока {numberGamer}
      </Button>
    </GamerWrapper>
  )
}


const Container = styled.div`
    user-select: none;
    padding: 100px;
`
const GamersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 70px;
`
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

  const [gamersCountArr, setGamersCount] = React.useState([1,2]);
  const [activeGamers, setActiveGamers] = React.useState<Gamer[]>([]);

  const setActiveGamer = (gamer:Gamer) => setActiveGamers(prev => [...prev, gamer])

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
          <Button color={"#ecb11a"} onClick={addGamer}>Добавить игрока</Button>
          <Fieldset legend="Введите игроков">
            {gamersCountArr.map((_, index) => <GamerComponent setGamer={setActiveGamer} key={index} index={index} removeGamer={removeGamer}/>)}
          </Fieldset>
        </InputsGamerWrapper>
        <ActiveGamers>
          {activeGamers.map((gamer, index: number) => {
            return (
              <div>
                <span style={{marginRight: '20px'}}>игрок {index + 1}</span>
                <span style={{marginRight: '20px'}}>{gamer.gender}</span>
                <span key={gamer.id}>{gamer.name}</span>
              </div>
            )
          })}
        </ActiveGamers>
      </GamersContainer>
    </Container>
  );
};

