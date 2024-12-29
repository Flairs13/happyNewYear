import styled from 'styled-components'
import video from '../../assets/Star_snow.mp4'

const Container = styled.div`
    height: 85vh;
    position: relative;
    z-index: 9;
`
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
