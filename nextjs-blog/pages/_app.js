//We can add global CSS style like this
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}