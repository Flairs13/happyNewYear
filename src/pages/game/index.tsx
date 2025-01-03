import * as React from "react";
import styled from 'styled-components'
import redEyePng from '../../assets/redEye.png'
import lemurio from '../../assets/lemurio.png'
import ukurish from '../../assets/ukurish.png'
import svinkusya from '../../assets/svinkusya.png'
import hachvin from '../../assets/hachvin.png'
import belognet from '../../assets/belognet.png'
import burbundus from '../../assets/burbundus.png'
import klikhold from '../../assets/klikhold.png'
import morkul from '../../assets/morkul.png'
import shizoKisa from '../../assets/shizoKisa.png'
import unitazMen from '../../assets/unitazMen.png'
import {TextInput, Button, Modal, Card, Image, Text, Group} from '@mantine/core';
import {GameActive} from "./gameActive.tsx";


export type Icons = 'redEye' | 'lemurio' | 'ukurish' | 'svinkusya' | 'hachvin' | 'belognet' | 'burbundus' | 'klikhold' | 'morkul' | 'shizoKisa' | 'unitazMen'

export type GameStatus = 'active' | 'notActive' | 'finished'


export type IconsData = {
  [key in Icons]: {
    name: Icons;
    src: string;
    label: string;
    info?: string;
  }
}
export const IconsData1: IconsData = {
  redEye: {
    name: 'redEye',
    src: redEyePng,
    label: 'Красный Бабулек',
    info: 'Красный Бабулек — огненный проказник, чья энергия способна перевернуть мир с ног на голову, а хитрая улыбка всегда сулит нечто грандиозное и слегка опасное.'
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
    info: 'Хачвин — легендарный, харизматичный гурман, который провёл три года в заточении за эпическое преступление: бокал вина, случайно пролитый на священный диван, стал причиной его мрачной, но полной приключений истории.'
  },
  belognet: {
    name: 'belognet',
    src: belognet,
    label: 'Белогнёт',
    info: 'Белогнет — дух зимнего равнодушия и мастер пассивной агрессии. Его пустые глаза смотрят так, будто он уже пережил все возможные глупости мира, а треугольный нос указывает прямиком на ваши ошибки в жизни. Белогнет не говорит, он только тихо стоит, но его молчание настолько громкое, что заставляет сомневаться в собственном существовании.\n' +
      'Особенность: Белогнет ненавидит снежные бури не за холод, а за то, что они мешают его любимому хобби — стоять на одном месте и пугать случайных путников своим видом. Легенда гласит, что если подарить Белогнету шарфик, он молча исчезнет, оставив на снегу надпись: "Шарфик? Серьёзно?"'
  },
  burbundus: {
    name: 'burbundus',
    src: burbundus,
    label: 'Бурбундус',
    info: 'Бурбундус — мрачный лесной философ, который смотрит на всех так, будто уже разочарован. Его рога — его гордость, хотя он сам часто забывает, зачем они ему нужны, и использует их как стойку для сушёных грибов. Хрумбус невероятно серьёзен, но в душе — тот ещё балагур. Правда, его шутки обычно понимает только он сам, а окружающие лишь нервно смеются, боясь спровоцировать ещё один осуждающий взгляд.\n' +
      'Особенность: Грозится уйти жить в пещеру после каждой глупости, сказанной в его присутствии. Однажды так и сделал, но через час вернулся, потому что там было "слишком сыровато для размышлений о вечном".'
  },
  klikhold: {
    name: 'klikhold',
    src: klikhold,
    label: 'Клыкхольд',
    info: 'Клыкхольд — тихий ужас северных морей, который появляется там, где трещит лёд. Его бивни — не просто оружие, а напоминание о том, что любопытство иногда лучше оставить дома. Говорят, он использует свои клыки, чтобы вырезать на льду страшные символы, а потом спокойно наблюдает, как ничего не подозревающие путешественники пытаются разгадать их значение... и… смеется…\n' +
      'Он когда-то мечтал стать стоматологом, но после того, как случайно проткнул зубной щеткой своего единственного пациента, ушел в глубокую депрессию и еще более глубокие воды. Теперь он блуждает по ночам, выбивая дверные звонки своими бивнями (по чистой случайности) и оставляя рыбий запах в самых неожиданных местах.'
  },
  morkul: {
    name: 'morkul',
    src: morkul,
    label: 'Моркул',
    info: 'Моркул — пушистый философ с глазами, полными экзистенциальной тоски, владеет гипнозом. Внешне он выглядит как воплощение уюта, но за этой мягкой шерстью скрывается лесной маньяк, вернее, слегка мрачный взгляд на жизнь, назовем это так. Он — тот, кто может сказать: "Жизнь — это корзина с ягодами: в конце всегда окажется, что кто-то на неё сядет.'
  },
  shizoKisa: {
    name: 'shizoKisa',
    src: shizoKisa,
    label: 'Шизокиса',
    info: 'Шизокиса — питерская соблазнительница с открытой душой, которая из-за частых бессонных ночей перестала моргать, но это только добавляет её взгляду особой загадочности. Она — душа любой компании, всегда в центре внимания благодаря своей искренности и очарованию.'
  },
  unitazMen: {
    name: 'unitazMen',
    src: unitazMen,
    label: 'Унитазмен',
    info: 'Унитазмен — мелочный пакостник с зубастой ухмылкой и ядовитым чувством юмора. Его язык острее его клыков, а любимое занятие — красть чужую еду и спорить о смысле жизни. Если разозлить Грызла, он отомстит самым изощрённым способом, например, съест только середину вашей пиццы.\n' +
      'Особенность: Обожает блестящие вещи и искренне считает, что любой конфликт можно решить шипением и наглым взглядом'
  },


}


