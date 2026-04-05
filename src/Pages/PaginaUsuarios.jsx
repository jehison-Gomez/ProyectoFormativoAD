import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { SelectOpcion } from '../Components/atoms/SelectOpcion/SelectOpcion';
import { useUsuarios } from '../hooks/useUsuarios';
import { useRoles } from '../hooks/useRoles';

export const PaginaUsuarios = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const { listUsuario, cargando, usuarioEditando, crear, actualizar, eliminar, seleccionarParaEditar, limpiarEdicion } = useUsuarios();
    const { listRoles, getNombreRol } = useRoles();

    const [form, setForm] = useState({
        Nombre: '', Apellidos: '', Correo: '', Contrasena: '', Estado: 'Activo', ID_Rol: ''
    });

    useEffect(() => {
        if (usuarioEditando) {
            setForm({
                Nombre: usuarioEditando.Nombre || '',
                Apellidos: usuarioEditando.Apellidos || '',
                Correo: usuarioEditando.Correo || '',
                Contrasena: '', // No cargamos la contraseña por seguridad
                Estado: usuarioEditando.Estado || 'Activo',
                ID_Rol: usuarioEditando.ID_Rol || ''
            });
        } else {
            setForm({
                Nombre: '', Apellidos: '', Correo: '', Contrasena: '', Estado: 'Activo', ID_Rol: ''
            });
        }
    }, [usuarioEditando]);

    const columnas = [
        { key: 'ID_Usuario', label: 'ID' },
        { key: 'Nombre', label: 'Nombre' },
        { key: 'Apellidos', label: 'Apellidos' },
        { key: 'Correo', label: 'Correo' },
        { key: 'Estado', label: 'Estado' },
        { key: 'Nombre_Rol', label: 'Rol' }
    ];

    const filasConNombre = listUsuario.map(u => ({
        ...u,
        Nombre_Rol: getNombreRol(u.ID_Rol)
    }));

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`);
    };

    const handleAñadir = () => {
        limpiarEdicion();
        setMostrarModal(true);
    };

    const handleEditar = (fila) => {
        seleccionarParaEditar(fila);
        setMostrarModal(true);
    };

    const handleGuardar = async () => {
        const dataToSave = {
            ...form,
            ID_Rol: parseInt(form.ID_Rol) || 0
        };

        if (usuarioEditando) {
            // Remueve la contraseña si está vacía
            if (!dataToSave.Contrasena) {
                delete dataToSave.Contrasena;
            }
            await actualizar(usuarioEditando.ID_Usuario, dataToSave);
        } else {
            await crear(dataToSave);
        }
        setMostrarModal(false);
        limpiarEdicion();
    };

    const handleCerrarModal = () => {
        setMostrarModal(false);
        limpiarEdicion();
    };

    return (
        <LayoutPrincipal
            seccionActiva="usuarios"
            onNavegar={handleNavegar}
            nombreUsuario="Admin"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo="Lista de Usuarios"
                    columnas={columnas}
                    filas={filasConNombre}
                    onAñadir={handleAñadir}
                    textoBotonAñadir="+ Añadir Usuario"
                    mostrarAcciones={true}
                    onEditar={handleEditar}
                    onEliminar={(fila) => eliminar(fila.ID_Usuario)}
                />
            )}

            <ModalFormulario
                titulo={usuarioEditando ? "Editar Usuario" : "Añadir Usuario"}
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={handleCerrarModal}
            >
                <CampoFormulario label="Nombre" value={form.Nombre} onChange={v => setForm({ ...form, Nombre: v })} />
                <CampoFormulario label="Apellidos" value={form.Apellidos} onChange={v => setForm({ ...form, Apellidos: v })} />
                <CampoFormulario label="Correo Electrónico" type="email" value={form.Correo} onChange={v => setForm({ ...form, Correo: v })} />
                <CampoFormulario label="Contraseña" type="password" value={form.Contrasena} onChange={v => setForm({ ...form, Contrasena: v })} />
                
                <SelectOpcion 
                    label="Estado" 
                    opciones={['Activo', 'Inactivo']} 
                    value={form.Estado} 
                    onChange={v => setForm({ ...form, Estado: v })} 
                />

                <SelectOpcion
                    label="Rol"
                    opciones={listRoles.map(r => ({ valor: r.ID_Rol, label: r.Nombre_Rol }))}
                    value={form.ID_Rol}
                    onChange={val => setForm({ ...form, ID_Rol: val })}
                />
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
