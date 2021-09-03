import React from 'react';

import { Container, Main, LeftSide, RigthSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
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
          </LeftSide>

        <RigthSide>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1,2,3,4,5,6,].map(n => (
                <RepoCard 
                key = {n}
                username = {'AndersonQS'}
                reponame = {'github-clone'}
                description = {'colone do git hub'}
                language = {n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                stars = {2}
                forks = {4}
                />
              ) )}
            </div>
          </Repos>
        </RigthSide>

      </Main>
    </Container>
  );
}

export default Profile;