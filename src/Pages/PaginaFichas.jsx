import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { useFichas } from '../hooks/useFichas';

export const PaginaFichas = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const { listFicha, cargando, crear, eliminar } = useFichas();

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

    const handleGuardar = async () => {
        await crear(form);
        setMostrarModal(false);
        setForm({ Codigo_Ficha: '', ID_Ficha: '', Instructor_Lider: '', Jornada: '', Curso: '', Ubicacion: '', Estado: 'Activo' });
    };

    const [form, setForm] = useState({
        Codigo_Ficha: '', ID_Ficha: '', Instructor_Lider: '', Jornada: '', Curso: '', Ubicacion: '', Estado: 'Activo'
    });

    return (
        <LayoutPrincipal
            seccionActiva="fichas"
            onNavegar={handleNavegar}
            nombreUsuario="Junior García"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo="Lista de Fichas"
                    columnas={columnas}
                    filas={listFicha}
                    onAñadir={() => setMostrarModal(true)}
                    textoBotonAñadir="+ Añadir Ficha"
                    mostrarAcciones={true}
                    onEditar={(fila) => console.log('Editar', fila)}
                    onEliminar={(fila) => eliminar(fila.ID_Ficha)}
                />
            )}

            <ModalFormulario
                titulo="Añadir Ficha"
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={() => setMostrarModal(false)}
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
