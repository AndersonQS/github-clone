import React from 'react';

import { Container, Main, LeftSide, RigthSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide></LeftSide>
          <ProfileData
          username={'AndersonQS'}
          name = {'Anderson Queiroz'}
          avatarUrl = {'https://avatars.githubusercontent.com/u/21376261?v=4'}
          followers = {5}
          following = {7}
          company = {'Anderson'}
          location = {'Aracati, Brazil'}
          email={'andersonaracati14@gmail.com'}
          blog = {'linkedin.com/in/'}

          />
        <RigthSide></RigthSide>

      </Main>
    </Container>
  );
}

export default Profile;