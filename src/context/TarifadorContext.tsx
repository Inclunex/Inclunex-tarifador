import React, { createContext, useContext, useState } from 'react';

interface Actividad {
  id: string;
  nombre: string;
  descripcion: string;
  tipoServicio: 'Operativo' | 'Administrativo' | 'Profesional';
  duracionMin: number;
  vecesPorDia: number;
  diasPorSemana: number;
}

interface ProyectoState {
  empresa: string;
  moneda: string;
  costoInternoMensualTop: number;
  prestadores: number;
  nombreProyecto: string;
  actividades: Actividad[];
}

interface TarifadorContextProps {
  proyecto: ProyectoState;
  setProyecto: React.Dispatch<React.SetStateAction<ProyectoState>>;
}

const defaultState: ProyectoState = {
  empresa: '',
  moneda: 'COP',
  costoInternoMensualTop: 0,
  prestadores: 1,
  nombreProyecto: '',
  actividades: [],
};

const TarifadorContext = createContext<TarifadorContextProps>({
  proyecto: defaultState,
  setProyecto: () => {},
});

export const TarifadorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [proyecto, setProyecto] = useState<ProyectoState>(defaultState);

  return (
    <TarifadorContext.Provider value={{ proyecto, setProyecto }}>
      {children}
    </TarifadorContext.Provider>
  );
};

export const useTarifador = () => useContext(TarifadorContext);
