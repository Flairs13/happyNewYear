import * as React from "react";
import styled from 'styled-components'
import {Fieldset, TextInput, Button, Radio, Group} from '@mantine/core';



type PropsGamer = {
  index: number;
  removeGamer: (index: number) => void;
}
const GamerComponent = (p: PropsGamer) => {
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const numberGamer = p.index + 1;
  return (
    <GamerWrapper>
      <div>
        <Radio.Group
          value={gender}
          onChange={(e) => setGender(e as 'male' | 'female')}
          name="maleFamele"
          label="Выбери кто ты"
          description="Хозяйка альтушка или же Гигачад"
        >
          <Group mt="xs">
            <Radio checked onChange={(e) => setGender(e.currentTarget.value as 'male' | 'female')} value="male" label="Гигачад" />
            <Radio checked={gender === 'female'} onChange={(e) => setGender(e.currentTarget.value as 'male' | 'female')} value="female" label="Хозяйка" />
          </Group>
        </Radio.Group>
        <TextInput onBlur={() => console.log(gender)} label="Хто ты?" placeholder={`Имя игрока ${numberGamer}`}/>
      </div>

      <Button
        onClick={() => p.removeGamer(p.index)} color={"yellow"} style={{alignSelf: 'end'}}
      >
        Удалить игрока {numberGamer}
      </Button>
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
          <Button color={"#ecb11a"} onClick={addGamer}>Добавить игрока</Button>
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

