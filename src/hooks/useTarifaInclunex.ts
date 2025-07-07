import { useMemo } from 'react';
import { useTarifador } from '../context/TarifadorContext';
import { CONFIG } from '../data/config';

export const useTarifaInclunex = () => {
  const { proyecto } = useTarifador();

  return useMemo(() => {
    const { actividades, prestadores, costoInternoMensualTop } = proyecto;

    let horasMesTotal = 0;
    let costoMinMensualPrestador = 0;

    actividades.forEach((act) => {
      const horasActividadMes =
        (act.duracionMin / 60) * act.vecesPorDia * act.diasPorSemana * 4.33;

      horasMesTotal += horasActividadMes;
      costoMinMensualPrestador +=
        horasActividadMes * CONFIG.baseHoras[act.tipoServicio];
    });

    const excesoHoras = horasMesTotal * prestadores > CONFIG.horaMesMax;

    const tarifaMinConComision =
      costoMinMensualPrestador * (1 + CONFIG.comision);

    const redondear = (v: number) =>
      Math.ceil(v / CONFIG.redondeo) * CONFIG.redondeo;

    const tarifaMinRedondeada = redondear(tarifaMinConComision);

    let tarifaFinal = tarifaMinRedondeada;
    if (costoInternoMensualTop && costoInternoMensualTop > 0) {
      tarifaFinal = redondear(
        (tarifaMinRedondeada + costoInternoMensualTop) / 2,
      );
    }

    return {
      excesoHoras,
      horasMesTotal,
      tarifaMinRedondeada,
      tarifaFinal,
    };
  }, [proyecto]);
};
