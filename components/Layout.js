//import Link from 'next/link'
import Head from 'next/head'
import Nav from './Navigation'
import Footer from './Footer'
import React from 'react'

const Layout = ({children, title='Alex Do'}) => (
    <div>
        <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
        />
        </Head>
        
        <Nav />
        {children}
        {/* <Footer /> */}
        
        <style jsx global>{`
            body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                  sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                height: 100%;
              }
              
              code {
                font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
                  monospace;
              }
        `}</style>
    </div>
)

export default Layout