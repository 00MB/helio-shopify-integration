module.exports = {
    mintedSuccess: async (payLoad, mintedImagesUrls, transactionHash) => {
        return (
            `
          <!DOCTYPE html>
<html xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraph.org/schema/">

<head>

    <meta property="og:title" content="">
    <meta property="fb:page_id" content="43929265776">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="referrer" content="origin">
    <!--[if gte mso 15]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <style>
        img {
            -ms-interpolation-mode: bicubic;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        .mceStandardButton,
        .mceStandardButton td,
        .mceStandardButton td a {
            mso-hide: all !important;
        }

        p,
        a,
        li,
        td,
        blockquote {
            mso-line-height-rule: exactly;
        }

        p,
        a,
        li,
        td,
        body,
        table,
        blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        @media only screen and (max-width: 480px) {

            body,
            table,
            td,
            p,
            a,
            li,
            blockquote {
                -webkit-text-size-adjust: none !important;
            }
        }

        .mcnPreviewText {
            display: none !important;
        }

        .bodyCell {
            margin: 0 auto;
            padding: 0;
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body {
            height: 100%;
            margin: 0px;
            padding: 0px;
            width: 100%;
            background: rgb(255, 255, 255);
        }

        p {
            margin: 0px;
            padding: 0px;
        }

        table {
            border-collapse: collapse;
        }

        td,
        p,
        a {
            word-break: break-word;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            display: block;
            margin: 0px;
            padding: 0px;
        }

        img,
        a img {
            border: 0px;
            height: auto;
            outline: none;
            text-decoration: none;
        }

        li p {
            margin: 0px !important;
        }

        @media only screen and (max-width: 480px) {
            body {
                width: 100% !important;
                min-width: 100% !important;
            }

            colgroup {
                display: none;
            }

            img {
                height: auto !important;
            }

            .mceColumn {
                display: block !important;
                width: 100% !important;
            }

            .mceSpacing-24 {
                padding-right: 12px !important;
                padding-left: 12px !important;
            }

            .mceText,
            .mceText p {
                font-size: 16px !important;
                line-height: 150% !important;
            }

            h1 {
                font-size: 36px !important;
                line-height: 125% !important;
            }
        }

        @media only screen and (max-width: 640px) {
            .mceClusterLayout td {
                padding: 4px !important;
            }
        }

        body {
            background-color: rgb(255, 255, 255);
        }

        .mceText h1,
        .mceText h2,
        .mceText h3,
        .mceText h4 {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }

        .mceText,
        .mceLabel {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }

        .mceText h1,
        .mceText h2,
        .mceText h3,
        .mceText h4 {
            color: rgb(0, 0, 0);
        }

        .mceText,
        .mceLabel {
            color: rgb(0, 0, 0);
        }

        .mceText a {
            color: rgb(175, 30, 251);
        }

        .mceSpacing-24 h1 {
            margin-bottom: 24px;
        }

        .mceSpacing-24 h1:last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 p {
            margin-bottom: 24px;
        }

        .mceSpacing-24 p:last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 ul {
            margin-bottom: 24px;
        }

        .mceSpacing-24 ul:last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 label {
            margin-bottom: 24px;
        }

        .mceSpacing-24 input {
            margin-bottom: 24px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .mceInput+.mceErrorMessage {
            margin-top: -12px;
        }

        .mceSpacing-12 label {
            margin-bottom: 12px;
        }

        .mceSpacing-12 input {
            margin-bottom: 12px;
        }

        .mceSpacing-12 .mceInput+.mceErrorMessage {
            margin-top: -6px;
        }

        .mceSpacing-48 label {
            margin-bottom: 48px;
        }

        .mceSpacing-48 input {
            margin-bottom: 48px;
        }

        .mceSpacing-48 .mceInput+.mceErrorMessage {
            margin-top: -24px;
        }

        .mceInput {
            background-color: transparent;
            border: 2px solid rgb(208, 208, 208);
            width: 60%;
            color: rgb(77, 77, 77);
            display: block;
        }

        .mceInput[type="radio"],
        .mceInput[type="checkbox"] {
            float: left;
            margin-right: 12px;
            display: inline;
            width: auto !important;
        }

        .mceLabel>.mceInput {
            margin-bottom: 0px;
            margin-top: 2px;
        }

        .mceLabel {
            display: block;
        }

        .mceText h1 {
            font-size: 31.248px;
            font-weight: 700;
        }

        .tg {
            border-collapse: collapse;
            border-spacing: 0px;
            margin: 0px auto;
        }

        .tg td {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            overflow: hidden;
            padding: 10px 5px;
            word-break: normal;
        }

        .tg th {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: normal;
            overflow: hidden;
            padding: 10px 5px;
            word-break: normal;
        }

        .tg .tg-zv4m {
            border-color: rgba(255, 255, 255, 0.3);
            text-align: left;
            vertical-align: top;
        }

        .tg .tg-il3a {
            border-color: rgba(255, 255, 255, 0.3);
            color: rgb(255, 255, 255);
            text-align: left;
            vertical-align: top;
        }

        @media only screen and (max-width: 480px) {
            .mobileClass-9 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }

            .mobileClass-9 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }

            .mobileClass-9 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }
        }

        @media only screen and (min-width: 481px) and (max-width: 768px) {}
    </style>
    <center>
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable"
            style="background-color: rgb(255, 255, 255);">
            <tbody>
                <tr>
                    <td id="root" class="bodyCell" align="center" valign="top">
                        <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                            style="max-width:660px" role="presentation">
                            <tbody>
                                <tr class="mceRow">
                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                        valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="table-layout:fixed" role="presentation">
                                            <colgroup>
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <td style="background-color:#080808;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:24px"
                                                        class="mceColumn" valign="top" colspan="12" width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" align="center"
                                                                        valign="top"><img width="564"
                                                                            style="width:564px;height:auto;max-width:100%;display:block"
                                                                            alt=""
                                                                            src="https://dim.mcusercontent.com/cs/eb53e643056c7dc218f07793f/images/50c9f525-c642-490f-9847-fbd46a477bb0.jpg?w=564&dpr=2"
                                                                            role="presentation"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:30px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:center;width:100%">
                                                                            <h1 class="last-child"><span
                                                                                    style="color:#ffffff;">¡Enhorabuena,
                                                                                    ya eres Embajador de
                                                                                    NFTespaña!</span></h1>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:50px;padding-left:50px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:left;width:100%">
                                                                            <p><span style="color:#ffffff;">Hola,</span>
                                                                            </p>
                                                                            <p><span style="color:#ffffff;">Le
                                                                                    agradecemos la adquisición de una de
                                                                                    las 333 exclusivas Tarjetas
                                                                                    Embajador NFTespaña.</span></p>
                                                                            <p><span style="color:#ffffff;">Gracias a
                                                                                    ella podrá acceder a los siguientes
                                                                                    beneficios:</span></p>
                                                                            <ul class="last-child">
                                                                                <li style="color: #ffffff;">
                                                                                    <p><span style="color:#ffffff;">Acceso
                                                                                            a nuestro </span><strong><a
                                                                                                href="https://discord.com/invite/Nj5THVwrBu"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"><span
                                                                                                    style="color:#af1efb;">Discord
                                                                                                    VIP</span></a></strong><span
                                                                                            style="color:#ffffff;">.</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">1
                                                                                                NFT</span></strong><span
                                                                                            style="color:#ffffff;"> de
                                                                                            cada colección de NFTespaña
                                                                                            se regala por sorteo en el
                                                                                            Discord VIP.</span></p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">Whitelist</span></strong><span
                                                                                            style="color:#ffffff;"> y
                                                                                        </span><strong><span
                                                                                                style="color:#af1efb;">descuento
                                                                                                del
                                                                                                50%</span></strong><span
                                                                                            style="color:#ffffff;"> en
                                                                                            la “Colección #002”.</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">Descuento
                                                                                                del
                                                                                                25%</span></strong><span
                                                                                            style="color:#ffffff;"> en
                                                                                            pack de servicios de Labe
                                                                                            Abogados.</span></p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">Distintivo
                                                                                                Embajador</span></strong><span
                                                                                            style="color:#ffffff;"> en
                                                                                            Marketplace y
                                                                                            Discord.</span></p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><span style="color:#ffffff;">Soporte
                                                                                            técnico </span><strong><span
                                                                                                style="color:#af1efb;">prioritario</span></strong><span
                                                                                            style="color:#ffffff;">.</span>
                                                                                    </p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            style="background-color:transparent"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="min-width:100%;border-top:20px solid transparent"
                                                                                        valign="top"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:center;width:100%">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="mceSpacing-4" valign="top">
                                                                        <div class="mceCode">
                                                                            <div class="mceText"
                                                                                style="font-size:16px;text-align:center;width:100%;margin-bottom:30px;">
                                                                                <h2 class="last-child"><span
                                                                                        style="color:#ffffff;">Detalles
                                                                                        de la compra</span></h2>
                                                                            </div>
                                                                            <table class="tg"
                                                                                style="width: 90%;color: white;border: 1px solid white;">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <td
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            Total acuñada</td>
                                                                                        <td colspan="2"
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            ${payLoad.total_nft}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            Pago total</td>
                                                                                        <td colspan="2"
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            ${payLoad.payment_type ? "Matic " : "€ "} ${payLoad.amount / 100}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th
                                                                                            style="border: 1px solid white;">
                                                                                            Nombre-Tipo</th>
                                                                                        <th
                                                                                            style="border: 1px solid white;">
                                                                                            Verificar </th>
                                                                                        <th
                                                                                            style="border: 1px solid white;">
                                                                                            Enlace NFT </th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>

                                                                                ${mintedImagesUrls.map((data, index) => (`<tr>  ${data.name}-${data.token_id}  </td>
                                                                                <td style="border: 1px solid white;text-align: center;">
                                                                                <a href="${process.env.NODE_ENV == 'prod' ? 'https://polygonscan.com/tx/' : 'https://mumbai.polygonscan.com/tx/'}${transactionHash}" target="_blank"
                                                                                style="background-color:#af1efb;border-radius:50px;border:2px solid #af1efb;color:#ffffff;display:inline-block;font-family:'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;font-weight:bold;font-style:normal;padding:3px 8px;text-decoration:none;min-width:30px">
                                                                                Verify transaction </a>
                                                                                </td>
                                                                                <td style="border: 1px solid white;color:white;text-align: center;">
                                                                                <a href="https://gateway.pinata.cloud/ipfs/${data.ipfs_img_hash}" target="_blank"
                                                                                style="background-color:#af1efb;border-radius:50px;border:2px solid #af1efb;color:#ffffff;display:inline-block;font-family:'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;font-size:14px;font-weight:bold;font-style:normal;padding:3px 8px;text-decoration:none;min-width:30px">
                                                                                Link </a>
                                                                                </td></tr>`)
            ).join('')}

                                                         
                                                         
                                                                                </tbody>
                                                                            </table>
                                                                </tr>
                                                                
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" align="center"
                                                                        valign="top">
                                                                        <table align="center" border="0" cellpadding="0"
                                                                            cellspacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="background-color:#af1efb;border-radius:50px;text-align:center"
                                                                                        class="mceButton" valign="top">
                                                                                         
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            style="background-color:transparent"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="min-width:100%;border-top:50px solid transparent"
                                                                                        valign="top">
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" align="center"
                                                                        valign="top"><img width="564"
                                                                            style="width:564px;height:auto;max-width:100%;display:block"
                                                                            alt=""
                                                                            src="https://dim.mcusercontent.com/cs/eb53e643056c7dc218f07793f/images/9b6b1916-0b28-626d-c580-9bd42ed84735.jpg?w=564&dpr=2"
                                                                            role="presentation"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:50px;padding-left:50px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:center;width:100%">
                                                                            <p class="last-child"><span
                                                                                    style="color:#ffffff;">¡Bienvenidx
                                                                                    al club!</span></p>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:transparent;padding-top:32px;padding-bottom:0;padding-right:24px;padding-left:24px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            style="background-color:transparent"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="min-width:100%;border-top:2px solid #ffffff"
                                                                                        valign="top">
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:#070707;padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table align="center" border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr class="mceRow">
                                                                                    <td style="background-color:#070707;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                        valign="top">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="24"
                                                                                            width="100%"
                                                                                            style="table-layout:fixed"
                                                                                            role="presentation">
                                                                                            <colgroup>
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                            </colgroup>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                        class="mceColumn"
                                                                                                        valign="top"
                                                                                                        colspan="12"
                                                                                                        width="100%">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <table
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width=""
                                                                                                                            role="presentation"
                                                                                                                            class="mceClusterLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-top:0;padding-right:24px"
                                                                                                                                        data-breakpoint="9"
                                                                                                                                        valign="top"
                                                                                                                                        class="mobileClass-9">
                                                                                                                                        <a href="https://instagram.com/nftes.es"
                                                                                                                                            style="display:block"
                                                                                                                                            target="_blank"><img
                                                                                                                                                width="40"
                                                                                                                                                style="border:0;width:40px;height:auto;max-width:100%;display:block"
                                                                                                                                                alt="Instagram icon"
                                                                                                                                                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Finstagram-outline-light-40.png?w=40&dpr=2"></a>
                                                                                                                                    </td>
                                                                                                                                    <td style="padding-left:24px;padding-top:0;padding-right:24px"
                                                                                                                                        data-breakpoint="9"
                                                                                                                                        valign="top"
                                                                                                                                        class="mobileClass-9">
                                                                                                                                        <a href="https://twitter.com/NFTes_oficial"
                                                                                                                                            style="display:block"
                                                                                                                                            target="_blank"><img
                                                                                                                                                width="40"
                                                                                                                                                style="border:0;width:40px;height:auto;max-width:100%;display:block"
                                                                                                                                                alt="Twitter icon"
                                                                                                                                                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Ftwitter-outline-light-40.png?w=40&dpr=2"></a>
                                                                                                                                    </td>
                                                                                                                                    <td style="padding-left:24px;padding-top:0;padding-right:24px"
                                                                                                                                        data-breakpoint="9"
                                                                                                                                        valign="top"
                                                                                                                                        class="mobileClass-9">
                                                                                                                                        <a href="https://nftes.es"
                                                                                                                                            style="display:block"
                                                                                                                                            target="_blank"><img
                                                                                                                                                width="40"
                                                                                                                                                style="border:0;width:40px;height:auto;max-width:100%;display:block"
                                                                                                                                                alt="Website icon"
                                                                                                                                                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Fwebsite-outline-light-40.png?w=40&dpr=2"></a>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:#ffffff;padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table align="center" border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation"
                                                                            id="section_79626901e0c183b60f0b910465faebb7">
                                                                            <tbody>
                                                                                <tr class="mceRow">
                                                                                    <td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                        valign="top">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="12"
                                                                                            width="100%"
                                                                                            style="table-layout:fixed"
                                                                                            role="presentation">
                                                                                            <colgroup>
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                            </colgroup>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0;padding-bottom:0"
                                                                                                        class="mceColumn"
                                                                                                        valign="top"
                                                                                                        colspan="12"
                                                                                                        width="100%">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                                                                        class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <img width="150"
                                                                                                                            style="width:150px;height:auto;max-width:100%;display:block"
                                                                                                                            alt="Logo"
                                                                                                                            src="https://dim.mcusercontent.com/cs/eb53e643056c7dc218f07793f/images/7428ba7c-d35f-55e8-8ca1-614b32d17fe8.png?w=150&dpr=2&rect=0%2C67%2C200%2C65">
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                                                                                        class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <div class="mceText"
                                                                                                                            style="font-size:12px;display:inline-block;width:100%">
                                                                                                                            <p
                                                                                                                                class="last-child">
                                                                                                                                <em>Copyright
                                                                                                                                    (C)
                                                                                                                                    2022
                                                                                                                                    NFTespaña.
                                                                                                                                    Todos
                                                                                                                                    los
                                                                                                                                    derechos
                                                                                                                                    reservados.</em><br>Estás
                                                                                                                                recibiendo
                                                                                                                                este
                                                                                                                                email
                                                                                                                                porque
                                                                                                                                has
                                                                                                                                rellenado
                                                                                                                                el
                                                                                                                                formulario
                                                                                                                                de
                                                                                                                                nuestro
                                                                                                                                sitio
                                                                                                                                web.<br><br>Nuestra
                                                                                                                                dirección
                                                                                                                                es:<br><span
                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                        style="font-size: 12px">Oviedo,
                                                                                                                                        Asturias
                                                                                                                                        33001,
                                                                                                                                        España</span></span><br><br>¿Quieres
                                                                                                                                modificar
                                                                                                                                cómo
                                                                                                                                quieres
                                                                                                                                recibir
                                                                                                                                los
                                                                                                                                emails?<br>Puedes
                                                                                                                                <a
                                                                                                                                    href="https://nftes.us14.list-manage.com/profile?u=eb53e643056c7dc218f07793f&id=6367263bec&e=[UNIQID]&c=4024237fc7">actualizar
                                                                                                                                    tus
                                                                                                                                    preferencias</a>
                                                                                                                                o
                                                                                                                                <a
                                                                                                                                    href="https://nftes.us14.list-manage.com/unsubscribe?u=eb53e643056c7dc218f07793f&id=6367263bec&e=[UNIQID]&c=4024237fc7">desuscribirte</a>
                                                                                                                            </p>
                                                                                                                        </div>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="24"
                                                                                                                                            width="100%"
                                                                                                                                            style="table-layout:fixed"
                                                                                                                                            role="presentation">
                                                                                                                                            <colgroup>
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                            </colgroup>
                                                                                                                                            <tbody>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            document.getElementById("copyToClipboard").addEventListener("click", function () {
                var input = document.getElementById("clipboardSource");
                input.select();
                var successful = document.execCommand("copy");
                if (successful) {
                    alert('Copied "' + input.value + '" to your clipboard.');
                } else {
                    throw new Error("Failed to copy text (verify caller was in the context of an event handler)");
                }
            });

            $('li.more > a').click(function () {
                var toToggle = $($(this).attr('data-to-toggle'));
                if (toToggle.is(':visible')) {
                    toToggle.slideUp('fast');
                    $(this).removeClass('is-active');
                    if ($('#awesomebar').find('.is-active').length < 1) {
                        $('#awesomebar').removeClass('sub-active');
                    }
                } else {
                    toToggle.slideDown('fast');
                    $(this).addClass('is-active');
                    $('#awesomebar').addClass('sub-active');
                }
                return false;
            });

        });
    </script>
    </body>

</html>
          `
        )
    },
    mintedBlockChainError: async (payLoad) => {
        console.log("payLoad", payLoad)
        return (
            `
          <!DOCTYPE html>
<html xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraph.org/schema/">

<head>

    <meta property="og:title" content="">
    <meta property="fb:page_id" content="43929265776">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="referrer" content="origin">
    <!--[if gte mso 15]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <style>
        img {
            -ms-interpolation-mode: bicubic;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        .mceStandardButton,
        .mceStandardButton td,
        .mceStandardButton td a {
            mso-hide: all !important;
        }

        p,
        a,
        li,
        td,
        blockquote {
            mso-line-height-rule: exactly;
        }

        p,
        a,
        li,
        td,
        body,
        table,
        blockquote {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        @media only screen and (max-width: 480px) {

            body,
            table,
            td,
            p,
            a,
            li,
            blockquote {
                -webkit-text-size-adjust: none !important;
            }
        }

        .mcnPreviewText {
            display: none !important;
        }

        .bodyCell {
            margin: 0 auto;
            padding: 0;
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%;
        }

        .ReadMsgBody {
            width: 100%;
        }

        .ExternalClass {
            width: 100%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body {
            height: 100%;
            margin: 0px;
            padding: 0px;
            width: 100%;
            background: rgb(255, 255, 255);
        }

        p {
            margin: 0px;
            padding: 0px;
        }

        table {
            border-collapse: collapse;
        }

        td,
        p,
        a {
            word-break: break-word;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            display: block;
            margin: 0px;
            padding: 0px;
        }

        img,
        a img {
            border: 0px;
            height: auto;
            outline: none;
            text-decoration: none;
        }

        li p {
            margin: 0px !important;
        }

        @media only screen and (max-width: 480px) {
            body {
                width: 100% !important;
                min-width: 100% !important;
            }

            colgroup {
                display: none;
            }

            img {
                height: auto !important;
            }

            .mceColumn {
                display: block !important;
                width: 100% !important;
            }

            .mceSpacing-24 {
                padding-right: 12px !important;
                padding-left: 12px !important;
            }

            .mceText,
            .mceText p {
                font-size: 16px !important;
                line-height: 150% !important;
            }

            h1 {
                font-size: 36px !important;
                line-height: 125% !important;
            }
        }

        @media only screen and (max-width: 640px) {
            .mceClusterLayout td {
                padding: 4px !important;
            }
        }

        body {
            background-color: rgb(255, 255, 255);
        }

        .mceText h1,
        .mceText h2,
        .mceText h3,
        .mceText h4 {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }

        .mceText,
        .mceLabel {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }

        .mceText h1,
        .mceText h2,
        .mceText h3,
        .mceText h4 {
            color: rgb(0, 0, 0);
        }

        .mceText,
        .mceLabel {
            color: rgb(0, 0, 0);
        }

        .mceText a {
            color: rgb(175, 30, 251);
        }

        .mceSpacing-24 h1 {
            margin-bottom: 24px;
        }

        .mceSpacing-24 h1:last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 p {
            margin-bottom: 24px;
        }

        .mceSpacing-24 p:last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 ul {
            margin-bottom: 24px;
        }

        .mceSpacing-24 ul:last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 label {
            margin-bottom: 24px;
        }

        .mceSpacing-24 input {
            margin-bottom: 24px;
        }

        .mceSpacing-24 .last-child {
            margin-bottom: 0px;
        }

        .mceSpacing-24 .mceInput+.mceErrorMessage {
            margin-top: -12px;
        }

        .mceSpacing-12 label {
            margin-bottom: 12px;
        }

        .mceSpacing-12 input {
            margin-bottom: 12px;
        }

        .mceSpacing-12 .mceInput+.mceErrorMessage {
            margin-top: -6px;
        }

        .mceSpacing-48 label {
            margin-bottom: 48px;
        }

        .mceSpacing-48 input {
            margin-bottom: 48px;
        }

        .mceSpacing-48 .mceInput+.mceErrorMessage {
            margin-top: -24px;
        }

        .mceInput {
            background-color: transparent;
            border: 2px solid rgb(208, 208, 208);
            width: 60%;
            color: rgb(77, 77, 77);
            display: block;
        }

        .mceInput[type="radio"],
        .mceInput[type="checkbox"] {
            float: left;
            margin-right: 12px;
            display: inline;
            width: auto !important;
        }

        .mceLabel>.mceInput {
            margin-bottom: 0px;
            margin-top: 2px;
        }

        .mceLabel {
            display: block;
        }

        .mceText h1 {
            font-size: 31.248px;
            font-weight: 700;
        }

        .tg {
            border-collapse: collapse;
            border-spacing: 0px;
            margin: 0px auto;
        }

        .tg td {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            overflow: hidden;
            padding: 10px 5px;
            word-break: normal;
        }

        .tg th {
            border-color: black;
            border-style: solid;
            border-width: 1px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: normal;
            overflow: hidden;
            padding: 10px 5px;
            word-break: normal;
        }

        .tg .tg-zv4m {
            border-color: rgba(255, 255, 255, 0.3);
            text-align: left;
            vertical-align: top;
        }

        .tg .tg-il3a {
            border-color: rgba(255, 255, 255, 0.3);
            color: rgb(255, 255, 255);
            text-align: left;
            vertical-align: top;
        }

        @media only screen and (max-width: 480px) {
            .mobileClass-9 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }

            .mobileClass-9 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }

            .mobileClass-9 {
                padding-left: 12 !important;
                padding-top: 0 !important;
                padding-right: 12 !important;
            }
        }

        @media only screen and (min-width: 481px) and (max-width: 768px) {}
    </style>
    <center>
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable"
            style="background-color: rgb(255, 255, 255);">
            <tbody>
                <tr>
                    <td id="root" class="bodyCell" align="center" valign="top">
                        <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                            style="max-width:660px" role="presentation">
                            <tbody>
                                <tr class="mceRow">
                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                        valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="table-layout:fixed" role="presentation">
                                            <colgroup>
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                                <col span="1">
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <td style="background-color:#080808;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:24px"
                                                        class="mceColumn" valign="top" colspan="12" width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" align="center"
                                                                        valign="top"><img width="564"
                                                                            style="width:564px;height:auto;max-width:100%;display:block"
                                                                            alt=""
                                                                            src="https://dim.mcusercontent.com/cs/eb53e643056c7dc218f07793f/images/50c9f525-c642-490f-9847-fbd46a477bb0.jpg?w=564&dpr=2"
                                                                            role="presentation"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:30px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:center;width:100%">
                                                                            <h1 class="last-child"><span
                                                                                    style="color:#ffffff;">¡Enhorabuena,
                                                                                    ya eres Embajador de
                                                                                    NFTespaña!</span></h1>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:50px;padding-left:50px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:left;width:100%">
                                                                            <p><span style="color:#ffffff;">Hola,</span>
                                                                            </p>
                                                                            <p><span style="color:#ffffff;">Le
                                                                                    agradecemos la adquisición de una de
                                                                                    las 333 exclusivas Tarjetas
                                                                                    Embajador NFTespaña.</span></p>
                                                                            <p><span style="color:#ffffff;">Gracias a
                                                                                    ella podrá acceder a los siguientes
                                                                                    beneficios:</span></p>
                                                                            <ul class="last-child">
                                                                                <li style="color: #ffffff;">
                                                                                    <p><span style="color:#ffffff;">Acceso
                                                                                            a nuestro </span><strong><a
                                                                                                href="https://discord.com/invite/Nj5THVwrBu"
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"><span
                                                                                                    style="color:#af1efb;">Discord
                                                                                                    VIP</span></a></strong><span
                                                                                            style="color:#ffffff;">.</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">1
                                                                                                NFT</span></strong><span
                                                                                            style="color:#ffffff;"> de
                                                                                            cada colección de NFTespaña
                                                                                            se regala por sorteo en el
                                                                                            Discord VIP.</span></p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">Whitelist</span></strong><span
                                                                                            style="color:#ffffff;"> y
                                                                                        </span><strong><span
                                                                                                style="color:#af1efb;">descuento
                                                                                                del
                                                                                                50%</span></strong><span
                                                                                            style="color:#ffffff;"> en
                                                                                            la “Colección #002”.</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">Descuento
                                                                                                del
                                                                                                25%</span></strong><span
                                                                                            style="color:#ffffff;"> en
                                                                                            pack de servicios de Labe
                                                                                            Abogados.</span></p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><strong><span
                                                                                                style="color:#af1efb;">Distintivo
                                                                                                Embajador</span></strong><span
                                                                                            style="color:#ffffff;"> en
                                                                                            Marketplace y
                                                                                            Discord.</span></p>
                                                                                </li>
                                                                                <li style="color: #ffffff;">
                                                                                    <p><span style="color:#ffffff;">Soporte
                                                                                            técnico </span><strong><span
                                                                                                style="color:#af1efb;">prioritario</span></strong><span
                                                                                            style="color:#ffffff;">.</span>
                                                                                    </p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            style="background-color:transparent"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="min-width:100%;border-top:20px solid transparent"
                                                                                        valign="top"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:center;width:100%">
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="mceSpacing-4" valign="top">
                                                                        <div class="mceCode">
                                                                            <div class="mceText"
                                                                                style="font-size:16px;text-align:center;width:100%;margin-bottom:30px;">
                                                                                <p style="padding:5px 10px;color:white">Ha acuñado con éxito 5 NFT con esta raya. Desafortunadamente, encontramos algunos problemas de red en Blockchain Side. Nos pondremos en contacto con usted poco después de la verificación. Sus detalles de pago se dan a continuación. Su pago es seguro con nosotros.</p>
                                                                                <h2 class="last-child"><span
                                                                                        style="color:#ffffff;">Detalles
                                                                                        de la compra</span></h2>
                                                                            </div>
                                                                            <table class="tg"
                                                                                style="width: 90%;color: white;border: 1px solid white;">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <td
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            Total acuñada</td>
                                                                                        <td colspan="2"
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            ${payLoad.total_nft}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            Pago total</td>
                                                                                        <td colspan="2"
                                                                                            style="border: 1px solid white;text-align: center;">
                                                                                            € ${payLoad.amount / 100}</td>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>

                                                                             

                                                         
                                                         
                                                                                </tbody>
                                                                            </table>
                                                                </tr>
                                                                
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" align="center"
                                                                        valign="top">
                                                                        <table align="center" border="0" cellpadding="0"
                                                                            cellspacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="background-color:#af1efb;border-radius:50px;text-align:center"
                                                                                        class="mceButton" valign="top">
                                                                                         
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            style="background-color:transparent"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="min-width:100%;border-top:50px solid transparent"
                                                                                        valign="top">
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" align="center"
                                                                        valign="top"><img width="564"
                                                                            style="width:564px;height:auto;max-width:100%;display:block"
                                                                            alt=""
                                                                            src="https://dim.mcusercontent.com/cs/eb53e643056c7dc218f07793f/images/9b6b1916-0b28-626d-c580-9bd42ed84735.jpg?w=564&dpr=2"
                                                                            role="presentation"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:50px;padding-left:50px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <div class="mceText"
                                                                            style="font-size:16px;text-align:center;width:100%">
                                                                            <p class="last-child"><span
                                                                                    style="color:#ffffff;">¡Bienvenidx
                                                                                    al club!</span></p>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:transparent;padding-top:32px;padding-bottom:0;padding-right:24px;padding-left:24px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            style="background-color:transparent"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="min-width:100%;border-top:2px solid #ffffff"
                                                                                        valign="top">
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:#070707;padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table align="center" border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation">
                                                                            <tbody>
                                                                                <tr class="mceRow">
                                                                                    <td style="background-color:#070707;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                        valign="top">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="24"
                                                                                            width="100%"
                                                                                            style="table-layout:fixed"
                                                                                            role="presentation">
                                                                                            <colgroup>
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                            </colgroup>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                        class="mceColumn"
                                                                                                        valign="top"
                                                                                                        colspan="12"
                                                                                                        width="100%">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <table
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width=""
                                                                                                                            role="presentation"
                                                                                                                            class="mceClusterLayout">
                                                                                                                            <tbody>
                                                                                                                                <tr>
                                                                                                                                    <td style="padding-left:24px;padding-top:0;padding-right:24px"
                                                                                                                                        data-breakpoint="9"
                                                                                                                                        valign="top"
                                                                                                                                        class="mobileClass-9">
                                                                                                                                        <a href="https://instagram.com/nftes.es"
                                                                                                                                            style="display:block"
                                                                                                                                            target="_blank"><img
                                                                                                                                                width="40"
                                                                                                                                                style="border:0;width:40px;height:auto;max-width:100%;display:block"
                                                                                                                                                alt="Instagram icon"
                                                                                                                                                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Finstagram-outline-light-40.png?w=40&dpr=2"></a>
                                                                                                                                    </td>
                                                                                                                                    <td style="padding-left:24px;padding-top:0;padding-right:24px"
                                                                                                                                        data-breakpoint="9"
                                                                                                                                        valign="top"
                                                                                                                                        class="mobileClass-9">
                                                                                                                                        <a href="https://twitter.com/NFTes_oficial"
                                                                                                                                            style="display:block"
                                                                                                                                            target="_blank"><img
                                                                                                                                                width="40"
                                                                                                                                                style="border:0;width:40px;height:auto;max-width:100%;display:block"
                                                                                                                                                alt="Twitter icon"
                                                                                                                                                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Ftwitter-outline-light-40.png?w=40&dpr=2"></a>
                                                                                                                                    </td>
                                                                                                                                    <td style="padding-left:24px;padding-top:0;padding-right:24px"
                                                                                                                                        data-breakpoint="9"
                                                                                                                                        valign="top"
                                                                                                                                        class="mobileClass-9">
                                                                                                                                        <a href="https://nftes.es"
                                                                                                                                            style="display:block"
                                                                                                                                            target="_blank"><img
                                                                                                                                                width="40"
                                                                                                                                                style="border:0;width:40px;height:auto;max-width:100%;display:block"
                                                                                                                                                alt="Website icon"
                                                                                                                                                src="https://dim.mcusercontent.com/https/cdn-images.mailchimp.com%2Ficons%2Fsocial-block-v3%2Fblock-icons-v3%2Fwebsite-outline-light-40.png?w=40&dpr=2"></a>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:#ffffff;padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px"
                                                                        class="mceSpacing-24" valign="top">
                                                                        <table align="center" border="0" cellpadding="0"
                                                                            cellspacing="0" width="100%"
                                                                            role="presentation"
                                                                            id="section_79626901e0c183b60f0b910465faebb7">
                                                                            <tbody>
                                                                                <tr class="mceRow">
                                                                                    <td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                        valign="top">
                                                                                        <table border="0"
                                                                                            cellpadding="0"
                                                                                            cellspacing="12"
                                                                                            width="100%"
                                                                                            style="table-layout:fixed"
                                                                                            role="presentation">
                                                                                            <colgroup>
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                                <col span="1">
                                                                                            </colgroup>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0;padding-bottom:0"
                                                                                                        class="mceColumn"
                                                                                                        valign="top"
                                                                                                        colspan="12"
                                                                                                        width="100%">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            width="100%"
                                                                                                            role="presentation">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                                                                                        class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <img width="150"
                                                                                                                            style="width:150px;height:auto;max-width:100%;display:block"
                                                                                                                            alt="Logo"
                                                                                                                            src="https://dim.mcusercontent.com/cs/eb53e643056c7dc218f07793f/images/7428ba7c-d35f-55e8-8ca1-614b32d17fe8.png?w=150&dpr=2&rect=0%2C67%2C200%2C65">
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                                                                                        class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <div class="mceText"
                                                                                                                            style="font-size:12px;display:inline-block;width:100%">
                                                                                                                            <p
                                                                                                                                class="last-child">
                                                                                                                                <em>Copyright
                                                                                                                                    (C)
                                                                                                                                    2022
                                                                                                                                    NFTespaña.
                                                                                                                                    Todos
                                                                                                                                    los
                                                                                                                                    derechos
                                                                                                                                    reservados.</em><br>Estás
                                                                                                                                recibiendo
                                                                                                                                este
                                                                                                                                email
                                                                                                                                porque
                                                                                                                                has
                                                                                                                                rellenado
                                                                                                                                el
                                                                                                                                formulario
                                                                                                                                de
                                                                                                                                nuestro
                                                                                                                                sitio
                                                                                                                                web.<br><br>Nuestra
                                                                                                                                dirección
                                                                                                                                es:<br><span
                                                                                                                                    style="color:rgb(0, 0, 0);"><span
                                                                                                                                        style="font-size: 12px">Oviedo,
                                                                                                                                        Asturias
                                                                                                                                        33001,
                                                                                                                                        España</span></span><br><br>¿Quieres
                                                                                                                                modificar
                                                                                                                                cómo
                                                                                                                                quieres
                                                                                                                                recibir
                                                                                                                                los
                                                                                                                                emails?<br>Puedes
                                                                                                                                <a
                                                                                                                                    href="https://nftes.us14.list-manage.com/profile?u=eb53e643056c7dc218f07793f&id=6367263bec&e=[UNIQID]&c=4024237fc7">actualizar
                                                                                                                                    tus
                                                                                                                                    preferencias</a>
                                                                                                                                o
                                                                                                                                <a
                                                                                                                                    href="https://nftes.us14.list-manage.com/unsubscribe?u=eb53e643056c7dc218f07793f&id=6367263bec&e=[UNIQID]&c=4024237fc7">desuscribirte</a>
                                                                                                                            </p>
                                                                                                                        </div>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                                <tr>
                                                                                                                    <td class="mceSpacing-24"
                                                                                                                        align="center"
                                                                                                                        valign="top">
                                                                                                                        <table
                                                                                                                            align="center"
                                                                                                                            border="0"
                                                                                                                            cellpadding="0"
                                                                                                                            cellspacing="0"
                                                                                                                            width="100%"
                                                                                                                            role="presentation">
                                                                                                                            <tbody>
                                                                                                                                <tr
                                                                                                                                    class="mceRow">
                                                                                                                                    <td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px"
                                                                                                                                        valign="top">
                                                                                                                                        <table
                                                                                                                                            border="0"
                                                                                                                                            cellpadding="0"
                                                                                                                                            cellspacing="24"
                                                                                                                                            width="100%"
                                                                                                                                            style="table-layout:fixed"
                                                                                                                                            role="presentation">
                                                                                                                                            <colgroup>
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                                <col
                                                                                                                                                    span="1">
                                                                                                                                            </colgroup>
                                                                                                                                            <tbody>
                                                                                                                                            </tbody>
                                                                                                                                        </table>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </tbody>
                                                                                                                        </table>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            document.getElementById("copyToClipboard").addEventListener("click", function () {
                var input = document.getElementById("clipboardSource");
                input.select();
                var successful = document.execCommand("copy");
                if (successful) {
                    alert('Copied "' + input.value + '" to your clipboard.');
                } else {
                    throw new Error("Failed to copy text (verify caller was in the context of an event handler)");
                }
            });

            $('li.more > a').click(function () {
                var toToggle = $($(this).attr('data-to-toggle'));
                if (toToggle.is(':visible')) {
                    toToggle.slideUp('fast');
                    $(this).removeClass('is-active');
                    if ($('#awesomebar').find('.is-active').length < 1) {
                        $('#awesomebar').removeClass('sub-active');
                    }
                } else {
                    toToggle.slideDown('fast');
                    $(this).addClass('is-active');
                    $('#awesomebar').addClass('sub-active');
                }
                return false;
            });

        });
    </script>
    </body>

</html>
          `
        )
    },
    resetPassword: async (payLoad) => {
        console.log("payLoad", payLoad)
        return (`
       <p>Your reset email password otp is : ${payLoad.otp}</p>
       `)
    },
    testHtmlEmail: async (payLoad) => {
        return (`
       <p>Test email which show email is working fine.</p>
       `)
    },
}