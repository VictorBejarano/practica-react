import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, quitarTitular}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="cancha">
            {suplentes.map((j) => (
                <article className="suplentes" key={j.id}>
                    <div>
                        <img src={j.foto} alt={j.nombre} />
                        <button onClick={() => quitarTitular(j)}>X</button>
                    </div>
                    <p>{j.nombre}</p>
                </article>
            ))}
        </div>
    </section>
);

const mapStateToProps = (state) => ({
    suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);