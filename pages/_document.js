import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';
import React from "react";

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();
        const sheets = new ServerStyleSheets();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage(App => props => sheet.collectStyles(sheets.collect(<App {...props} />)));

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();
        const stylesTags = sheets.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return {...page, styleTags, stylesTags};
    }

    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>Next BigIt</title>
                {/* Step 5: Output the styles in the head  */}
                {this.props.styleTags}
                {this.props.stylesTags}

            </Head>
            <body style={{ margin: 0, padding: 0, boxSizing: 'border-box'}}>
                <Main />
                <NextScript />
            </body>
            </html>
        );
    }
}