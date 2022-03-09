import type { Component } from 'solid-js';
import { Menu } from '../Menu';

const Lunch: Component = () => {
  return (
    <main>
      <div class='flex flex-col gap-4 p-8'>
        <Menu title='Express Johanneberg' name='johanneberg-express'></Menu>
        <Menu title='Kårresturangen Johanneberg' name='karresturangen'></Menu>
        <Menu title='Hyllan' name='hyllan'></Menu>
        <Menu title='S.M.A.K' name='smak'></Menu>
        <Menu title='Linsen' name='linsen'></Menu>
      </div>
    </main>
  );
};

export default Lunch;
