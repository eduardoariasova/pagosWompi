// PAQUETES
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const router = require('express').Router();
const crypto = require('crypto'); // no tenemos que instalar. Paquete de criptografía. 

// LAVES WOMPI
const llavePublica = process.env.LLAVEPUBLICA;
const llavePrivada = process.env.LLAVEPRIVADA;
const eventos      = process.env.EVENTOS;
const integridad   = process.env.INTEGRIDAD;


router.route("/obtener-configa")
.post( async function(req, res){
    
    try{
        const {precio} = req.body.params;
        //console.log("precio obtenido: ", precio);
        

        const urlRetorno   = "https://eduardoarias.co/retorno-wompi"; 
        const moneda       = "COP";
        const centavos     = Math.round(precio * 100);
        
        const referencia   = "id_eduardo"; // decirle a wompi quien ejecuto el pago. 

        const integritySignature = crypto
        .createHash('sha256') // crear hash usando algoritmo sha-256
        .update(`${referencia}${centavos}${moneda}${integridad}`) // unir todos los valores en un solo String
        .digest('hex') // convertir en hexa.



        return res.json({
            publicKey: llavePublica,
            currency: moneda,
            amountInCents: centavos,
            reference: referencia,
            integritySignature,
            redirectURL: urlRetorno,
        });
    }
    catch(err){
        console.log("error al obtener config: ", err);
        return res.json({err: err});
    }
});


module.exports = router;