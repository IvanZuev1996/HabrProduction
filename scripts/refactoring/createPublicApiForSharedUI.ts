import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isSharedUi(value: string) {
    return value.startsWith('@/shared/ui');
}

const sharedPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(sharedPath);
const componentDirs = sharedUiDirectory?.getDirectories();

componentDirs?.forEach((directory) => {
    const folderName = directory.getPath();
    const indexFilePath = `${folderName}/index.ts`;
    const isIndexFileExist = directory.getSourceFile(indexFilePath);

    if (isIndexFileExist && folderName.includes('Text')) {
        const filesInFolder = directory.getSourceFiles([
            '**/*.tsx',
            '!**/*.test.*',
            '!**/*.stories.*'
        ]);

        let sourceCodeInIndexFile = '';

        filesInFolder.forEach((component) => {
            const fileLength = folderName.length;
            const fileName = component.getBaseNameWithoutExtension();
            const filePath = component.getFilePath().slice(fileLength, -4);

            const enumsNames = component
                .getEnums()
                .map((EnumDeclaration) => EnumDeclaration.getName())
                .join(', ');

            if (enumsNames) {
                sourceCodeInIndexFile += `export { ${fileName}, ${enumsNames} } from '.${filePath}';`;
            } else {
                sourceCodeInIndexFile += `export { ${fileName} } from '.${filePath}';`;
            }
        });

        const file = directory.createSourceFile(
            indexFilePath,
            sourceCodeInIndexFile,
            { overwrite: true }
        );

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const uiName = value.split('/')[3];

        if (isSharedUi(value)) {
            importDeclaration.setModuleSpecifier(`@/shared/ui/${uiName}`);
        }
    });
});

project
    .save()
    .then(() => console.log('all index.ts files is created successfully'));
