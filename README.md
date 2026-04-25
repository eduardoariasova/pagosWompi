

# 💳 Integración de pagos con Wompi (Node.js + Web)

Este repositorio es el acompañamiento del video donde explico cómo integrar pagos reales con Wompi en una aplicación web usando **Node.js**.

---

## 🎬 Video completo en YouTube
👉 https://youtu.be/ciy3FLmK3Sc

---

## 📝 Post detallado (paso a paso)
👉 https://eduardoarias.co/como-integrar-wompi-node-js-pagos-reales-en-tu-app/

---

## 🚀 ¿Qué vas a aprender?

- Cómo funciona un flujo de pago real
- Crear configuración dinámica desde backend (Node.js)
- Generar firma de seguridad (integritySignature)
- Integrar el widget de Wompi en frontend
- Manejar callbacks y webhooks
- Flujo completo: usuario → pago → confirmación

---

## 🧠 Tecnologías usadas

- Node.js
- Express
- React (frontend)
- Wompi Checkout
- SHA-256 (firma de seguridad)

---

## ⚙️ Flujo de pago explicado

1. El frontend solicita configuración al backend
2. El backend genera:
   - referencia
   - monto en centavos
   - firma de seguridad
3. Se envía al frontend
4. Se renderiza el widget de Wompi
5. Usuario realiza el pago
6. Wompi envía:
   - Callback (frontend)
   - Webhook (backend)

---

## 📦 Estructura del proyecto

```
backend/
  └── routes/
      └── wompi.js

frontend/
  └── components/
      └── WidgetWompi.jsx
```

---

## ⚠️ Importante

Este proyecto es educativo, pero basado en un flujo real de producción.

Antes de usar en producción:
- Validar firma de webhook
- Manejar estados de pago correctamente
- Guardar transacciones en base de datos
- Manejar errores y reintentos

---

## 🌎 Sígueme en redes

👉 https://eduardoarias.co/links/

[![Instagram](https://img.shields.io/badge/Instagram-@eduardoarias.co-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/eduardoarias.co/)

---

## ⭐ Apoya el proyecto

Si este contenido te ayudó:

- Dale ⭐ al repositorio
- Suscríbete al canal
- Comparte el video

---

## 📩 Contacto

Si necesitas ayuda profesional o quieres integrar pagos en tu proyecto:

👉 https://eduardoarias.co/links/

---

🔥 Hecho con experiencia real construyendo aplicaciones con pagos en producción.