import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutPrincipal } from '../Components/templates/LayoutPrincipal/LayoutPrincipal';
import { SeccionTabla } from '../Components/organisms/SeccionTabla/SeccionTabla';
import { ModalFormulario } from '../Components/organisms/ModalFormulario/ModalFormulario';
import { CampoFormulario } from '../Components/molecules/CampoFormulario/CampoFormulario';
import { SelectOpcion } from '../Components/atoms/SelectOpcion/SelectOpcion';
import { useAreas } from '../hooks/useAreas';
import { useUsuarios } from '../hooks/useUsuarios';

export const PaginaAreas = () => {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const {
        listArea,
        cargando,
        areaEditando,
        crear,
        actualizar,
        eliminar,
        seleccionarParaEditar,
        limpiarEdicion,
        areasPaginadas,
        paginaActual,
        totalPaginas,
        cambiarPagina,
        busqueda,
        cambiarBusqueda,
        totalElementosFiltrados
    } = useAreas();
    const { listUsuario } = useUsuarios();

    const [form, setForm] = useState({
        Nombre_Area: '', Ambiente: '', FK_ID_Usuario: '', FK_ID_Sedes: ''
    });

    useEffect(() => {
        if (areaEditando) {
            setForm({
                Nombre_Area: areaEditando.Nombre_Area || '',
                Ambiente: areaEditando.Ambiente || '',
                FK_ID_Usuario: areaEditando.FK_ID_Usuario || '',
                FK_ID_Sedes: areaEditando.FK_ID_Sedes || ''
            });
        } else {
            setForm({
                Nombre_Area: '', Ambiente: '', FK_ID_Usuario: '', FK_ID_Sedes: ''
            });
        }
    }, [areaEditando]);

    const columnas = [
        { key: 'ID_Area', label: 'Código' },
        { key: 'Nombre_Area', label: 'Nombre' },
        { key: 'Ambiente', label: 'Ambiente' },
        { key: 'Nombre_Encargado', label: 'Encargado' }
    ];

    const filasConNombre = areasPaginadas.map(a => {
        const encargado = listUsuario.find(u => u.ID_Usuario === a.FK_ID_Usuario);
        return {
            ...a,
            Nombre_Encargado: encargado ? `${encargado.Nombre} ${encargado.Apellidos}` : a.FK_ID_Usuario
        };
    });

    const handleNavegar = (ruta) => {
        navigate(`/app/${ruta}`);
    };

    const handleVerBodegas = (fila) => {
        navigate(`/app/bodegas?area=${fila.ID_Area}`);
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
        // En base a si estamos editando o no
        if (areaEditando) {
            await actualizar(areaEditando.ID_Area, {
                Nombre_Area: form.Nombre_Area,
                Ambiente: form.Ambiente,
                FK_ID_Usuario: parseInt(form.FK_ID_Usuario) || form.FK_ID_Usuario
            });
        } else {
            await crear({
                ...form,
                FK_ID_Usuario: parseInt(form.FK_ID_Usuario) || form.FK_ID_Usuario,
                FK_ID_Sedes: parseInt(form.FK_ID_Sedes) || form.FK_ID_Sedes
            });
        }
        setMostrarModal(false);
        limpiarEdicion();
    };

    const handleCerrarModal = () => {
        setMostrarModal(false);
        limpiarEdicion();
    };

    const X = totalElementosFiltrados === 0 ? 0 : (paginaActual - 1) * 10 + 1;
    const Y = Math.min(paginaActual * 10, totalElementosFiltrados);
    const Z = totalElementosFiltrados;

    return (
        <LayoutPrincipal
            seccionActiva="areas"
            onNavegar={handleNavegar}
            nombreUsuario="Admin"
        >
            {cargando ? (
                <p>Cargando...</p>
            ) : (
                <SeccionTabla
                    titulo="Lista de Áreas"
                    columnas={columnas}
                    filas={filasConNombre}
                    onAñadir={handleAñadir}
                    textoBotonAñadir="+ Añadir Área"
                    mostrarAcciones={true}
                    onEditar={handleEditar}
                    onEliminar={(fila) => eliminar(fila.ID_Area)}
                    accionesExtra={[
                        {
                            texto: "Bodegas",
                            variante: "mover",
                            onClick: (fila) => handleVerBodegas(fila)
                        }
                    ]}
                    paginaActual={paginaActual}
                    totalPaginas={totalPaginas}
                    onCambiar={cambiarPagina}
                    busqueda={busqueda}
                    onBuscar={cambiarBusqueda}
                    textoInfoPaginacion={`Mostrando ${X} a ${Y} de ${Z} entradas`}
                />
            )}

            <ModalFormulario
                titulo={areaEditando ? "Editar Área" : "Añadir Área"}
                visible={mostrarModal}
                onGuardar={handleGuardar}
                onCerrar={handleCerrarModal}
            >
                <CampoFormulario
                    label="Nombre del Área"
                    value={form.Nombre_Area}
                    onChange={v => setForm({ ...form, Nombre_Area: v })}
                />
                <CampoFormulario
                    label="Ambiente"
                    value={form.Ambiente}
                    onChange={v => setForm({ ...form, Ambiente: v })}
                />
                <SelectOpcion
                    label="Encargado"
                    opciones={listUsuario.map(u => ({
                        valor: u.ID_Usuario,
                        label: `${u.Nombre} ${u.Apellidos}`
                    }))}
                    value={form.FK_ID_Usuario}
                    onChange={val => setForm({ ...form, FK_ID_Usuario: val })}
                />
                {!areaEditando && (
                    <CampoFormulario
                        label="ID Sede"
                        type="number"
                        value={form.FK_ID_Sedes}
                        onChange={v => setForm({ ...form, FK_ID_Sedes: v })}
                    />
                )}
            </ModalFormulario>
        </LayoutPrincipal>
    );
};
