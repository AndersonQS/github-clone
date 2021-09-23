import React, {useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading,RepoIcon, Tab} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { APIUser } from '../../@types';

interface Data{
  user?: APIUser;
}

const Profile: React.FC = () => {
  const {username = 'AndersonQS'} = useParams();

  useEffect(() => {
    Promise.all([
      // fetch(`https://api.github.com/users/${username}`),
      // fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (response) => {

    });
  }, [username]);


  const TabContent  = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">11</span>
    </div>
  )
  return (
    <Container>

      <Tab className = "desktop">
        <div className="wrapper">
          <span className="offset"></span>
        <TabContent />
        </div>
        <span className="liine" />

      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
          username={'AndersonQS'}
          name = {'Anderson Queiroz da Silva'}
          avatarUrl = {'https://avatars.githubusercontent.com/u/21376261?v=4'}
          followers = {5}
          following = {7}
          company = {'Anderson'}
          location = {'Aracati, Brazil'}
          email={'andersonaracati14@gmail.com'}
          blog = {'linkedin.com/in/'}

          />
          </LeftSide>

        <RightSide>
          <Tab className = "mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>
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

          <CalendarHeading>
            Random calendar(do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>

      </Main>
    </Container>
  );
}

export default Profile;