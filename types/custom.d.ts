declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    export default ReactComponent;
}

declare module '*.otf';
declare module '*.ttf';
declare module '*.woff';
declare module '*.woff2';