import * as React from "react";
import styled from 'styled-components'
import redEyePng from '../../assets/redEye1.png'
import lemurio from '../../assets/lemurio.png'
import ukurish from '../../assets/ukurish.png'
import svinkusya from '../../assets/svinkusya.png'
import hachvin from '../../assets/hachvin.png'
import {TextInput, Button, Modal, Card, Image, Text, Group} from '@mantine/core';





type Icons = 'redEye' | 'lemurio' | 'ukurish' | 'svinkusya' | 'hachvin'


type IconsData = {
  [key in Icons]: {
    name: Icons;
    src: string;
    label: string;
    info?: string;
  }
}
const IconsData1: IconsData = {
  redEye: {
    name: 'redEye',
    src: redEyePng,
    label: 'Красный Бубалех',
    info: 'Красный Бубалех — мастер хаоса, чьи действия непредсказуемы, а присутствие вызывает вспышки ярости и необъяснимого везения у всех вокруг!'
  },
  lemurio: {
    name: 'lemurio',
    src: lemurio,
    label: 'Лемурио',
    info: 'Лемурио — загадочный странник из мира теней, который умеет исчезать в дымке, оставляя за собой шепот древних тайн и чувство, что он всегда на шаг впереди'
  },
  ukurish: {
    name: 'ukurish',
    src: ukurish,
    label: 'Укурыш',
    info: 'Укурыш — беззаботный хулиган, чья голова всегда в облаках, а в кармане найдётся что-то неожиданное: от конфет до планов захвата мира.'
  },
  svinkusya: {
    name: 'svinkusya',
    src: svinkusya,
    label: 'Свинкуся',
    info: 'Свинкуся — очаровательная бунтарка, которая сочетает в себе милоту и дерзость, умея хрюкнуть так, что это становится последним словом в любом споре.'
  },
  hachvin: {
    name: 'hachvin',
    src: hachvin,
    label: 'Хачвин',
    info: 'Хачвин — харизматичный гурман с душой авантюриста, который превращает любое блюдо в шедевр, а любую встречу — в незабываемое приключение.'
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

const ImgWrapper = styled.div`
    width: 280px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: gray;
`
const NameGamer = styled.div`
    font-size: 20px;
    text-align: center;
`

const RadioWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    align-content: center;
    cursor: pointer;
    justify-content: center;

    &:hover {
        ${ImgWrapper} {
            background-color: #4faf4f;
        }

        ${NameGamer} {
            color: #4faf4f;
        }
    }

    &.active {
        ${ImgWrapper} {
            background-color: #4faf4f;
        }

        ${NameGamer} {
            color: #4faf4f;
        }
    }
`


const ChouseWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 70px;
`

const ModalWrapper = styled.div`
    padding: 20px;
`

const GamerControl = styled.div``


const GamerComponent = (p: PropsGamer) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const id = React.useId()
  const [gender, setGender] = React.useState<Icons>('redEye');
  const [name, setName] = React.useState('');
  const numberGamer = p.index + 1;

  const currItem = IconsData1[gender]

  const onBlur = () => p.setGamer({name, gender, id})
  return (
    <>
      <GamerWrapper>
        <Card __size={"20"} shadow="sm" style={{cursor: "pointer"}} padding="lg" radius="md" withBorder>
          <Card.Section onClick={() => setIsOpen(true)}>
            <Image
              src={currItem.src}
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fz={28} fw={500}>{currItem.label}</Text>
          </Group>
          <GamerControl>
            <TextInput
              value={name}
              onBlur={onBlur}
              onChange={(e) => setName(e.currentTarget.value)}
              label="Хто ты?"
              placeholder={`Имя игрока ${numberGamer}`}/>
          </GamerControl>
          <Text mt="md" size="sm" c="dimmed">
            {currItem.info}
          </Text>

          <Button onClick={() => p.removeGamer(p.index)} color="blue" fullWidth mt="md" radius="md">
            Удалить игрока {numberGamer}
          </Button>
        </Card>
      </GamerWrapper>
      <Modal size={'100%'} style={{opacity: '1'}} opened={isOpen} onClose={() => setIsOpen(false)}>
        <ModalWrapper>
          <ChouseWrapper>
            {Object.values(IconsData1).map(x => {
              return (
                <RadioWrapper className={gender === x.name ? 'active' : undefined} onClick={() => setGender(x.name)}>
                  <ImgWrapper>
                    <img src={x.src} alt="red eye"/>
                  </ImgWrapper>
                  <NameGamer>
                    {x.label}
                  </NameGamer>
                </RadioWrapper>
              )
            })}
          </ChouseWrapper>
        </ModalWrapper>
      </Modal>
    </>
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
    padding: 30px;
    max-width: 80vw;
    margin: 0 auto;
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
    //display: grid;
    //grid-template-columns: 1fr 1fr;
    //grid-gap: 10px;
    //align-items: center;

`
const GamersFieldSetWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    
    gap: 40px;
`
const ActiveGamers = styled.div``
export const Game = () => {

  const [gamersCountArr, setGamersCount] = React.useState([1, 2]);
  const [activeGamers, setActiveGamers] = React.useState<Gamer[]>([]);

  const setActiveGamer = (gamer: Gamer) => setActiveGamers(prev => [...prev, gamer])

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
          <GamersFieldSetWrapper>
            {gamersCountArr.map((_, index) => <GamerComponent setGamer={setActiveGamer} key={index} index={index} removeGamer={removeGamer}/>)}
          </GamersFieldSetWrapper>
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

