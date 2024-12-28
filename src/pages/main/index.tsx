import styled from 'styled-components'
import video from '../../assets/IMG_0049.mp4'

const Container = styled.div`
`
const Video = styled.video`
    width: 100%;
    height: 100%;
`
export const MainComponent = () => {

  return (
    <Container>
      <Video id="bannerVideo" muted autoPlay loop>
        <source src={video} type="video/mp4"/>
      </Video>
    </Container>
  );
};
