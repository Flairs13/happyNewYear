import styled from 'styled-components'
import {Fieldset, TextInput} from '@mantine/core';

const Container = styled.div``
const InputsGamerWrapper = styled.div`
    max-width: 500px;
`
export const Game = () => {
  return (
    <Container>
      <InputsGamerWrapper>
        <Fieldset legend="Введите игроков">
          <TextInput label="Your name" placeholder="Имя игрока"/>
          <TextInput label="Your name" placeholder="Имя игрока"/>
          <TextInput label="Your name" placeholder="Имя игрока"/>
          <TextInput label="Your name" placeholder="Имя игрока"/>
        </Fieldset>
      </InputsGamerWrapper>
    </Container>
  );
};

