// This file provides TypeScript module declarations for importing image files.
// It allows you to import images (png, jpg, jpeg, gif, svg) as modules in your TypeScript code.

// Declare module for PNG files
declare module "*.png" {
    const value: any; // The imported PNG will have type 'any'
    export default value;
}

// Declare module for JPG files
declare module "*.jpg" {
    const value: any; // The imported JPG will have type 'any'
    export default value;
}

// Declare module for JPEG files
declare module "*.jpeg" {
    const value: any; // The imported JPEG will have type 'any'
    export default value;
}

// Declare module for GIF files
declare module "*.gif" {
    const value: any; // The imported GIF will have type 'any'
    export default value;
}

// Declare module for SVG files
declare module "*.svg" {
    const value: any; // The imported SVG will have type 'any'
    export default value;
}