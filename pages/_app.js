import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  console.log('app comp');
  
  return (
    <>
      <Component {...pageProps} />
    </>
);
}
