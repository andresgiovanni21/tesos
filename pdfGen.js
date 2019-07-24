function name(compania, oferta, contacto, cargo) {
    //tamaño de la primera imagen
    var tesos_img_w_h = 60;
    //tamaño de la pagina del pdf
    var docFormat = 'a4';
    var docWidth = 0;
    var docHeight = 0;
    var myImage = new Image(tesos_img_w_h, tesos_img_w_h);
    myImage.src = "./images/tesosICO2-04.png";

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
    doc.addImage(myImage, "PNG", parseInt((docWidth / 2) - (tesos_img_w_h / 2)), paddCount, tesos_img_w_h, tesos_img_w_h, "MEDIUM");
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

    //membrete
    doc.setFontSize(12);
    doc.setFont("calibri", "regular");
    paddCount = 40;
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
    var tabla1;
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
    doc.addImage(myImage2, "JPG", 25, paddCount, 38, 18, "LEFT");
    doc.setFontSize(10);
    doc.setFont("calibri", "bold");
    doc.text("Representante Comercial", 67, paddCount + 7, "left");
    doc.text("coordinador@tesos.co", 67, paddCount + 11, "left");
    // aqui va el contenido

    //3 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;

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

    //4 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;
    doc.fromHTML(descripcion, 30, paddCount, {
        "width": 155
    });

    //tabla1
    paddCount = 100;
    doc.fromHTML(tabla1, 30, paddCount, {
        "width": 30
    });

    //5 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;
    doc.fromHTML(niveles, 30, paddCount, {
        "width": 155
    });
    paddCount = paddCount + 100;
    doc.fromHTML(para, 30, paddCount, {
        "width": 150
    });

    paddCount = paddCount + 20;
    doc.fromHTML(costos, 30, paddCount, {
        "width": 150
    });

    //6 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;
    doc.fromHTML(tecnico, 30, paddCount, {
        "width": 155
    });

    //7 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;
    doc.fromHTML(niveles2, 30, paddCount, {
        "width": 155
    });
    paddCount = paddCount + 80;
    doc.fromHTML(para, 30, paddCount, {
        "width": 150
    });


    //8 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;
    doc.fromHTML(costos2, 30, paddCount, {
        "width": 155
    });
    paddCount = paddCount + 40;
    doc.fromHTML(supuestos, 30, paddCount, {
        "width": 150
    });

    //9 pagina
    doc.addPage('a4', 'p');
    paddCount = 40;
    doc.fromHTML(condiciones, 30, paddCount, {
        "width": 130
    });


    doc.save("DOWN.pdf");
}
