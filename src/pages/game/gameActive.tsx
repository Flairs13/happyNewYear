import styled from "styled-components";
import {Gamer, GameStatus, IconsData1} from "./index.tsx";
import {Button, Card, Group,Modal, Text} from "@mantine/core";
import * as React from "react";
import toporMeme from '../../assets/gifts/toporMeme.jpg'
import mishkaMeme from '../../assets/gifts/mishkaMeme.jpg'
import bookMeme from '../../assets/gifts/bookMeme.jpg'
import santaMeme from '../../assets/gifts/santaMeme.jpg'
import animeGirlMeme from '../../assets/gifts/animeGirlMeme.jpg'
import catMeme from '../../assets/gifts/catMeme.jpg'
import catOgon from '../../assets/gifts/catOgon.jpg'
import podstavkaDerevo from '../../assets/gifts/podstavkaDerevo.jpg'
import monkey from '../../assets/gifts/monkey.jpg'
import podstavkaJelezo from '../../assets/gifts/podstavkaJelezo.jpg'


const GiftsArr = [
  {
    name: 'toporMeme',
    icon: toporMeme,
  },
  {
    name: 'mishkaMeme',
    icon: mishkaMeme,
  },
  {
    name: 'bookMeme',
    icon: bookMeme,
  },
  {
    name: 'santaMeme',
    icon: santaMeme,
  },
  {
    name: 'animeGirlMeme',
    icon: animeGirlMeme,
  },
  {
    name: 'catMeme',
    icon: catMeme,
  },
  {
    name: 'catOgon',
    icon: catOgon,
  },
  {
    name: 'podstavkaDerevo',
    icon: podstavkaDerevo,
  },
  {
    name: 'monkey',
    icon: monkey,
  },
  {
    name: 'podstavkaJelezo',
    icon: podstavkaJelezo,
  },
]



function randomInteger(min: number, max: number) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
const getRandomItem = (arr: Array<{name: string, icon: string}>) => {
  const arrLength = arr.length;
  const randomIndex = randomInteger(0, arrLength - 1);
  return arr[randomIndex];
}

const TakeGiftContainer = styled.div`
    padding: 30px 20px;
`
const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Time = styled.div`
    font-size: 180px;
    margin: 0 10px;
    line-height: 1;
`
const TakeGift = (p: {arrGift: Array<{name: string, icon: string}>, setArrGift: (x:Array<{name: string, icon: string}> ) => void}) => {
  const [startTime, setStartTime] = React.useState(false);
  const [time, setTime] = React.useState(10);
  const [gift, setGift] = React.useState(false);

  const winnerGift = React.useRef<{name: string, icon: string}>(null);

  React.useEffect(() => {
    console.log(p.arrGift, 'SUKAAAAAA')
    const item = getRandomItem(p.arrGift)
    if (item && !gift){
      winnerGift.current = item
      const arrFiltered = p.arrGift.filter((x: {name: string, icon: string}) => x.name !== item.name)
      console.log(arrFiltered, item,'ah suka')
      p.setArrGift(arrFiltered);
      localStorage.setItem('GiftsArr', JSON.stringify(arrFiltered))
    }
  },[gift])


  const renderTime = () => {
    if (startTime) {
      return (
        <TimeContainer>
          <Time>{time}</Time>
        </TimeContainer>
      )
    }
  }

  const renderGift = () => {
    if (p.arrGift.length === 0) return <div>ПОДАРКИ ЗАКОНЧИЛИСЬ :(</div>

    if (winnerGift.current){
      return (
        <div>
          <ImgWrapper>
            <img src={winnerGift.current.icon} alt="#"/>
          </ImgWrapper>
        </div>
      )
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => setTime(prev => prev - 1), 1000)
    if (time === 0) {
      clearInterval(interval)
      setGift(true)
      setTime(10)
      setStartTime(false)
    }
    if (!startTime) clearInterval(interval)

    return () => clearInterval(interval)
  }, [startTime, time]);
  return (
    <TakeGiftContainer>
      {gift && renderGift()}
      {renderTime()}
      {!startTime && !gift && <Button onClick={() => setStartTime(true)} fullWidth>ЗАБРАТЬ ПОДАРОК!</Button>}
    </TakeGiftContainer>
  )
}


const ImgWrapper = styled.div`
    width: 500px;
    margin: 0 auto;
    height: 500px;

    & > img {
        width: 100%;
        height: 100%;
    }
`

const WinnerName = styled.div`
    font-size: 200px;
    text-align: center;
    line-height: 1;
`

type Props = {
  deletedGamers: Record<string, Gamer>,
  gameStatus: GameStatus,
  activeGamers: Record<string, Gamer>,
  setGameStatus: (x: GameStatus) => void,
  continueGame: () => void

}

const calcWinner = (active: Record<string, Gamer>, deleted: Record<string, Gamer>) => {
  const arrDeletedId = Object.keys(deleted);
  const winnerId = Object.keys(active).filter(x => !arrDeletedId.includes(x));
  if (winnerId.length === 1) {
    return active[winnerId[0]];
  }
}
export const GameActive = (p: Props) => {
  const winner = calcWinner(p.activeGamers, p.deletedGamers);


  const rednerWinner = () => {
    if (winner) {
      const currItem = IconsData1[winner.gender]
      return (
        <Card shadow="sm" style={{cursor: "pointer"}} padding="lg" radius="xs" withBorder>
          <Text style={{textAlign: 'center'}} fz={60} fw={500}>ПОБЕДИТЕЛЬ!!!</Text>
          <Card.Section>
            <ImgWrapper>
              <img src={currItem.src} alt="#"/>
            </ImgWrapper>
          </Card.Section>

          <WinnerName>{winner.name}</WinnerName>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fz={70} fw={500}>{currItem.label}</Text>
          </Group>
          <Text fz={20} mt="md" size="sm" c="dimmed">
            {currItem.info}
          </Text>
        </Card>
      )
    }
  }

  const [arrGift, setArrGift] = React.useState<Array<{name: string, icon: string}>>([])

  React.useEffect(() => {
    const giftArr = localStorage.getItem('GiftsArr') ? JSON.parse(localStorage.getItem('GiftsArr') as string) : []
    if (giftArr.length === 0){
      localStorage.setItem('GiftsArr', JSON.stringify(GiftsArr))
      setArrGift(GiftsArr)
    } else {
      setArrGift(giftArr);
    }
  }, [])


  React.useEffect(() => {
    if (winner && p.gameStatus === 'active') {
      p.setGameStatus('finished')
    }
  }, [winner])

  return (
    <div>
      <Modal size="100%" opened={p.gameStatus === 'finished'} onClose={() => p.setGameStatus('notActive')}>
        {rednerWinner()}
        <TakeGift setArrGift={(x) => setArrGift(x)} arrGift={arrGift}/>
        <Button onClick={() => {
          p.continueGame()
        }}>Продолжить Игру!</Button>
      </Modal>
    </div>
  );
};

