import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { SelectOpcion } from '../Components/atoms/SelectOpcion/SelectOpcion';
import { CheckboxCampo } from '../Components/atoms/CheckboxCampo/CheckboxCampo';
import { useMateriales } from '../hooks/useMateriales';

export const PaginaMateriales = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const { listMaterial, cargando, crear, eliminar } = useMateriales();

    const columnas = [
        { key: 'ID_Material', label: 'ID' },
        { key: 'Codigo_SENA', label: 'Código' },
        { key: 'Nombre_Material', label: 'Elemento' },
        { key: 'Stock_Minimo', label: 'Stock Min' },
        { key: 'Stock_Total', label: 'Stock Tol' },
        { key: 'Unida_Medida', label: 'Unidad' },
        { key: 'Descripcion', label: 'Descripcion' },
        { key: 'Fecha_Vencimiento', label: 'Fecha Venc' },
        { key: 'FK_ID_Bodega', label: 'Bodega' }
    ];

    const handleNavegar = (ruta) => {
        navigate(`/app/gestion/${ruta}`);
    };

    const handleGuardar = async () => {
        await crear(form);
        setMostrarModal(false);
        setForm({
            Elemento: '', Codigo_Material: '', Encargado: '', Area: '', Ubicacion: '', Unidad: '', Categoria: '', Caducidad: false
        });
    };

    const [form, setForm] = useState({
        Elemento: '', Codigo_Material: '', Encargado: '', Area: '', Ubicacion: '', Unidad: '', Categoria: '', Caducidad: false
    });

    return (
        <LayoutPrincipal
            seccionActiva="materiales"
            onNavegar={handleNavegar}
            nombreUsuario="Junior García"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo="Lista de Materiales"
                    columnas={columnas}
                    filas={listMaterial}
                    onAñadir={() => setMostrarModal(true)}
                    textoBotonAñadir="+ Añadir Elemento"
                    mostrarAcciones={true}
                    onEditar={(fila) => console.log('Editar', fila)}
                    onEliminar={(fila) => eliminar(fila.ID_Material)}
                />
            )}

            <ModalFormulario
                titulo="Añadir Elemento"
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={() => setMostrarModal(false)}
            >
                <CampoFormulario label="Nombre" value={form.Elemento} onChange={v => setForm({ ...form, Elemento: v })} />
                <CampoFormulario label="Código" value={form.Codigo_Material} onChange={v => setForm({ ...form, Codigo_Material: v })} />
                <CampoFormulario label="Responsable" value={form.Encargado} onChange={v => setForm({ ...form, Encargado: v })} />
                <CampoFormulario label="Área" value={form.Area} onChange={v => setForm({ ...form, Area: v })} />
                <CampoFormulario label="Lugar de Almacenamiento" value={form.Ubicacion} onChange={v => setForm({ ...form, Ubicacion: v })} />
                <CampoFormulario label="Unidad de medida" value={form.Unidad} onChange={v => setForm({ ...form, Unidad: v })} />
                <SelectOpcion label="Categoría" opciones={['Consumible', 'Herramienta', 'Otro']} value={form.Categoria} onChange={v => setForm({ ...form, Categoria: v })} />
                <CheckboxCampo label="¿Cuenta con Fecha de Caducidad?" checked={form.Caducidad} onChange={v => setForm({ ...form, Caducidad: v })} />
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
