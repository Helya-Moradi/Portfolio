declare module '*.css' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.sass' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';

declare module '*.jpg';

declare module '*.pdf';

declare module '*.svg';