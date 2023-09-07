import * as fs from 'fs-extra';

const components = [
  // Aquí coloca la lista completa de componentes con name y parent
];

// Ruta donde se generarán las carpetas y archivos
const outputDirectory = './output';

// Función para generar una carpeta y su contenido
const generateComponentFolder = (component) => {
  const componentName = component.name;
  const folderPath = `${outputDirectory}/${componentName}`;
  const typesFilePath = `${folderPath}/types.ts`;
  const indexFilePath = `${folderPath}/index.ts`;

  // Crear la carpeta
  fs.ensureDirSync(folderPath);

  // Crear el archivo types.ts
  const extendedInterface = `import { ${component.interface} } from '${component.parent}';

// Aquí extiende la interfaz como necesites
export interface Extended${componentName} extends ${component.interface} {
  // Agrega tus extensiones aquí
}
`;

  fs.writeFileSync(typesFilePath, extendedInterface);

  // Crear el archivo index.ts
  const indexContent = `export * from './types';

// Exporta el componente original
export { ${component.parent} } from '${component.parent}';
`;

  fs.writeFileSync(indexFilePath, indexContent);
};

// Crear las carpetas y archivos
components.forEach(generateComponentFolder);

console.log('Carpetas y archivos generados con éxito.');
