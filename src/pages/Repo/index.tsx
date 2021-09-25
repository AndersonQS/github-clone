import React from 'react';

import { Link } from 'react-router-dom'

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        
        <Link className= {'username'} to = {'/AndersonQS'}>
          AndersonQS
      </Link>
      <span>/</span>
      <Link className= {'reponame'} to = {'/AndersonQS/github-clone'}>
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
          <span>forks 5</span>
        </li>
      </Stats>

      <LinkButton href = {'https://github.com/AndersonQS/github-clone'}>
      <GithubIcon />
      <span>View on Github </span>
      </LinkButton>
    </Container>
  );
}

export default Repo;