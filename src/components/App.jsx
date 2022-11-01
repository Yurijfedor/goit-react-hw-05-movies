import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
      </Routes>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    </>
  );
};
