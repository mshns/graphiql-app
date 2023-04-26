export const withStore = (component: () => React.ReactNode) => () => <>{component()}</>;
