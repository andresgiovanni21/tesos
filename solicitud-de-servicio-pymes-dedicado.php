<?php require "./config.php";  ?>
<!DOCTYPE html>
<!--  This site was created in Webflow. http://www.webflow.com  -->
<!--  Last Published: Mon Aug 12 2019 21:01:10 GMT+0000 (UTC)  -->
<html data-wf-page="5d51cd1c7c7c295acefa192e" data-wf-site="5aa96520526e430056d17001">

<head>
    <meta charset="utf-8">
    <title>Solicitud de Servicio Pymes Dedicado</title>
    <meta content="Soporte Técnico Para Cualquier Dispositivo Tecnológico. Servicio Particular y Empresarial. SOLICITE UN TESO AHORA" name="description">
    <meta content="Solicitud de Servicio Pymes Dedicado" property="og:title">
    <meta content="Soporte Técnico Para Cualquier Dispositivo Tecnológico. Servicio Particular y Empresarial. SOLICITE UN TESO AHORA" property="og:description">
    <meta content="summary" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Webflow" name="generator">
    <link href="css/normalize.css" rel="stylesheet" type="text/css">
    <link href="css/webflow.css" rel="stylesheet" type="text/css">
    <link href="css/tesosco.webflow.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>
    <script type="text/javascript">
        WebFont.load({
            google: {
                families: ["Roboto:300,regular,500", "Roboto Condensed:300,regular,700", "Roboto Slab:300,regular,700", "Arbutus Slab:regular"]
            }
        });

    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript" intergrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>



    <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
    <script type="text/javascript">
        ! function(o, c) {
            var n = c.documentElement,
                t = " w-mod-";
            n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
        }(window, document);

    </script>
    <link href="icons/favicon.png" rel="shortcut icon" type="image/x-icon">
    <link href="icons/webclip.png" rel="apple-touch-icon">
    <script type="text/javascript">
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-117380981-1', 'auto');
        ga('send', 'pageview');

    </script>
</head>

