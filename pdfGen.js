function dedicado(compania, oferta, contacto, cargo) {
    //tamaño de la primera imagen
    var tesos_img_w_h = 60;
    //tamaño de la pagina del pdf
    var docFormat = 'a4';
    var docWidth = 0;
    var docHeight = 0;

    var myImage = new Image(tesos_img_w_h, tesos_img_w_h);
    myImage.src = "./images/tesosICO2-04.png";

    var myImage4 = new Image();
    myImage4.src = "./images/header.png";




    if (docFormat == 'a4') {
        //medidas de la pagina del pdf en mm
        docWidth = 210;
        docHeight = 297;
    }

    //crear documento
    var doc = jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: docFormat,
        putOnlyUsedFonts: true
    });
    //primera imagen tesos
    var paddCount = 40; //padding Inicial

    doc.addImage(myImage, "PNG", parseInt((docWidth / 2) - (tesos_img_w_h / 2)), paddCount, tesos_img_w_h, tesos_img_w_h, "TOP");

    //primer texto
    doc.setTextColor(100);
    doc.setFontSize(9);
    doc.setFont("calibri", "italic");
    //actualiza paddCount
    paddCount = paddCount + tesos_img_w_h + 6;
    doc.text("TESOS.CO® es una marca de Grupo TUiNNO.SAS", docWidth / 2, paddCount, "center");

    //rectangulo azul
    paddCount = paddCount + 6;
    doc.setFillColor(100, 149, 237);
    doc.roundedRect(parseInt(docWidth / 2 - 60), paddCount, 120, 36, 5, 5, "F");

    doc.setTextColor(255);
    doc.setFontSize(16);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 10;
    doc.text("PROPUESTA COMERCIAL", docWidth / 2, paddCount, "center");

    doc.setFont("calibri", "bold");
    paddCount = paddCount + 10;
    doc.text("Servicios de soporte de tecnología", docWidth / 2, paddCount, "center");

    paddCount = paddCount + 10;
    doc.text("TESO Dedicado", docWidth / 2, paddCount, "center");

    //para:
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 20;
    doc.text("PARA:", docWidth / 2, paddCount, "center");

    doc.setFontSize(16);
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 12;
    doc.text(compania, docWidth / 2, paddCount, "center");

    //oferta
    doc.setFontSize(14);
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 20;
    doc.text("Oferta #" + oferta, docWidth - 30, paddCount, "right");

    paddCount = paddCount + 8;
    var d = new Date();
    doc.text(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), docWidth - 30, paddCount, "right");

    //2 pagina
    doc.addPage('a4', 'p');
    //header

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);

    //membrete
    doc.setFontSize(12);
    doc.setFont("calibri", "regular");
    paddCount = 50;
    doc.text("Bogotá, DC. " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), 30, paddCount, "left");

    paddCount = paddCount + 15;
    doc.text("Señores:", 30, paddCount, "left");
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 6;
    doc.text(compania, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Atte.: " + contacto, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "bold");
    doc.text(cargo, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Ciudad", 30, paddCount, "left");

    paddCount = paddCount + 9;
    doc.text("Ref.: " + oferta + "-TESO dedicado", docWidth - 30, paddCount, "right");
    paddCount = paddCount + 10;

    //texto
    var estimados;
    var terminos;
    var quienes;
    var descripcion;
    var niveles;
    var para;
    var costos;
    var tecnico;
    var niveles2;
    var costos2;
    var supuestos;
    var condiciones;

    $.ajax({
        async: false,
        type: "GET",
        url: 'plan_dedicado.html',
        success: function (data) {
            var ele = $(data);
            console.log(ele);
            //cambiar valores
            var cliente = $(ele).find("#cliente");
            cliente.get(0).textContent = compania;
            cliente.get(1).textContent = compania;
            cliente.get(2).textContent = compania;
            cliente.get(3).textContent = compania;
            cliente.get(4).textContent = compania;
            cliente.get(5).textContent = compania;
            cliente.get(6).textContent = compania;
            cliente.get(7).textContent = compania;
            //console.log(cliente);

            //crear variables con el html
            estimados = ele.get(9).innerHTML;
            terminos = ele.get(11).innerHTML;
            quienes = ele.get(13).innerHTML;
            descripcion = ele.get(15).innerHTML;
            //tabla1 = ele.get(17).innerHTML;
            niveles = ele.get(19).innerHTML;
            para = ele.get(21).innerHTML;
            costos = ele.get(23).innerHTML;
            tecnico = ele.get(25).innerHTML;
            niveles2 = ele.get(27).innerHTML;
            costos2 = ele.get(29).innerHTML;
            supuestos = ele.get(31).innerHTML;
            condiciones = ele.get(33).innerHTML;



        }
    });

    doc.fromHTML(estimados, 30, paddCount, {
        "width": 150
    });

    //imagen firma
    var myImage2 = new Image(38, 18);
    myImage2.src = "./images/grupoTuinno.jpg";

    paddCount = paddCount + 120;

    doc.addImage(myImage2, "JPG", 25, paddCount, 38, 18);

    doc.setFontSize(10);
    doc.setFont("calibri", "bold");
    doc.text("Representante Comercial", 67, paddCount + 7, "left");
    doc.text("coordinador@tesos.co", 67, paddCount + 11, "left");


    // tabla de contenido

    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 60;
    doc.setFontSize(14);
    doc.setFont("calibri", "bold");
    doc.text("TABLA DE CONTENIDO", docWidth / 2, paddCount, "center");
    doc.setFontSize(10);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 20;
    doc.text("1. TÉRMINOS DE CONFIDENCIALIDAD____________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("2. QUIENES SOMOS______________________________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("3. DESCRIPCIÓN DE NUESTRO SERVICIO__________________________________________5", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("3..1	Técnico de soporte en campo TESO Dedicado para la plataforma de PCs e impresoras____5", 30, paddCount, {
        "align": "left",
        "width": 150
    });
    paddCount = paddCount + 8;
    doc.text("3..2	Técnico de soporte en campo, TESO dedicado para la plataforma de PCS, impresoras, \n" +
        "              redes y/o servidores_________________________________________________________7", 30, paddCount, "left");
    paddCount = paddCount + 11;
    doc.text("3..3         SUPUESTOS_____________________________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("4. CONDICIONES COMERCIALES__________________________________________________4", 30, paddCount, "left");

    //4 pagina
    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 50;

    //terminos
    doc.fromHTML(terminos, 30, paddCount, {
        "width": 155
    });
    //quienes
    paddCount = paddCount + 65;
    doc.fromHTML(quienes, 30, paddCount, {
        "width": 155
    });

    //Slogan
    paddCount = paddCount + 125;
    doc.setFontSize(12);
    doc.setFont("calibri", "bold");
    doc.text("“En TESOS.CO® estamos convencidos que la tecnología no tiene por qué ser un problema para nuestros Clientes”", parseInt((docWidth / 2)), paddCount, {
        "align": "center",
        "maxWidth": 110
    });


    //5 pagina
    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);

    paddCount = 40;
    doc.fromHTML(descripcion, 30, paddCount, {
        "width": 155
    });

    //tabla1
    paddCount = 100;
    var tabla1 = new Image();
    tabla1.src = "./images/tabla1.PNG";
    doc.addImage(tabla1, "PNG", parseInt((docWidth / 2) - 65), 140, 130, 100);


    //6 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;
    doc.fromHTML(niveles, 30, paddCount, {
        "width": 155
    });
    //tabla2
    var tabla2 = new Image();
    tabla2.src = "./images/tabla2.PNG";
    paddCount = paddCount + 40;
    doc.addImage(tabla2, "PNG", parseInt((docWidth / 2) - 70), paddCount, 140, 55);
    paddCount = paddCount + 65;

    doc.fromHTML(para, 30, paddCount, {
        "width": 150
    });
    //costos1
    paddCount = paddCount + 20;
    doc.fromHTML(costos, 30, paddCount, {
        "width": 150
    });
    //tabla3
    var tabla3 = new Image();
    tabla3.src = "./images/tabla3.PNG";
    paddCount = paddCount + 25;
    doc.addImage(tabla3, "PNG", parseInt((docWidth / 2) - 70), paddCount, 140, 55);



    //7 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;
    //tecnico
    doc.fromHTML(tecnico, 30, paddCount, {
        "width": 155
    });
    //tabla4
    var tabla4 = new Image();
    tabla4.src = "./images/tabla4.PNG";
    paddCount = paddCount + 70;
    doc.addImage(tabla4, "PNG", parseInt((docWidth / 2) - 55), paddCount, 110, 150);


    //8 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;
    //niveles1
    doc.fromHTML(niveles2, 30, paddCount, {
        "width": 155
    });
    //tabla5
    var tabla5 = new Image();
    tabla5.src = "./images/tabla5.PNG";
    paddCount = paddCount + 40;
    doc.addImage(tabla5, "PNG", parseInt((docWidth / 2) - 72), paddCount, 145, 60);
    //para
    paddCount = paddCount + 70;
    doc.fromHTML(para, 30, paddCount, {
        "width": 150
    });


    //9 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;

    //costos2
    doc.fromHTML(costos2, 30, paddCount, {
        "width": 155
    });
    //tabla6
    paddCount = paddCount + 20;
    var tabla6 = new Image();
    tabla6.src = "./images/tabla6.PNG";
    doc.addImage(tabla6, "PNG", parseInt((docWidth / 2) - 60), paddCount, 120, 45);

    //supuestos
    paddCount = paddCount + 50;
    doc.fromHTML(supuestos, 30, paddCount, {
        "width": 150
    });

    //10 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;
    doc.fromHTML(condiciones, 30, paddCount, {
        "width": 130
    });


    doc.save("DOWN.pdf");
}

function compartido(compania, oferta, contacto, cargo) {
    //tamaño de la primera imagen
    var tesos_img_w_h = 60;
    //tamaño de la pagina del pdf
    var docFormat = 'a4';
    var docWidth = 0;
    var docHeight = 0;

    var myImage = new Image(tesos_img_w_h, tesos_img_w_h);
    myImage.src = "./images/tesosICO2-04.png";

    var myImage4 = new Image();
    myImage4.src = "./images/header.png";




    if (docFormat == 'a4') {
        //medidas de la pagina del pdf en mm
        docWidth = 210;
        docHeight = 297;
    }

    //crear documento
    var doc = jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: docFormat,
        putOnlyUsedFonts: true
    });
    //primera imagen tesos
    var paddCount = 40; //padding Inicial

    doc.addImage(myImage, "PNG", parseInt((docWidth / 2) - (tesos_img_w_h / 2)), paddCount, tesos_img_w_h, tesos_img_w_h, "TOP");

    //primer texto
    doc.setTextColor(100);
    doc.setFontSize(9);
    doc.setFont("calibri", "italic");
    //actualiza paddCount
    paddCount = paddCount + tesos_img_w_h + 6;
    doc.text("TESOS.CO® es una marca de Grupo TUiNNO.SAS", docWidth / 2, paddCount, "center");

    //rectangulo azul
    paddCount = paddCount + 6;
    doc.setFillColor(100, 149, 237);
    doc.roundedRect(parseInt(docWidth / 2 - 60), paddCount, 120, 36, 5, 5, "F");

    doc.setTextColor(255);
    doc.setFontSize(16);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 10;
    doc.text("PROPUESTA COMERCIAL", docWidth / 2, paddCount, "center");

    doc.setFont("calibri", "bold");
    paddCount = paddCount + 10;
    doc.text("Servicios de soporte de tecnología", docWidth / 2, paddCount, "center");

    paddCount = paddCount + 10;
    doc.text("TESO Compartido", docWidth / 2, paddCount, "center");

    //para:
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 20;
    doc.text("PARA:", docWidth / 2, paddCount, "center");

    doc.setFontSize(16);
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 12;
    doc.text(compania, docWidth / 2, paddCount, "center");

    //oferta
    doc.setFontSize(14);
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 20;
    doc.text("Oferta #" + oferta, docWidth - 30, paddCount, "right");

    paddCount = paddCount + 8;
    var d = new Date();
    doc.text(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), docWidth - 30, paddCount, "right");

    //2 pagina
    doc.addPage('a4', 'p');
    //header

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);

    //membrete
    doc.setFontSize(12);
    doc.setFont("calibri", "regular");
    paddCount = 50;
    doc.text("Bogotá, DC. " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), 30, paddCount, "left");

    paddCount = paddCount + 15;
    doc.text("Señores:", 30, paddCount, "left");
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 6;
    doc.text(compania, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Atte.: " + contacto, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "bold");
    doc.text(cargo, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Ciudad", 30, paddCount, "left");

    paddCount = paddCount + 9;
    doc.text("Ref.: " + oferta + "-TESO compartido", docWidth - 30, paddCount, "right");
    paddCount = paddCount + 10;

    //texto
    var estimados;
    var terminos;
    var quienes;
    var descripcion;
    var niveles;
    var para;
    var costos;
    var tecnico;
    var niveles2;
    var costos2;
    var supuestos;
    var condiciones;

    $.ajax({
        async: false,
        type: "GET",
        url: 'plan_compartido.html',
        success: function (data) {
            var ele = $(data);
            console.log(ele);
            //cambiar valores
            var cliente = $(ele).find("#cliente");
            cliente.get(0).textContent = compania;
            cliente.get(1).textContent = compania;
            cliente.get(2).textContent = compania;
            cliente.get(3).textContent = compania;
            cliente.get(4).textContent = compania;
            cliente.get(5).textContent = compania;
            cliente.get(6).textContent = compania;
            cliente.get(7).textContent = compania;
            cliente.get(8).textContent = compania;
            //console.log(cliente);

            //crear variables con el html
            estimados = ele.get(9).innerHTML;
            terminos = ele.get(11).innerHTML;
            quienes = ele.get(13).innerHTML;
            descripcion = ele.get(15).innerHTML;
            //tabla1 = ele.get(17).innerHTML;
            niveles = ele.get(19).innerHTML;
            para = ele.get(21).innerHTML;
            costos = ele.get(23).innerHTML;
            tecnico = ele.get(25).innerHTML;
            niveles2 = ele.get(27).innerHTML;
            costos2 = ele.get(29).innerHTML;
            supuestos = ele.get(31).innerHTML;
            condiciones = ele.get(33).innerHTML;



        }
    });

    doc.fromHTML(estimados, 30, paddCount, {
        "width": 150
    });

    //imagen firma
    var myImage2 = new Image(38, 18);
    myImage2.src = "./images/grupoTuinno.jpg";

    paddCount = paddCount + 120;

    doc.addImage(myImage2, "JPG", 25, paddCount, 38, 18);

    doc.setFontSize(10);
    doc.setFont("calibri", "bold");
    doc.text("Representante Comercial", 67, paddCount + 7, "left");
    doc.text("coordinador@tesos.co", 67, paddCount + 11, "left");


    // tabla de contenido

    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 60;
    doc.setFontSize(14);
    doc.setFont("calibri", "bold");
    doc.text("TABLA DE CONTENIDO", docWidth / 2, paddCount, "center");
    doc.setFontSize(10);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 20;
    doc.text("1. TÉRMINOS DE CONFIDENCIALIDAD____________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("2. QUIENES SOMOS______________________________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("3. DESCRIPCIÓN DE NUESTRO SERVICIO__________________________________________5", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("3..1	Técnico de soporte en campo TESO Dedicado para la plataforma de PCs e impresoras____5", 30, paddCount, {
        "align": "left",
        "width": 150
    });
    paddCount = paddCount + 8;
    doc.text("3..2         SUPUESTOS_____________________________________________________________7", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("4. CONDICIONES COMERCIALES__________________________________________________8", 30, paddCount, "left");

    //4 pagina
    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 50;

    //terminos
    doc.fromHTML(terminos, 30, paddCount, {
        "width": 155
    });
    //quienes
    paddCount = paddCount + 65;
    doc.fromHTML(quienes, 30, paddCount, {
        "width": 155
    });

    //Slogan
    paddCount = paddCount + 125;
    doc.setFontSize(12);
    doc.setFont("calibri", "bold");
    doc.text("“En TESOS.CO® estamos convencidos que la tecnología no tiene por qué ser un problema para nuestros Clientes”", parseInt((docWidth / 2)), paddCount, {
        "align": "center",
        "maxWidth": 110
    });


    //5 pagina
    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);

    paddCount = 40;
    doc.fromHTML(descripcion, 30, paddCount, {
        "width": 155
    });

    //tabla1
    paddCount = 185;
    var tabla1 = new Image();
    tabla1.src = "./images/tabla1-1.PNG";
    doc.addImage(tabla1, "PNG", parseInt((docWidth / 2) - 55), paddCount, 110, 76);


    //6 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;

    var tabla12 = new Image();
    tabla12.src = "./images/tabla1-2.PNG";
    doc.addImage(tabla12, "PNG", parseInt((docWidth / 2) - 55), paddCount, 110, 100);
    paddCount = paddCount + 100;
    doc.fromHTML(niveles, 30, paddCount, {
        "width": 155
    });
    //tabla2
    var tabla2 = new Image();
    tabla2.src = "./images/tabla2-2.PNG";
    paddCount = paddCount + 50;
    doc.addImage(tabla2, "PNG", parseInt((docWidth / 2) - 75), paddCount, 150, 62);
    paddCount = paddCount + 65;

    //7 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;

    doc.fromHTML(para, 30, paddCount, {
        "width": 150
    });
    //costos1
    paddCount = paddCount + 20;
    doc.fromHTML(costos, 30, paddCount, {
        "width": 150
    });
    //tabla3
    var tabla3 = new Image();
    tabla3.src = "./images/tabla3-1.PNG";
    paddCount = paddCount + 20;
    doc.addImage(tabla3, "PNG", parseInt((docWidth / 2) - 70), paddCount, 140, 55);


    paddCount = paddCount + 60;
    doc.fromHTML(supuestos, 30, paddCount, {
        "width": 150
    });

    //10 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;
    doc.fromHTML(condiciones, 30, paddCount, {
        "width": 130
    });


    doc.save("DOWN.pdf");
}

function marcaBlanca(compania, oferta, contacto, cargo) {
    //tamaño de la primera imagen
    var tesos_img_w_h = 60;
    //tamaño de la pagina del pdf
    var docFormat = 'a4';
    var docWidth = 0;
    var docHeight = 0;

    var myImage = new Image(tesos_img_w_h, tesos_img_w_h);
    myImage.src = "./images/tesosICO2-04.png";

    var myImage4 = new Image();
    myImage4.src = "./images/header.png";




    if (docFormat == 'a4') {
        //medidas de la pagina del pdf en mm
        docWidth = 210;
        docHeight = 297;
    }

    //crear documento
    var doc = jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: docFormat,
        putOnlyUsedFonts: true
    });
    //primera imagen tesos
    var paddCount = 40; //padding Inicial

    doc.addImage(myImage, "PNG", parseInt((docWidth / 2) - (tesos_img_w_h / 2)), paddCount, tesos_img_w_h, tesos_img_w_h, "TOP");

    //primer texto
    doc.setTextColor(100);
    doc.setFontSize(9);
    doc.setFont("calibri", "italic");
    //actualiza paddCount
    paddCount = paddCount + tesos_img_w_h + 6;
    doc.text("TESOS.CO® es una marca de Grupo TUiNNO.SAS", docWidth / 2, paddCount, "center");

    //rectangulo azul
    paddCount = paddCount + 6;
    doc.setFillColor(100, 149, 237);
    doc.roundedRect(parseInt(docWidth / 2 - 60), paddCount, 120, 36, 5, 5, "F");

    doc.setTextColor(255);
    doc.setFontSize(16);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 10;
    doc.text("PROPUESTA COMERCIAL", docWidth / 2, paddCount, "center");

    doc.setFont("calibri", "bold");
    paddCount = paddCount + 10;
    doc.text("Servicios de soporte de tecnología en", docWidth / 2, paddCount, "center");

    paddCount = paddCount + 10;
    doc.text("modalidad marca blanca", docWidth / 2, paddCount, "center");

    //para:
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 20;
    doc.text("PARA:", docWidth / 2, paddCount, "center");

    doc.setFontSize(16);
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 12;
    doc.text(compania, docWidth / 2, paddCount, "center");

    //oferta
    doc.setFontSize(14);
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 20;
    doc.text("Oferta #" + oferta, docWidth - 30, paddCount, "right");

    paddCount = paddCount + 8;
    var d = new Date();
    doc.text(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), docWidth - 30, paddCount, "right");

    //2 pagina
    doc.addPage('a4', 'p');
    //header

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);

    //membrete
    doc.setFontSize(12);
    doc.setFont("calibri", "regular");
    paddCount = 50;
    doc.text("Bogotá, DC. " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), 30, paddCount, "left");

    paddCount = paddCount + 15;
    doc.text("Señores:", 30, paddCount, "left");
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 6;
    doc.text(compania, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Atte.: " + contacto, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "bold");
    doc.text(cargo, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Ciudad", 30, paddCount, "left");

    paddCount = paddCount + 9;
    doc.text("Ref.: " + oferta + "-TESO dedicado", docWidth - 30, paddCount, "right");
    paddCount = paddCount + 10;

    //texto
    var estimados;
    var terminos;
    var quienes;
    var descripcion;
    var alcance;
    var nuestros;
    var niveles;
    var para;
    var costos;
    var tecnico;
    var tecnico2;
    var costos;
    var supuestos;
    var condiciones;

    $.ajax({
        async: false,
        type: "GET",
        url: 'plan_marca.html',
        success: function (data) {
            var ele = $(data);
            //console.log(ele);
            //cambiar valores
            var cliente = $(ele).find("#cliente");
            cliente.get(0).textContent = compania;
            cliente.get(1).textContent = compania;
            cliente.get(2).textContent = compania;
            cliente.get(3).textContent = compania;
            cliente.get(4).textContent = compania;
            cliente.get(5).textContent = compania;
            cliente.get(6).textContent = compania;
            cliente.get(7).textContent = compania;
            cliente.get(8).textContent = compania;
            cliente.get(9).textContent = compania;
            cliente.get(10).textContent = compania;
            //console.log(cliente);

            //crear variables con el html
            estimados = ele.get(9).innerHTML;
            terminos = ele.get(11).innerHTML;
            quienes = ele.get(13).innerHTML;
            descripcion = ele.get(15).innerHTML;
            //tabla1 = ele.get(17).innerHTML;
            alcance = ele.get(17).innerHTML;
            nuestros = ele.get(19).innerHTML;
            tecnico = ele.get(21).innerHTML;
            tecnico2 = ele.get(23).innerHTML;
            niveles = ele.get(25).innerHTML;
            supuestos = ele.get(27).innerHTML;
            costos = ele.get(29).innerHTML;
            condiciones = ele.get(31).innerHTML;



        }
    });

    doc.fromHTML(estimados, 30, paddCount, {
        "width": 150
    });

    //imagen firma
    var myImage2 = new Image(38, 18);
    myImage2.src = "./images/grupoTuinno.jpg";

    paddCount = paddCount + 120;

    doc.addImage(myImage2, "JPG", 25, paddCount, 38, 18);

    doc.setFontSize(10);
    doc.setFont("calibri", "bold");
    doc.text("Representante Comercial", 67, paddCount + 7, "left");
    doc.text("coordinador@tesos.co", 67, paddCount + 11, "left");


    // tabla de contenido

    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 60;
    doc.setFontSize(14);
    doc.setFont("calibri", "bold");
    doc.text("TABLA DE CONTENIDO", docWidth / 2, paddCount, "center");
    doc.setFontSize(10);
    doc.setFont("calibri", "regular");
    paddCount = paddCount + 20;
    doc.text("1. TÉRMINOS DE CONFIDENCIALIDAD____________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("2. QUIENES SOMOS______________________________________________________________4", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("3. CONTEXTO___________________________________________________________________5", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("4. ALCANCE____________________________________________________________________5", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("5. DESCRIPCIÓN DE NUESTROS SERVICIOS________________________________________5", 30, paddCount, "left");
    paddCount = paddCount + 8;
    doc.text("5..1	Técnico de soporte en campo, TESO en Marca Blanca_____________________________5", 30, paddCount, {
        "align": "left",
        "width": 150
    });
    paddCount = paddCount + 8;
    doc.text("6. CONDICIONES COMERCIALES__________________________________________________7", 30, paddCount, "left");

    //4 pagina
    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 50;

    //terminos
    doc.fromHTML(terminos, 30, paddCount, {
        "width": 155
    });
    //quienes
    paddCount = paddCount + 65;
    doc.fromHTML(quienes, 30, paddCount, {
        "width": 155
    });

    //Slogan
    paddCount = paddCount + 125;
    doc.setFontSize(12);
    doc.setFont("calibri", "bold");
    doc.text("“En TESOS.CO® estamos convencidos que la tecnología no tiene por qué ser un problema para nuestros Clientes”", parseInt((docWidth / 2)), paddCount, {
        "align": "center",
        "maxWidth": 110
    });


    //5 pagina
    doc.addPage('a4', 'p');

    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);

    paddCount = 40;
    doc.fromHTML(descripcion, 30, paddCount, {
        "width": 150
    });

    paddCount = paddCount + 70;
    doc.fromHTML(alcance, 30, paddCount, {
        "width": 150
    });

    paddCount = paddCount + 50;
    doc.fromHTML(nuestros, 30, paddCount, {
        "width": 150
    });

    paddCount = paddCount + 35;
    doc.fromHTML(tecnico, 30, paddCount, {
        "width": 150
    });




    //6 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;

    doc.fromHTML(tecnico2, 30, paddCount, {
        "width": 150
    });
    paddCount = paddCount + 45;
    doc.fromHTML(niveles, 30, paddCount, {
        "width": 150
    });
    paddCount = paddCount + 50;
    doc.fromHTML(supuestos, 30, paddCount, {
        "width": 145
    });



    //7 pagina
    doc.addPage('a4', 'p');
    doc.addImage(myImage4, "PNG", parseInt((docWidth / 2) - 76), 15, 152, 17);
    paddCount = 40;
    //tecnico
    doc.fromHTML(costos, 30, paddCount, {
        "width": 150
    });
    //tabla4
    var tabla4 = new Image();
    tabla4.src = "./images/tabla7.PNG";
    paddCount = paddCount + 20;
    doc.addImage(tabla4, "PNG", parseInt((docWidth / 2) - 60), paddCount, 120, 60);

    paddCount = 130;
    doc.fromHTML(condiciones, 30, paddCount, {
        "width": 130
    });


    doc.save("DOWN.pdf");
}
