import React from 'react';

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  // Wybierz trzy pierwsze elementy z tablicy parts
  const selectedParts = parts.slice(0, 3);

  return (
    <div>
      {selectedParts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
