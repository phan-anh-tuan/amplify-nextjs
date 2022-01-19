// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Image from "next/image";
import gorillaPic from "../public/gorilla.jpg";

export default function Home() {
  return (
    <>
      <h1>Welcome to my homepage!</h1>
      <Image
        src={gorillaPic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </>
  );
}
