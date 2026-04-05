import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { useFichas } from '../hooks/useFichas';

export const PaginaFichas = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const { listFicha, cargando, fichaEditando, crear, actualizar, eliminar, seleccionarParaEditar, limpiarEdicion } = useFichas();

    const [form, setForm] = useState({
        Codigo_Ficha: '', ID_Ficha: '', Instructor_Lider: '', Jornada: '', Curso: '', Ubicacion: '', Estado: 'Activo'
    });

    useEffect(() => {
        if (fichaEditando) {
            setForm({
                Codigo_Ficha: fichaEditando.Codigo_Ficha || '',
                ID_Ficha: fichaEditando.ID_Ficha || '',
                Instructor_Lider: fichaEditando.Instructor_Lider || '',
                Jornada: fichaEditando.Jornada || '',
                Curso: fichaEditando.Curso || '',
                Ubicacion: fichaEditando.Ubicacion || '',
                Estado: fichaEditando.Estado || 'Activo'
            });
        } else {
            setForm({
                Codigo_Ficha: '', ID_Ficha: '', Instructor_Lider: '', Jornada: '', Curso: '', Ubicacion: '', Estado: 'Activo'
            });
        }
    }, [fichaEditando]);

    const columnas = [
        { key: 'Codigo_Ficha', label: 'Código' },
        { key: 'ID_Ficha', label: 'ID Ficha' },
        { key: 'Instructor_Lider', label: 'Instructor líder' },
        { key: 'Jornada', label: 'Jornada' },
        { key: 'Curso', label: 'Curso' },
        { key: 'Ubicacion', label: 'Ubicación' },
        { key: 'Estado', label: 'Estado' }
    ];

    const handleNavegar = (ruta) => {
        navigate(`/app/gestion/${ruta}`);
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
        if (fichaEditando) {
            await actualizar(fichaEditando.ID_Ficha, form);
        } else {
            await crear(form);
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
            seccionActiva="fichas"
            onNavegar={handleNavegar}
            nombreUsuario="Admin"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo="Lista de Fichas"
                    columnas={columnas}
                    filas={listFicha}
                    onAñadir={handleAñadir}
                    textoBotonAñadir="+ Añadir Ficha"
                    mostrarAcciones={true}
                    onEditar={handleEditar}
                    onEliminar={(fila) => eliminar(fila.ID_Ficha)}
                />
            )}

            <ModalFormulario
                titulo={fichaEditando ? "Editar Ficha" : "Añadir Ficha"}
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={handleCerrarModal}
            >
                <CampoFormulario label="Código" value={form.Codigo_Ficha} onChange={v => setForm({ ...form, Codigo_Ficha: v })} />
                <CampoFormulario label="ID Ficha" value={form.ID_Ficha} onChange={v => setForm({ ...form, ID_Ficha: v })} />
                <CampoFormulario label="Instructor Líder" value={form.Instructor_Lider} onChange={v => setForm({ ...form, Instructor_Lider: v })} />
                <CampoFormulario label="Jornada" value={form.Jornada} onChange={v => setForm({ ...form, Jornada: v })} />
                <CampoFormulario label="Curso" value={form.Curso} onChange={v => setForm({ ...form, Curso: v })} />
                <CampoFormulario label="Ubicación" value={form.Ubicacion} onChange={v => setForm({ ...form, Ubicacion: v })} />
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
