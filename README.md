# 🎣 Proyecto Web - FishShop

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.0.0-black?logo=next.js&style=for-the-badge" alt="Next.js">
  <img src="https://img.shields.io/badge/FastAPI-0.95.0-009688?logo=fastapi&style=for-the-badge" alt="FastAPI">
  <img src="https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript&style=for-the-badge" alt="TypeScript">
  <img src="https://img.shields.io/badge/SQLAlchemy-2.0.0-red?logo=python&style=for-the-badge" alt="SQLAlchemy">
</div>

FishShop es una aplicación web desarrollada con **Next.js (App Router)** para el frontend y **FastAPI** para el backend. Permite gestionar productos, visualizar detalles, administrar stock, ver el carrito de compras, y ofrece un panel administrativo completo.

> **Base de datos**: El proyecto incluye `fishapi_db.sql` en la raíz del backend con la estructura inicial de la base de datos.

---

## 📁 Estructura del Proyecto

### 🔹 Frontend - `perezcortes-proyectoweb-fishshop/` (Next.js 14)

```
perezcortes-proyectoweb-fishshop/
├── public/
├── src/
│   ├── app/                      # Rutas y páginas del App Router
│   │   └── (admin)/admin/        # Rutas protegidas del panel de administración
│   ├── components/               # Componentes reutilizables (Card, Sidebar, etc.)
│   ├── context/                  # Contexto para carrito de compras
│   ├── styles/                   # Estilos CSS y CSS Modules
│   └── types/                    # Tipos TypeScript (ej. producto.ts)
```

### 🔹 Backend - `perezcortes-fishapi/` (FastAPI)

```
perezcortes-fishapi/
├── fishapi_db.sql                # Archivo SQL con estructura de la base de datos
├── app/
│   ├── crud.py                   # Funciones CRUD
│   ├── database.py               # Conexión a la base de datos
│   ├── main.py                   # Punto de entrada de la API
│   ├── models.py                 # Modelos SQLAlchemy
│   ├── schemas.py                # Esquemas Pydantic
│   └── routes/
│       └── productos.py          # Endpoints relacionados a productos
```

---

## 🚀 Instalación y Ejecución

### ✅ Backend (FastAPI)

1. Crear entorno virtual e instalar dependencias:
```bash
cd perezcortes-fishapi
python -m venv venv
source venv/bin/activate  # en Windows: venv\Scripts\activate
pip install -r requirements.txt
```

2. Configurar base de datos:
```bash
sqlite3 fishapi.db < fishapi_db.sql
```

3. Ejecutar el servidor:
```bash
uvicorn app.main:app --reload
```

4. Verifica en [http://localhost:8000/docs](http://localhost:8000/docs) para acceder a la documentación interactiva (Swagger UI).

---

### ✅ Frontend (Next.js)

1. Instalar dependencias:
```bash
cd perezcortes-proyectoweb-fishshop
npm install
```

2. Configurar variables de entorno (crear archivo `.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. Ejecutar servidor de desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 🛠️ Funcionalidades

### 🛒 Cliente:
- Catálogo de productos con cards interactivas
- Carrito de compras con Context API
- Notificaciones con react-toastify
- Diseño responsive para móviles

### 🖥️ Panel de Administración:
- CRUD completo de productos
- Gestión de inventario en tiempo real
- Dashboard con estadísticas
- Navegación lateral con Sidebar

---

## 🧩 Stack Tecnológico

<div align="center">
  <img src="https://img.shields.io/badge/-Next.js-000?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/-FastAPI-009688?logo=fastapi" alt="FastAPI">
  <img src="https://img.shields.io/badge/-SQLAlchemy-red?logo=python" alt="SQLAlchemy">
  <img src="https://img.shields.io/badge/-React%20Toastify-FFCA28?logo=react" alt="React Toastify">
  <img src="https://img.shields.io/badge/-CSS%20Modules-1572B6?logo=css3" alt="CSS Modules">
</div>

---

## 🌐 Endpoints API

| Método | Endpoint            | Descripción               | 
|--------|---------------------|---------------------------|
| GET    | `/productos/`       | Listar productos          |
| POST   | `/productos/`       | Crear producto            | 
| PUT    | `/productos/{id}`   | Actualizar producto       | 
| DELETE | `/productos/{id}`   | Eliminar producto         | 

---

## 📦 Despliegue

### Opciones recomendadas:

- **Frontend**: 
  [![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://vercel.com/docs)
  [![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify)](https://www.netlify.com/)

- **Backend**: 
  [![Render](https://img.shields.io/badge/Render-Deploy-46E3B7)](https://render.com/)
  [![Railway](https://img.shields.io/badge/Railway-Deploy-0B0D0E?logo=railway)](https://railway.app/)
  [![Docker](https://img.shields.io/badge/Docker-Deploy-2496ED?logo=docker)](https://www.docker.com/)

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos por [@Perezcortes](https://github.com/tu-usuario).  
Todos los derechos reservados © 2025.

---

## 💬 Contribuciones

¡Bienvenidas las contribuciones! Sigue estos pasos:

1. Haz fork del proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Add some feature'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tu-usuario/fishshop/pulls)

---

<div align="center">
  <img src="https://img.shields.io/badge/🎣-Happy%20Fishing!-blue" alt="Happy Fishing">
</div>
