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
        var docWidth = 210;
        var docHeight = 297;
    };
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
    paddCount =40;
    doc.text("Bogotá, DC. "+ d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(), 30, paddCount, "left");

    paddCount = paddCount + 15;
    doc.text("Señores:", 30, paddCount, "left");
    doc.setFont("calibri", "bold");
    paddCount = paddCount + 6;
    doc.text(compania, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Atte.: "+contacto, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "bold");
    doc.text(cargo, 30, paddCount, "left");
    paddCount = paddCount + 6;
    doc.setFont("calibri", "regular");
    doc.text("Ciudad", 30, paddCount, "left");

    paddCount = paddCount + 9;
    doc.text("Ref.: "+oferta+"-TESO dedicado", docWidth - 30, paddCount, "right");
paddCount = paddCount+10;
    //texto
    doc.fromHTML('<p><FONT SIZE=3>Estimados Señores,</FONT></p> <p style="line-height:1.4"> <FONT SIZE=3>Agradecemos a su Organización </FONT><FONT SIZE=3><B><SPAN id="cliente">$contacto</SPAN></B></FONT> <FONT SIZE=3><B></B></FONT><FONT SIZE=3>por tener en cuenta a </FONT> <FONT SIZE=3><B>Grupo TUiNNO.SAS</B></FONT><FONT SIZE=3> y a su marca </FONT><a HREF="http://www.tesos.co/"> <FONT SIZE=3><I>TESOS.CO®</I></FONT></a> <FONT SIZE=3> como proveedor de los servicios que cotizamos en la presente oferta.</FONT></p> ',30, paddCount, {'width':150} );


    doc.save("DOWN.pdf");
}
