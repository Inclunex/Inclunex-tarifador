# Calculadora de Tarifas Inclunex

Calculadora client‑side para que los clientes de **Inclunex** simulen y definan de forma autónoma la tarifa mensual de sus proyectos de outsourcing.

## 👟 Arranque rápido

```bash
git clone <repo-url>
cd inclunex-tarifador
npm install
npm run dev
```

## 🛠️ Stack

- **React 18 + TypeScript + Vite**
- **TailwindCSS** (paleta Inclunex)
- **jsPDF** para exportar resumen
- **dayjs** para timestamps

## 📂 Estructura

Revisa la carpeta `src/` – allí encontrarás componentes, hooks, contexto y configuración.

## ✨ Pendiente

- Implementar `ExportadorPDF`
- Panel `/admin` para editar tarifas
- Tests Playwright
