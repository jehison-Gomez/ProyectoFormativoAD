import React, { useState } from 'react';
import { InputTexto } from '@/Components/atoms/InputTexto/InputTexto';
import { InputPassword } from '@/Components/atoms/InputPassword/InputPassword';
import { Boton } from '@/Components/atoms/Boton/Boton';
import styles from './FormularioLogin.module.css';

export const FormularioLogin = ({ onLogin, cargando, error }) => {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ usuario, clave });
    };

    return (
        <form className={styles.formulario} onSubmit={handleSubmit}>
            <h2 className={styles.titulo}>Iniciar sesión</h2>

            <div className={styles.campos}>
                <InputTexto
                    label="Usuario"
                    placeholder="Ingrese su usuario"
                    value={usuario}
                    onChange={setUsuario}
                />

                <InputPassword
                    label="Contraseña"
                    value={clave}
                    onChange={setClave}
                />
            </div>

            <a href="#" className={styles.enlaceOlvidaste}>¿Olvidaste tu clave?</a>

            <div className={styles.acciones}>
                {error && (
                    <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px', textAlign: 'center' }}>
                        {error}
                    </p>
                )}
                <Boton
                    variante="primario"
                    texto="Ingresar"
                    disabled={cargando}
                    onClick={() => { }} // Se maneja en el onSubmit del form
                />
            </div>
        </form>
    );
};
