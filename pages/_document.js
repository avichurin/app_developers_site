import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta property="og:url" content="https://wellplexx.com" />
                    <meta property="og:title" content="Wellplexx" />
                    <meta property="og:description" content="Digital agency. Design, websites, mobile applications" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://wellplexx.com/static/images/preview.png" />

                    <title>Wellplexx</title>
                    <link
                        rel="icon"
                        type="image/png"
                        href="../static/images/favicon.ico"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(){ var widget_id = 'f9UALO7qal';var d=document;var w=window;function l(){
                                    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
                                    s.src = '//code.jivosite.com/script/widget/'+widget_id
                                        ; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}
                                    if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}
                                    else{w.addEventListener('load',l,false);}}})();
                            `
                        }}
                    />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                            
                                ym(53785375, "init", {
                                    clickmap:true,
                                    trackLinks:true,
                                    accurateTrackBounce:true,
                                    webvisor:true
                                });
                            `
                        }}
                    />
                    <noscript>
                        <div>
                            <img
                                src="https://mc.yandex.ru/watch/53785375"
                                style={{
                                    position: "absolute",
                                    left: "-9999px"
                                }}
                                alt=""
                            />
                        </div>
                    </noscript>

                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-140787317-1"
                    />
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'UA-140787317-1');
                            `
                        }}
                    />
                </body>
            </html>
        );
    }
}

export default MyDocument;
