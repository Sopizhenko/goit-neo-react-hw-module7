const fs = require('fs');
const path = require('path');

const createComponent = (componentName) => {
    // Define paths
    const componentDir = path.join(__dirname, componentName);
    const componentFile = path.join(componentDir, `${componentName}.jsx`);
    const cssFile = path.join(componentDir, `${componentName}.css`);

    // Check if component already exists
    if (fs.existsSync(componentDir)) {
        console.log(`Component "${componentName}" already exists.`);
        return;
    }

    // Create directory
    fs.mkdirSync(componentDir);

    // Create component file
    const componentContent = `
import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
    return (
        <div className="${componentName.toLowerCase()}">
            <h1>${componentName} Component</h1>
        </div>
    );
};

export default ${componentName};
`;
    fs.writeFileSync(componentFile, componentContent.trim());

    // Create CSS file
    const cssContent = `
.${componentName.toLowerCase()} {
    /* Add your styles here */
}
`;
    fs.writeFileSync(cssFile, cssContent.trim());

    console.log(`Component "${componentName}" created successfully!`);
};

// Example usage: pass the component name as a command-line argument
const componentName = process.argv[2];
if (!componentName) {
    console.log('Please provide a component name.');
    process.exit(1);
}

createComponent(componentName);
