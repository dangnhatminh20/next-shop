import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
            {/* <!-- icon--> */}
            <link rel="icon" href="images/core_img/favicon.ico"/>
            {/* <!-- Fonts--> */}
            <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Great+Vibes|Poppins|Prata&amp;display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&amp;display=swap" rel="stylesheet"/>
            {/* <!-- My css--> */}
            <link rel="stylesheet" type="text/css" media="screen" href="css/main.css"/>
            <link rel="stylesheet" type="text/css" media="screen" href="css/css_parts/topHeader.css"/>
            <link rel="stylesheet" type="text/css" media="screen" href="css/css_parts/mainMenu.css"/>
            <link rel="stylesheet" type="text/css" media="screen" href="css/css_parts/footer2.css"/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
