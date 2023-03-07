import {useState} from 'react'

import {Container, Image, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onClickLock = () => {
    setLock(prev => !prev)
  }

  return (
    <Container>
      <Image
        src={
          lock
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={lock ? 'lock' : 'unlock'}
      />
      <Heading>Your Device is {lock ? 'Locked' : 'Unlocked'}</Heading>
      <Button type="button" onClick={onClickLock}>
        {lock ? 'Unlock' : 'Lock'}
      </Button>
    </Container>
  )
}

export default Unlock
