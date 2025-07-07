import React from 'react';
import { v4 as uuid } from 'uuid';
import { useTarifador } from '../context/TarifadorContext';
import ActividadCard from './ActividadCard';

const ProyectoForm: React.FC = () => {
  const { proyecto, setProyecto } = useTarifador();

  const updateActividad = (id: string, field: string, value: any) => {
    setProyecto((prev) => ({
      ...prev,
      actividades: prev.actividades.map((a) =>
        a.id === id ? { ...a, [field]: value } : a,
      ),
    }));
  };

  const deleteActividad = (id: string) => {
    setProyecto((prev) => ({
      ...prev,
      actividades: prev.actividades.filter((a) => a.id !== id),
    }));
  };

  const addActividad = () => {
    setProyecto((prev) => ({
      ...prev,
      actividades: [
        ...prev.actividades,
        {
          id: uuid(),
          nombre: '',
          descripcion: '',
          tipoServicio: 'Operativo',
          duracionMin: 10,
          vecesPorDia: 1,
          diasPorSemana: 5,
        },
      ],
    }));
  };

  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <label className="block font-medium">Nombre del proyecto</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={proyecto.nombreProyecto}
          onChange={(e) =>
            setProyecto((p) => ({ ...p, nombreProyecto: e.target.value }))
          }
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Nombre de la empresa</label>
        <input
          type="text"
          className="input input-bordered w-full"
          value={proyecto.empresa}
          onChange={(e) =>
            setProyecto((p) => ({ ...p, empresa: e.target.value }))
          }
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Prestadores requeridos</label>
          <input
            type="number"
            min={1}
            className="input input-bordered w-full"
            value={proyecto.prestadores}
            onChange={(e) =>
              setProyecto((p) => ({
                ...p,
                prestadores: Number(e.target.value),
              }))
            }
            required
          />
        </div>
        <div>
          <label className="block font-medium">Top interno (COP)</label>
          <input
            type="number"
            min={0}
            className="input input-bordered w-full"
            value={proyecto.costoInternoMensualTop}
            onChange={(e) =>
              setProyecto((p) => ({
                ...p,
                costoInternoMensualTop: Number(e.target.value),
              }))
            }
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Actividades</h2>
        {proyecto.actividades.map((act, idx) => (
          <ActividadCard
            key={act.id}
            index={idx}
            actividad={act}
            updateActividad={updateActividad}
            deleteActividad={deleteActividad}
          />
        ))}

        <button
          type="button"
          className="btn btn-outline"
          onClick={addActividad}
        >
          + Añadir actividad
        </button>
      </div>
    </form>
  );
};

export default ProyectoForm;
