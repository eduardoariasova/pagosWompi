// PAQUETES
import React, { useEffect, useMemo, useRef, useState } from "react";


function WidgetWompi({wompiConfig, mostrarEstado = true, alCargar, alError }){

    

    // useRef: guarda una referencia que no proboca rerender
    const contenedorRef = useRef(null); // guardar el div real del DOM donde se pone el script de wompi
    const scriptRef     = useRef(null); // guarda el script de wompi que se crea dinamicamente
    const timeoutRef    = useRef(null); // guarda el id del settimeout para luego limpiarlo

    const [error, setError] = useState("");

    const normalizar = useMemo(() => {
        if(!wompiConfig) return null;
        console.log("wompiconfig: ", wompiConfig);
        return{
            amountInCents: wompiConfig.amountInCents,
            currency: wompiConfig.currency || "COP",
            customerEmail: wompiConfig.customerEmail || "",
            signature: wompiConfig.integritySignature || "",
            publicKey: wompiConfig.publicKey || "",
            reference: wompiConfig.reference || "",
            redirectUrl: wompiConfig.redirectURL || "",
            // ESTOS DATOS EN ADELANTE NO SON NECESARIOS PARA LA TRANSACCION. 
            expirationTime: wompiConfig.expirationTime || "",
            taxInCents: wompiConfig.taxInCents || null,
            shippingAddress: wompiConfig.shippingAddress || null,
            installments: wompiConfig.installments || null,
            extraAttributes: wompiConfig.extraAttributes || {},
        };
    }, [wompiConfig]);



    useEffect( () => {
        const contenedor = contenedorRef.current;
        if(!contenedor) return undefined;

        contenedor.innerHTML = "";
        setError("");


        const {
            amountInCents,
            currency,
            customerEmail,
            // entorno no está aqui, pero si viene en wompiConfig
            signature,
            publicKey,
            reference,
            redirectUrl,
            // de aqui abajo no son necesarios para el pago.
            expirationTime,
            taxInCents,
            shippingAddress,
            installments,
            extraAttributes,
        } = normalizar;

        console.log("publicKey: ", publicKey);

        // PASO 1: CREAR EL ELEMENTO SCRIPT VACIO
        const script = document.createElement("script");
        // PASO 2: PONER EL SRC AL SCRIPT
        script.src = "https://checkout.wompi.co/widget.js";
        script.async = true;

        // DATOS NECESARIOS DE LA TRANSACCION
        script.setAttribute("data-render", "button");
        script.setAttribute("data-public-key", publicKey);
        script.setAttribute("data-currency", currency);
        script.setAttribute("data-amount-in-cents", String(amountInCents));
        script.setAttribute("data-reference", reference);
        script.setAttribute("data-signature:integrity", signature);

        // OPCIONALES Y QUE NO TENEMOS
        if (redirectUrl) { script.setAttribute("data-redirect-url", redirectUrl); }
        if (customerEmail) { script.setAttribute("data-customer-data:email", customerEmail); }
        if (expirationTime) { script.setAttribute("data-expiration-time", expirationTime); }

        if (taxInCents && typeof taxInCents === "object") {
        Object.entries(taxInCents).forEach(([clave, valor]) => {
            if (valor !== undefined && valor !== null && valor !== "") {
            script.setAttribute(`data-tax-in-cents:${clave}`, String(valor));
            }
        });
        }

        if (shippingAddress && typeof shippingAddress === "object") {
        Object.entries(shippingAddress).forEach(([clave, valor]) => {
            if (valor !== undefined && valor !== null && valor !== "") {
            script.setAttribute(`data-shipping-address:${clave}`, String(valor));
            }
        });
        }

        if (installments) { script.setAttribute("data-installments", String(installments)); }

        if (extraAttributes && typeof extraAttributes === "object") {
        Object.entries(extraAttributes).forEach(([clave, valor]) => {
            if (valor !== undefined && valor !== null && valor !== "") {
            script.setAttribute(clave, String(valor));
            }
        });
        }


        // PASO 3: REGISTRAMOS ONLOAD Y ONERROR
        script.onload = () => {
            setError("");
            if(typeof alCargar === "function") alCargar();
        }

        script.onerror = () => {
            const mensaje = "No fue posible cargar el script";
            setError(mensaje);
            if(typeof alError === "function") alError();
        }



        // PASO 4: PONER EL SCRIPT DENTRO DEL DOM
        contenedor.appendChild(script);
        scriptRef.current = script;




        // limpieza
        return () => {
            if(scriptRef.current && scriptRef.current.parentNode) {scriptRef.current.parentNode.removeChild(scriptRef.current);}
            contenedor.innerHTML = "";
        }


        


    }, [normalizar, alCargar, alError]);




    return(
        <div className="mt-3 w-100 wompi-boton">
            {mostrarEstado && !error ?(<div className="small text-muted mb-2">{"Cargando métodos de pago..."}</div>) : null}
            {mostrarEstado && error ?( <div className="small text-danger mb-2">{"No fue posible cargar wompi."}</div> ) : null}

            <div ref={contenedorRef}></div>
        </div>
    );
}


export default WidgetWompi;