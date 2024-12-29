import * as React from "react";
import styled from 'styled-components'
import redEyePng from '../../assets/redEye1.png'
import lemurio from '../../assets/lemurio.png'
import ukurish from '../../assets/ukurish.png'
import svinkusya from '../../assets/svinkusya.png'
import hachvin from '../../assets/hachvin.png'
import {Fieldset, TextInput, Button, Radio, Group, Modal} from '@mantine/core';


type Icons = 'redEye' | 'lemurio' | 'ukurish' | 'svinkusya'


const IconsData1 = {
  redEye: {
    name: 'redEye',
    src: redEyePng,
    label: 'Красный Бубалех'
  },
  lemurio: {
    name: 'lemurio',
    src: lemurio,
    label: 'Лемурио'
  },
  ukurish: {
    name: 'ukurish',
    src: ukurish,
    label: 'Укурыш'
  },
  svinkusya: {
    name: 'svinkusya',
    src: svinkusya,
    label: 'Свинкуся'
  },
  hachvin: {
    name: 'hachvin',
    src: hachvin,
    label: 'Хачвин'
  },
}


type Gamer = {
  id: string;
  gender: Icons;
  name: string;
}

type PropsGamer = {
  index: number;
  removeGamer: (index: number) => void;
  setGamer: (gamer: Gamer) => void;
}

const RadioWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-content: center;
`

const ImgWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ChouseWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
`

const ModalWrapper = styled.div`
    padding: 20px;
`
const AvatarWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const GamerComponent = (p: PropsGamer) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const id = React.useId()
  const [gender, setGender] = React.useState<Icons>('redEye');
  const [name, setName] = React.useState('');
  const numberGamer = p.index + 1;

  const onBlur = () => p.setGamer({name,gender, id})
  return (
    <GamerWrapper>
      <div>
        <TextInput
          value={name}
          onBlur={onBlur}
          onChange={(e) => setName(e.currentTarget.value)}
          label="Хто ты?"
          placeholder={`Имя игрока ${numberGamer}`}/>
      </div>
      <AvatarWrapper>
        <img src={IconsData1[gender].src} alt={gender}/>
      </AvatarWrapper>
      <Button
        onClick={() => p.removeGamer(p.index)} color={"yellow"} style={{alignSelf: 'end'}}
      >
        Удалить игрока {numberGamer}
      </Button>
      <Button onClick={() => setIsOpen(true)}>
        Выбрать игрока
      </Button>
      <Modal size={'100%'} opened={isOpen} onClose={() => setIsOpen(false)}>
        <ModalWrapper>
          <Group mt="xs">
            <ChouseWrapper>
              {Object.values(IconsData1).map(x => {
                return (
                  <RadioWrapper>
                    <Radio
                      value={x.name}
                      onChange={(e) => setGender(e.currentTarget.value as Icons)}
                      checked={gender === x.name}
                      label={x.label}
                    />
                    <ImgWrapper>
                      <img src={x.src} alt="red eye"/>
                    </ImgWrapper>
                  </RadioWrapper>
                )
              })}
            </ChouseWrapper>
          </Group>
        </ModalWrapper>
      </Modal>
    </GamerWrapper>
  )
}
// type PropsActiveGamers = {
//   activeGamers: Gamer[];
//
// }
// const ActiveGamersComponent = (p: PropsActiveGamers) => {
//   return (
//     <div>2</div>
//   )
// }


const Container = styled.div`
    user-select: none;
    padding: 100px;
`
const GamersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px;
`
const InputsGamerWrapper = styled.div`
    max-width: 100%;
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
      </GamersContainer>
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
    </Container>
  );
};

