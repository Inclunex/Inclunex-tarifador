import React from 'react';
import ProyectoForm from '../components/ProyectoForm';
import ResumenPanel from '../components/ResumenPanel';
import { TarifadorProvider } from '../context/TarifadorContext';

const Calculadora: React.FC = () => {
  return (
    <TarifadorProvider>
      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProyectoForm />
        <ResumenPanel />
      </main>
    </TarifadorProvider>
  );
};

export default Calculadora;
