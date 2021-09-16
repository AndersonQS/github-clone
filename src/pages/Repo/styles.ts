import styled, {css} from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork} from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  >p {
    font-size:16px;

  }

`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;
  }



`

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)``

export const Stats = styled.div``

export const StarIcon = styled(RiStarLine)``

export const ForkIcon = styled(AiOutlineFork)``

export const LinkButton = styled.a``

export const GithubIcon = styled(FaGithub)``