<body>
    <div data-collapse="none" data-animation="default" data-duration="400" class="navigation w-nav">
        <div class="w-container"><a href="index.html" class="link-block-2 w-inline-block"></a>
            <nav role="navigation" class="nav-menu w-nav-menu"><a href="ayuda.html" class="nav-link w-nav-link">Ayuda</a><a href="#" class="button-2 w-button">Chatea con nosotros</a></nav>
            <div class="nav-link menu w-nav-button">
                <div class="w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
    <div id="top" class="section main">
        <h2 class="heading">Solicitud de Cotización Tesos</h2>
        <p class="paragraph">Tus datos personales serán tratados de acuerdo a la ley 1581 de 2012 de tratamiento de datos personales.</p>
    </div>
    <div id="features" class="section _2 _3">
        <div class="w-container">
            <div class="section-subtitle _2 _3">Al seleccionar la opción de Cotizar en el formulario podrás descargar un PDF con tu cotización personalizada.</div>
            <div class="form-block w-form">



                <form id="wf-form-pymeDForm" name="wf-form-pymeDForm" data-name="pymeDForm" action="/enviar_correo_pd.php" method="post"><input type="text" class="text-field w-input r" maxlength="256" name="Nombre3" data-name="Nombre3" placeholder="Nombres y Apellidos*" id="Nombre-3" required=""><input type="text" class="text-field w-input r" maxlength="256" name="Cargo3" data-name="Cargo3" placeholder="Cargo*" id="Cargo" required=""><input type="text" class="text-field w-input r" maxlength="256" name="Empresa" data-name="Empresa3" placeholder="Empresa*" id="Empresa" required=""><input type="text" class="text-field w-input r" maxlength="256" name="Nit" data-name="Nit" placeholder="Nit*" id="Nit" required=""><input type="text" class="text-field w-input r" maxlength="256" name="Celular3" data-name="Celular3" placeholder="Número de teléfono celular*" id="Celular-3" required=""><input type="email" class="text-field w-input r" maxlength="256" name="Email3" data-name="Email3" placeholder="Correo electrónico*" id="Email-5" required=""><label class="w-checkbox checkbox-field"><input type="checkbox" id="Acepto1" name="Acepto3" data-name="Acepto3" checked="" class="w-checkbox-input"><span for="Acepto1" class="field-label w-form-label">Autorizo ser contactado por un representante de ventas.</span><input id="butCot" type="submit" value="Cotizar" data-wait="Espere por favor..." class="submit-button w-button">
                </form>
                <div class="w-form-done">
                    <div>Gracias! Su formulario ha sido recibido!</div>
                </div>
                <div class="w-form-fail">
                    <div>Oops! Algo salió mal, vuelva a intentarlo.</div>
                </div>
            </div>
        </div>
        <div class="div-block" data-ix="fade-in-on-scroll"></div>
    </div>
    <div class="section footer">
        <div class="container _2 w-container">
            <div class="row-2 w-row">
                <div class="w-col w-col-2">
                    <div class="div-block-6"></div>
                </div>
                <div class="w-col w-col-4">
                    <h4 class="footer-title">TESOS.CO</h4><a href="index.html" class="page-link in-footer">Inicio</a><a href="contactenos.html" class="page-link in-footer">Comunícate con nosotros</a><a href="ayuda.html" class="page-link in-footer">Preguntas frecuentes</a><a href="#" class="page-link in-footer">Modelo de servicio</a><a href="#" class="page-link in-footer">Codiciones y restricciones</a>
                </div>
                <div class="column-2 w-clearfix w-col w-col-6">
                    <div class="footer-slogan">Inscríbete para recibir noticias y ofertas especiales</div>
                    <div class="newsletter-form w-form">
                        <form id="wf-form-newsletter" name="wf-form-newsletter" data-name="Newsletter" class="form w-clearfix"><input type="email" id="email" name="email" data-name="Email" placeholder="Tu correo electrónico" maxlength="256" required="" class="newsletter-field w-input"><input type="submit" value="Suscríbete" data-wait="Espera..." wait="Wait..." class="newsletter-button w-button"></form>
                        <div class="success-message w-form-done">
                            <p class="paragraph-2">Gracias. Tu correo ha sido recibido!</p>
                        </div>
                        <div class="error-message w-form-fail">
                            <p class="paragraph-3">Oops! Algo sucedió. Inténtalo de nuevo más tarde :(</p>
                        </div>
                    </div>
                    <div class="social-icon-group"><a href="https://www.facebook.com/tesos.co" target="_blank" class="social-icon w-inline-block"><img src="images/facebook-icon.svg" alt=""></a><a href="https://twitter.com/TesosCo" target="_blank" class="social-icon w-inline-block"><img src="images/twitter-icon.svg" alt=""></a><a href="#" class="social-icon w-inline-block"><img src="images/linkdin-icon-white.svg" alt=""></a><a href="#" class="social-icon w-inline-block"><img src="images/twitter-icon.svg" alt=""></a></div>
                </div>
            </div>
            <div class="text-block">© 2017 Derechos Reservados a tesos.co. Una marca de TUiNNO.sas</div>
        </div>
    </div>
    <script>
        $("#butCot").click(function() {
            var isValid = true;
            $('.r').each(function() {

                if ($(this).val() === '') {

                    isValid = false;
                }
            });

            if (isValid) {

                //DBConnection
                <?php
                $varRow = 0;
                $readquery = "SELECT * FROM oferta";
                $fire = mysqli_query($con,$readquery) or die("cannot read data from database");

                if (mysqli_num_rows($fire) > 0) {
                    while($row = mysqli_fetch_assoc($fire)) {
                        $varRow=(int)$row['num'];
                    }
                } else {
                    echo "0 results";
                }
                $varRow++;
                $updatequery = "UPDATE oferta SET num=".$varRow;
                $fire2 = mysqli_query($con, $updatequery) or die("cannot read data from database");
                mysqli_close($con);
                ?>

                var ofertaD = "<?php echo $varRow ?>";

                dedicado($('#Empresa').val(), ofertaD, $('#Nombre-3').val(), $('#Cargo').val());

            }

        });

    </script>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="pdfGen.js" type="text/javascript"></script>
    <script src="js/webflow.js" type="text/javascript"></script>
    <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>

</html>
