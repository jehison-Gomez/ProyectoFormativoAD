import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { SelectOpcion } from '../Components/atoms/SelectOpcion/SelectOpcion';
import { useUsuarios } from '../hooks/useUsuarios';

export const PaginaUsuarios = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const { listUsuario, cargando, crear, eliminar } = useUsuarios();

    const columnas = [
        { key: 'ID_Usuario', label: 'ID' },
        { key: 'Nombre', label: 'Nombre' },
        { key: 'Apellidos', label: 'Apellidos' },
        { key: 'Correo', label: 'Correo' },
        { key: 'Estado', label: 'Estado' },
        { key: 'ID_Rol', label: 'Rol' }
    ];

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`);
    };

    const handleGuardar = async () => {
        await crear(form);
        setMostrarModal(false);
        setForm({
            Nombre: '', Rol: '', Documento: '', Email: '', Area: '', Estado: 'Activo'
        });
    };

    const [form, setForm] = useState({
        Nombre: '', Rol: '', Documento: '', Email: '', Area: '', Estado: 'Activo'
    });

    return (
        <LayoutPrincipal
            seccionActiva="usuarios"
            onNavegar={handleNavegar}
            nombreUsuario="Junior García"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo="Lista de Usuarios"
                    columnas={columnas}
                    filas={listUsuario}
                    onAñadir={() => setMostrarModal(true)}
                    textoBotonAñadir="+ Añadir Usuario"
                    mostrarAcciones={true}
                    onEditar={(fila) => console.log('Editar', fila)}
                    onEliminar={(fila) => eliminar(fila.ID_Usuario)}
                />
            )}

            <ModalFormulario
                titulo="Añadir Usuario"
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={() => setMostrarModal(false)}
            >
                <CampoFormulario label="Nombre" value={form.Nombre} onChange={v => setForm({ ...form, Nombre: v })} />
                <SelectOpcion label="Rol" opciones={['Administrador', 'Instructor', 'Encargado', 'Vocero']} value={form.Rol} onChange={v => setForm({ ...form, Rol: v })} />
                <CampoFormulario label="Número de Documento" value={form.Documento} onChange={v => setForm({ ...form, Documento: v })} />
                <CampoFormulario label="Email" value={form.Email} onChange={v => setForm({ ...form, Email: v })} />
                <CampoFormulario label="Área" value={form.Area} onChange={v => setForm({ ...form, Area: v })} />
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