export type Gamer = {
  id: string;
  gender: Icons;
  name: string;
}

type PropsGamer = {
  index: number;
  removeGamer: (id: string) => void;
  setGamer: (gamer: Gamer) => void;
  gamer: Gamer
}

const ImgWrapper = styled.div`
    width: 280px;
    height: 260px;
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
  const [gender, setGender] = React.useState<Icons>(p.gamer.gender);
  const [name, setName] = React.useState('');
  const numberGamer = p.index + 1;

  const currItem = IconsData1[gender]

  const onBlur = () => p.setGamer({name, gender, id: p.gamer.id})
  return (
    <>
      <GamerWrapper>
        <Card shadow="sm" style={{cursor: "pointer"}} padding="lg" radius="xs" withBorder>
          <Card.Section onClick={() => setIsOpen(true)}>
            <Image
              src={currItem.src}
              height={25}
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
          <Button onClick={() => {
            p.removeGamer(p.gamer.id)
          }} color="blue" fullWidth mt="md" radius="md">
            Удалить игрока {numberGamer}
          </Button>
        </Card>
      </GamerWrapper>
      <Modal size={'100%'} style={{opacity: '1'}} opened={isOpen} onClose={() => setIsOpen(false)}>
        <ModalWrapper>
          <ChouseWrapper>
            {Object.values(IconsData1).map(x => {
              return (
                <RadioWrapper className={gender === x.name ? 'active' : undefined} onClick={() => {
                  setGender(x.name)
                  setIsOpen(false)
                  p.setGamer({name, gender: x.name, id: p.gamer.id})
                }}>
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


const ActiveGamerContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 3px solid gray;
`
const ActiveGamerWrapper = styled.div`
    border-right: 3px solid gray;
    border-bottom: 3px solid gray;
    position: relative;

    &.deletedGamer {
        background-color: #b34444;
    }
`
const ButtonWrapperOut = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`
const StartGame = styled.div`
    font-size: 70px;
    text-align: center;
    margin-top: 50px;
