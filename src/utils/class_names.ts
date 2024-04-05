function cls(...classNames: (string | null)[]) {
    return classNames.filter(Boolean).join(' ');
}

export default cls;