import smallDog from './iconAnimal/small-dog.svg';
import mediumDog from './iconAnimal/medium-dog.svg';
import largeDog from './iconAnimal/large-dog.svg';
import cat from './iconAnimal/cat.svg';
import raccoon from './iconAnimal/raccoon.svg';
import notPredator from './iconAnimal/not-predator.svg';

import './AnimalComponent.scss';

const arrayAnimals = [
  {
    name: 'smallDog',
    icon: smallDog,
    title: 'Путешествую с маленьким псом',
  },
  {
    name: 'mediumDog',
    icon: mediumDog,
    title: 'Путешествую со средним псом',
  },
  {
    name: 'largeDog',
    icon: largeDog,
    title: 'Путешествую с большим псом',
  },
  {
    name: 'cat',
    icon: cat,
    title: 'Путешествую с котом',
  },
  {
    name: 'raccoon',
    icon: raccoon,
    title: 'Путешествую с енотом',
  },
  {
    name: 'notPredator',
    icon: notPredator,
    title: 'Путешествую с не хищным животным, меньше кота ',
  },
];

export const AnimalComponent = ({ animal }) => {
  const visibilityAnimal = arrayAnimals.find(item => item.name === animal);

  return (
    <div className="animal-component">
      <img className="animal-component__img" src={visibilityAnimal.icon} alt="ok" />
      <p className="animal-component__title">{visibilityAnimal.title}</p>
    </div>
  );
};
