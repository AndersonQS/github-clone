import React from 'react';

import {Link} from 'react-router-dom'

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb   >
        <RepoIcon />
        
        <Link className= {'username'} to = {'/AdnersonQS'}>
          AndersonQS
      </Link>
      <span></span>
      <Link className= {'reponame'} to = {'/AdnersonQS/github-clone'}>
          github-clone
      </Link>
      </Breadcrumb>

      <p>Clone do github pela rocketseat</p>

      <Stats>
        <li>
          <StarIcon/>
          <b>3</b>
          <span>Stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href = {'https://github.com/AndersonQS/github-clone'}></LinkButton>
      <GithubIcon />
      <span>View on Github </span>
    </Container>
  );
}

export default Repo;