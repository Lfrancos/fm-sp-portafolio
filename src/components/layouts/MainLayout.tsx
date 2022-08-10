import { FC, ReactElement } from "react"
import Head from "next/head"
import NavBar from './../ui/NavBar';
import Footer from "../ui/Footer";

interface Props {
    title: string;
    children: JSX.Element;
}

export const MainLayout: FC<Props> = ({title, children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <NavBar />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}
