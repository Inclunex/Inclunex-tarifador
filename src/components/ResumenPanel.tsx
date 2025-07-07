import React from 'react';
import { useTarifaInclunex } from '../hooks/useTarifaInclunex';

const ResumenPanel: React.FC = () => {
  const { excesoHoras, horasMesTotal, tarifaFinal, tarifaMinRedondeada } =
    useTarifaInclunex();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-inclunexBlue">
        Resumen del proyecto
      </h2>

      <div className="space-y-2">
        <p>Horas mensuales por prestador: {horasMesTotal.toFixed(1)}</p>
        {excesoHoras && (
          <p className="text-red-600 font-medium">
            ⚠️ Exceso de {horasMesTotal.toFixed(1)} h &gt; 192 h. Sugerir más
            prestadores.
          </p>
        )}
        <p>Tarifa mínima Inclunex: $ {tarifaMinRedondeada.toLocaleString()}</p>
        <p className="text-lg font-bold">
          Tarifa final sugerida: $ {tarifaFinal.toLocaleString()}
        </p>
      </div>

      <button className="btn btn-primary w-full">Enviar cotización</button>
    </div>
  );
};

export default ResumenPanel;
