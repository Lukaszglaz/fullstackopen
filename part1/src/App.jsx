const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.name}>
          {part.name} - {part.exercises} exercises
        </p>
      ))}
      <p>
        Total number of exercises:{' '}
        {course.parts.reduce((total, part) => total + part.exercises, 0)}
      </p>
    </div>
  );
};

export default App;
