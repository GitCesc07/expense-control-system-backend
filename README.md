# Expense Control System - Backend API

Sistema de control de gastos personales con arquitectura modular basada en Node.js, Express y TypeScript.

## 🚀 Características

- **API REST** construida con Express.js
- **TypeScript** para tipado estático y mejor desarrollo
- **Arquitectura modular** con separación de responsabilidades
- **CORS configurado** para frontend específico
- **Validación de datos** con express-validator
- **Logging** con Morgan
- **Gestión de variables de entorno** con dotenv

## 📁 Estructura del Proyecto

```
system-backend/
├── src/
│   ├── config/           # Configuraciones (CORS, base de datos, etc.)
│   ├── database/         # Configuración y conexión a base de datos
│   ├── modules/          # Módulos de la aplicación
│   │   ├── accounts/     # Gestión de cuentas
│   │   ├── categories/   # Categorías de gastos
│   │   ├── creditCard/   # Tarjetas de crédito
│   │   ├── creditCardHistoryDetails/  # Historial de tarjetas
│   │   ├── creditCardPayment/         # Pagos de tarjetas
│   │   ├── debts/        # Deudas
│   │   ├── detailsDebts/ # Detalles de deudas
│   │   ├── motion/       # Movimientos
│   │   └── movementLimits/  # Límites de movimientos
│   ├── utils/            # Utilidades compartidas
│   ├── index.ts          # Punto de entrada
│   └── server.ts         # Configuración del servidor Express
├── dist/                 # Código compilado
├── .env                  # Variables de entorno
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## 🛠️ Tecnologías

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Superset de JavaScript
- **pnpm** - Gestor de paquetes
- **Morgan** - Middleware de logging
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Gestión de variables de entorno
- **express-validator** - Validación de datos

## 📋 Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (recomendado) o npm
- TypeScript

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd expense-control-system/system-backend
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
# Edita .env con tus configuraciones
```

## 🔧 Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```env
PORT=4000
FRONTEND_URL=http://localhost:3000
FRONTEND_URL_PRODUCCTION=https://tu-dominio.com
# Agrega otras variables de base de datos o servicios aquí
```

## 🏃‍♂️ Ejecución

### Modo Desarrollo
```bash
# Ejecutar con nodemon y reinicio automático
pnpm run dev

# Ejecutar específicamente para API
pnpm run dev:api
```

### Modo Producción
```bash
# Compilar TypeScript
pnpm run build

# Ejecutar versión compilada
pnpm start
```

## 📚 Módulos Disponibles

### Accounts (Cuentas)
- Gestión de cuentas de usuario
- Endpoint: `/api/accounts`

### Categories (Categorías)
- Clasificación de gastos e ingresos

### Credit Card (Tarjetas de Crédito)
- Gestión de tarjetas de crédito
- Historial de transacciones
- Gestión de pagos

### Debts (Deudas)
- Control de deudas
- Detalles y seguimiento

### Motion (Movimientos)
- Registro de transacciones
- Límites y control

## 🏗️ Arquitectura

El proyecto sigue una arquitectura modular con:

- **Controllers**: Lógica de negocio y manejo de requests
- **Models**: Definición de datos y estructuras
- **Repository**: Acceso a datos y persistencia
- **Services**: Lógica de negocio compleja
- **Routes**: Definición de endpoints y middleware

## 🔌 API Endpoints

### Accounts
- `GET /api/accounts` - Obtener todas las cuentas

*(Más endpoints serán agregados según se desarrollen los módulos)*

## 🧪 Testing

```bash
pnpm test
```

## 📝 Scripts Disponibles

- `pnpm dev` - Servidor en modo desarrollo
- `pnpm dev:api` - Servidor API en modo desarrollo
- `pnpm build` - Compilar TypeScript a JavaScript
- `pnpm start` - Ejecutar en modo producción
- `pnpm test` - Ejecutar tests

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo licencia ISC.

## 🔍 Estado del Proyecto

El proyecto está en desarrollo activo. Actualmente implementado:

- ✅ Configuración básica del servidor
- ✅ Estructura modular
- ✅ Módulo de cuentas básico
- 🔄 Desarrollo de otros módulos en progreso

---

**Nota**: Este es el backend del sistema. Para una experiencia completa, asegúrate de también configurar el frontend correspondiente.