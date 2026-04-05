import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { useBodegas } from '../hooks/useBodegas';

export const PaginaBodegas = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const idArea = params.get('area');

    const [mostrarModal, setMostrarModal] = useState(false);
    const { listBodega, cargando, bodegaEditando, crear, actualizar, eliminar, seleccionarParaEditar, limpiarEdicion } = useBodegas(idArea);

    const [form, setForm] = useState({
        Nombre_Bodega: '', FK_ID_Area: ''
    });

    useEffect(() => {
        if (bodegaEditando) {
            setForm({
                Nombre_Bodega: bodegaEditando.Nombre_Bodega || '',
                FK_ID_Area: bodegaEditando.FK_ID_Area || ''
            });
        } else {
            setForm({ Nombre_Bodega: '', FK_ID_Area: idArea || '' });
        }
    }, [bodegaEditando, idArea]);

    const columnas = [
        { key: 'ID_Bodega', label: 'ID Bodega' },
        { key: 'Nombre_Bodega', label: 'Nombre' },
        { key: 'FK_ID_Area', label: 'ID Area' }
    ];

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`);
    };

    const handleVerMateriales = (fila) => {
        navigate(`/app/materiales?bodega=${fila.ID_Bodega}`);
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
        const idAreaParseado = idArea ? parseInt(idArea) : (parseInt(form.FK_ID_Area) || form.FK_ID_Area);
        
        if (bodegaEditando) {
            await actualizar(bodegaEditando.ID_Bodega, {
                Nombre_Bodega: form.Nombre_Bodega,
                FK_ID_Area: idAreaParseado
            });
        } else {
            await crear({
                Nombre_Bodega: form.Nombre_Bodega,
                FK_ID_Area: idAreaParseado
            });
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
            seccionActiva="bodegas"
            onNavegar={handleNavegar}
            nombreUsuario="Admin"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo={idArea ? `Bodegas del Área #${idArea}` : "Lista de Bodegas"}
                    columnas={columnas}
                    filas={listBodega}
                    onVerTodas={idArea ? () => navigate('/app/bodegas') : undefined}
                    onAñadir={handleAñadir}
                    textoBotonAñadir="+ Añadir Bodega"
                    mostrarAcciones={true}
                    onEditar={handleEditar}
                    onEliminar={(fila) => eliminar(fila.ID_Bodega)}
                    accionesExtra={[
                        {
                            texto: "Materiales",
                            variante: "primario",
                            onClick: (fila) => handleVerMateriales(fila)
                        }
                    ]}
                />
            )}

            <ModalFormulario
                titulo={bodegaEditando ? "Editar Bodega" : "Añadir Bodega"}
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={handleCerrarModal}
            >
                <CampoFormulario
                    label="Nombre de la Bodega"
                    value={form.Nombre_Bodega}
                    onChange={v => setForm({ ...form, Nombre_Bodega: v })}
                />
                
                <CampoFormulario
                    label="ID del Área"
                    type="number"
                    value={idArea || form.FK_ID_Area}
                    onChange={v => setForm({ ...form, FK_ID_Area: v })}
                    disabled={!!idArea}
                />
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
