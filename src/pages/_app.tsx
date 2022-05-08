import 'styles/global.css';

interface Props {
  Component: React.ComponentType;
  pageProps: any;
}

function App({ Component, pageProps }: Props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default App;
