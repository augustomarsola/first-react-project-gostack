import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#a">
          <img
            src="https://avatars2.githubusercontent.com/u/25964446?s=460&u=ca42b8bd0f3eb1452a75bd0d97b4b0f991e7dc22&v=4"
            alt="Avatar Augusto Marsola"
          />
          <div>
            <strong>augustomarsola.github.io</strong>
            <p>
              Site para apresentação de projetos realizados por Augusto Marsola
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#a">
          <img
            src="https://avatars2.githubusercontent.com/u/25964446?s=460&u=ca42b8bd0f3eb1452a75bd0d97b4b0f991e7dc22&v=4"
            alt="Avatar Augusto Marsola"
          />
          <div>
            <strong>augustomarsola.github.io</strong>
            <p>
              Site para apresentação de projetos realizados por Augusto Marsola
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#a">
          <img
            src="https://avatars2.githubusercontent.com/u/25964446?s=460&u=ca42b8bd0f3eb1452a75bd0d97b4b0f991e7dc22&v=4"
            alt="Avatar Augusto Marsola"
          />
          <div>
            <strong>augustomarsola.github.io</strong>
            <p>
              Site para apresentação de projetos realizados por Augusto Marsola
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
