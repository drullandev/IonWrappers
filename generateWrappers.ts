import * as fs from 'fs-extra';

const components = [
  { "name": "Button", "parent": "IonButton", "interface": "ButtonInterface" },
  { "name": "Header", "parent": "IonHeader", "interface": "HeaderInterface" },
  { "name": "Footer", "parent": "IonFooter", "interface": "FooterInterface" },
  { "name": "Title", "parent": "IonTitle", "interface": "TitleInterface" },
  { "name": "Content", "parent": "IonContent", "interface": "ContentInterface" },
  { "name": "List", "parent": "IonList", "interface": "ListInterface" },
  { "name": "Item", "parent": "IonItem", "interface": "ItemInterface" },
  { "name": "Input", "parent": "IonInput", "interface": "InputInterface" },
  { "name": "Label", "parent": "IonLabel", "interface": "LabelInterface" },
  { "name": "Checkbox", "parent": "IonCheckbox", "interface": "CheckboxInterface" },
  { "name": "Radio", "parent": "IonRadio", "interface": "RadioInterface" },
  { "name": "Select", "parent": "IonSelect", "interface": "SelectInterface" },
  { "name": "Textarea", "parent": "IonTextarea", "interface": "TextareaInterface" },
  { "name": "Icon", "parent": "IonIcon", "interface": "IconInterface" },
  { "name": "Avatar", "parent": "IonAvatar", "interface": "AvatarInterface" },
  { "name": "Card", "parent": "IonCard", "interface": "CardInterface" },
  { "name": "Badge", "parent": "IonBadge", "interface": "BadgeInterface" },
  { "name": "TabBar", "parent": "IonTabBar", "interface": "TabBarInterface" },
  { "name": "TabButton", "parent": "IonTabButton", "interface": "TabButtonInterface" },
  { "name": "Segment", "parent": "IonSegment", "interface": "SegmentInterface" },
  { "name": "RouterOutlet", "parent": "IonRouterOutlet", "interface": "RouterOutletInterface" },
  { "name": "Menu", "parent": "IonMenu", "interface": "MenuInterface" },
  { "name": "Modal", "parent": "IonModal", "interface": "ModalInterface" },
  { "name": "Toast", "parent": "IonToast", "interface": "ToastInterface" },
  { "name": "Popover", "parent": "IonPopover", "interface": "PopoverInterface" },
  { "name": "Loading", "parent": "IonLoading", "interface": "LoadingInterface" },
  { "name": "Alert", "parent": "IonAlert", "interface": "AlertInterface" },
  { "name": "ActionSheet", "parent": "IonActionSheet", "interface": "ActionSheetInterface" },
  { "name": "ProgressBar", "parent": "IonProgressBar", "interface": "ProgressBarInterface" },
  { "name": "Spinner", "parent": "IonSpinner", "interface": "SpinnerInterface" }
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
