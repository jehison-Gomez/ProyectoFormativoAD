import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { SelectOpcion } from '../Components/atoms/SelectOpcion/SelectOpcion';
import { CheckboxCampo } from '../Components/atoms/CheckboxCampo/CheckboxCampo';
import { useMateriales } from '../hooks/useMateriales';

export const PaginaMateriales = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const idBodega = params.get('bodega');

    const [mostrarModal, setMostrarModal] = useState(false);
    const { listMaterial, cargando, materialEditando, crear, actualizar, eliminar, seleccionarParaEditar, limpiarEdicion } = useMateriales(idBodega);

    const [form, setForm] = useState({
        Codigo_SENA: '', Nombre_Material: '', Stock_Minimo: '', Stock_Total: '', Unida_Medida: '', Descripcion: '', Fecha_Vencimiento: '', FK_ID_Bodega: ''
    });

    useEffect(() => {
        if (materialEditando) {
            setForm({
                Codigo_SENA: materialEditando.Codigo_SENA || '',
                Nombre_Material: materialEditando.Nombre_Material || '',
                Stock_Minimo: materialEditando.Stock_Minimo || '',
                Stock_Total: materialEditando.Stock_Total || '',
                Unida_Medida: materialEditando.Unida_Medida || '',
                Descripcion: materialEditando.Descripcion || '',
                Fecha_Vencimiento: materialEditando.Fecha_Vencimiento || '',
                FK_ID_Bodega: materialEditando.FK_ID_Bodega || ''
            });
        } else {
            setForm({
                Codigo_SENA: '', Nombre_Material: '', Stock_Minimo: '', Stock_Total: '', Unida_Medida: '', Descripcion: '', Fecha_Vencimiento: '', FK_ID_Bodega: ''
            });
        }
    }, [materialEditando]);

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
            Stock_Minimo: parseInt(form.Stock_Minimo) || 0,
            Stock_Total: parseInt(form.Stock_Total) || 0,
            FK_ID_Bodega: parseInt(form.FK_ID_Bodega) || 0
        };

        if (materialEditando) {
            await actualizar(materialEditando.ID_Material, dataToSave);
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
            seccionActiva="materiales"
            onNavegar={handleNavegar}
            nombreUsuario="Admin"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo={idBodega ? `Materiales de Bodega #${idBodega}` : "Lista de Materiales"}
                    columnas={columnas}
                    filas={listMaterial}
                    onVerTodas={idBodega ? () => navigate('/app/materiales') : undefined}
                    onAñadir={handleAñadir}
                    textoBotonAñadir="+ Añadir Elemento"
                    mostrarAcciones={true}
                    onEditar={handleEditar}
                    onEliminar={(fila) => eliminar(fila.ID_Material)}
                />
            )}

            <ModalFormulario
                titulo={materialEditando ? "Editar Elemento" : "Añadir Elemento"}
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={handleCerrarModal}
            >
                <CampoFormulario label="Código SENA" value={form.Codigo_SENA} onChange={v => setForm({ ...form, Codigo_SENA: v })} />
                <CampoFormulario label="Nombre" value={form.Nombre_Material} onChange={v => setForm({ ...form, Nombre_Material: v })} />
                <CampoFormulario label="Stock Mínimo" type="number" value={form.Stock_Minimo} onChange={v => setForm({ ...form, Stock_Minimo: v })} />
                <CampoFormulario label="Stock Total" type="number" value={form.Stock_Total} onChange={v => setForm({ ...form, Stock_Total: v })} />
                <CampoFormulario label="Unidad de Medida" value={form.Unida_Medida} onChange={v => setForm({ ...form, Unida_Medida: v })} />
                <CampoFormulario label="Descripción" value={form.Descripcion} onChange={v => setForm({ ...form, Descripcion: v })} />
                <CampoFormulario label="Fecha Vencimiento" type="date" value={form.Fecha_Vencimiento} onChange={v => setForm({ ...form, Fecha_Vencimiento: v })} />
                <CampoFormulario label="ID Bodega" type="number" value={form.FK_ID_Bodega} onChange={v => setForm({ ...form, FK_ID_Bodega: v })} />
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