`
type PropsActiveGamers = {
  activeGamers: Gamer[];
  setNotActiveGamer: (gamer: Gamer) => void;
  deletedGamers: Record<string, Gamer>
  gameStatus: GameStatus
}
const ActiveGamersComponent = (p: PropsActiveGamers) => {

  const render = () => {
    if (p.activeGamers.length === 0) {
      return (
        <div>Нету Игроков</div>
      )
    }
    return p.activeGamers.map(gamer => {
      const isDeleted = p.deletedGamers[gamer.id];
      const currItem = IconsData1[gamer.gender]
      return (
        <ActiveGamerWrapper className={isDeleted ? 'deletedGamer' : undefined}>
          <Image
            src={currItem.src}
            height={25}
            alt={currItem.name}
          />
          <div>{gamer.name}</div>
          <div>{currItem.label}</div>
          <ButtonWrapperOut>
            <Button onClick={() => {
              if (p.gameStatus === 'notActive') return
              p.setNotActiveGamer(gamer)
            }} color={"#f4d03f"}>Удалить из игры</Button>
          </ButtonWrapperOut>
        </ActiveGamerWrapper>
      )
    })
  }

  return (
    <Container>
      {p.gameStatus === 'active' && <StartGame>Игра началась</StartGame>}
      <ActiveGamerContainer>
        {render()}
      </ActiveGamerContainer>
    </Container>
  )
}


const Container = styled.div`
    user-select: none;
    max-width: 80vw;
    margin: 0 auto;
    position: relative;
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
const ButtonStartGame = styled.div`
    position: fixed;
    right: 20px;
    top: 80px;
`
const GameBody = styled.div`
    position: relative;
`
export const Game = () => {

  const [gamersCountArr, setGamersCount] = React.useState<Record<string, Gamer>>({
    first: {name: '', id: 'first', gender: 'redEye'},
    two: {name: '', id: 'two', gender: 'lemurio'},
  });

  const [gameStatus, setGameStatus] = React.useState<GameStatus>('notActive');
  const [activeGamers, setActiveGamers] = React.useState<Record<string, Gamer>>({});
  const [deletedGamers, setDeletedGamers] = React.useState<Record<string, Gamer>>({});

  const continueGame = () => {
    setDeletedGamers({})
    setGameStatus('notActive')
  }

  const resetGifts = () => {
    localStorage.clear()
  }


  const setActiveGamer = (gamer: Gamer) => {
    setActiveGamers(prev => ({...prev, [gamer.id]: gamer}))
  }
  const setNotActiveGamer = (gamer: Gamer) => {
    setDeletedGamers(prev => ({...prev, [gamer.id]: gamer}))
  }

  const removeGamer = (id: string) => {
    if (Object.values(gamersCountArr).length === 1) return;
    // setGamersCount(prev => prev.slice(0, index).concat(prev.slice(index + 1)))
    setGamersCount(prev => {
      const newGamers = {...prev}
      delete newGamers[id]
      return newGamers
    })
    setActiveGamers(prev => {
      const newGamers = {...prev}
      delete newGamers[id]
      return newGamers
    })
  }


  const addGamer = () => {
    const id = Math.random().toString(16).slice(2)
    setGamersCount(prev => {
      return {...prev, [id]: {name: '', gender: 'redEye', id}}
    })
  }

  return (
    <Container>
      <GameBody>
        <GamersContainer>
          <InputsGamerWrapper>
            <Button color={"#ecb11a"} onClick={addGamer}>Добавить игрока</Button>
            <GamersFieldSetWrapper>
              {Object.values(gamersCountArr).map((gamer, index) =>
                <GamerComponent setGamer={setActiveGamer} index={index} key={gamer.id} gamer={gamer} removeGamer={removeGamer}/>)}
            </GamersFieldSetWrapper>
          </InputsGamerWrapper>
        </GamersContainer>
        <ActiveGamers>
          <ActiveGamersComponent
            gameStatus={gameStatus}
            setNotActiveGamer={setNotActiveGamer}
            activeGamers={Object.values(activeGamers)}
            deletedGamers={deletedGamers}
          />
        </ActiveGamers>
        {gameStatus === 'notActive' && (
          <ButtonStartGame onClick={() => setGameStatus('active')}>
            <Button>Начать игру!!!!!!!</Button>
          </ButtonStartGame>
        )}
        <GameActive
          setGameStatus={(x: GameStatus) => setGameStatus(x)}
          deletedGamers={deletedGamers}
          activeGamers={activeGamers}
          continueGame={continueGame}
          gameStatus={gameStatus}/>
      </GameBody>
      <Button onClick={resetGifts}>Сброс подарков</Button>
    </Container>
  );
};

