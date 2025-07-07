import React from 'react';
import { v4 as uuid } from 'uuid';

interface Props {
  index: number;
  actividad: any;
  updateActividad: (id: string, field: string, value: any) => void;
  deleteActividad: (id: string) => void;
}

const tipos = ['Operativo', 'Administrativo', 'Profesional'];

const ActividadCard: React.FC<Props> = ({ index, actividad, updateActividad, deleteActividad }) => {
  return (
    <div className="border p-4 rounded-xl bg-white shadow-sm space-y-3 relative">
      <button
        type="button"
        className="absolute top-2 right-2 text-red-600"
        onClick={() => deleteActividad(actividad.id)}
        aria-label="Eliminar actividad"
      >
        ✕
      </button>

      <h3 className="font-semibold">Actividad #{index + 1}</h3>

      <input
        type="text"
        placeholder="Nombre"
        className="input input-bordered w-full"
        value={actividad.nombre}
        onChange={(e) => updateActividad(actividad.id, 'nombre', e.target.value)}
        required
      />

      <textarea
        placeholder="Descripción"
        className="textarea textarea-bordered w-full"
        value={actividad.descripcion}
        onChange={(e) => updateActividad(actividad.id, 'descripcion', e.target.value)}
      />

      <select
        className="select select-bordered w-full"
        value={actividad.tipoServicio}
        onChange={(e) => updateActividad(actividad.id, 'tipoServicio', e.target.value)}
      >
        {tipos.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-3 gap-2">
        <input
          type="number"
          min={1}
          max={60}
          className="input input-bordered"
          placeholder="Min x gestión"
          value={actividad.duracionMin}
          onChange={(e) => updateActividad(actividad.id, 'duracionMin', Number(e.target.value))}
          required
        />
        <input
          type="number"
          min={0}
          className="input input-bordered"
          placeholder="Veces/día"
          value={actividad.vecesPorDia}
          onChange={(e) => updateActividad(actividad.id, 'vecesPorDia', Number(e.target.value))}
        />
        <input
          type="number"
          min={0}
          max={7}
          className="input input-bordered"
          placeholder="Días/sem."
          value={actividad.diasPorSemana}
          onChange={(e) => updateActividad(actividad.id, 'diasPorSemana', Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ActividadCard;
