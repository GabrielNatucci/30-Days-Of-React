import React from 'react';
import './main.css';
import fotoMinha from './../assets/images/FotoMinha.jpg';
import Card from '../card/Card';

import js from './../assets/images/javascript.png';
import html from './../assets/images/html.png';
import css from './../assets/images/css.png';

class Main extends React.Component { 
    render() {
        let cardStyles = this.props.styles;

        return (
            <div className='main-wrapper' style={cardStyles.main}>
                <section className='home'>
                    <div className='desc'>
                        <h1>Olá! Sou o Gabriel</h1>
                        <p>Tenho 19 anos de idade e sou um amante da tecnologia. 
                            Adoro programação e sou estuante de sistemas embarcados.
                            Aleḿ disso, cursei o curso Next Education, uma parceria
                            entre a Alura+Oracle
                        </p>
                    </div>
                    <img src={fotoMinha} alt='Foto minha'/> 
                </section>
                
                <section className='sobre-mim'>
                    <div className='sobre-mim-div'>
                        <h1 style={cardStyles.h1}>Sobre mim</h1>
                        <p style={cardStyles.p}>Olá! Meu nome é Gabriel Natucci e tenho 19 anos.
                            Sou amante de programação/desenvolvimento e
                            estudo Sistemas Embarcados na FATEC Jundiaí.
                            Além disso, sigo a formação da Oracle, o Next Education,
                            formada junto com a alura. Sou amante da programação,
                            tenho muito interesse em técnologias na prática tenho
                            muita ambição para entrar no mercado de trabalho na
                            área de programação/desenvolvimento e seguir
                            carreira na área.
                        </p>
                    </div>
                    
                    <div className='conhecimentos'>
                        <h1 style={cardStyles.h1}>Conhecimentos</h1>
                        <div className='skills'>    
                            <Card 
                                skill='Javascript'
                                img={js}
                                style={cardStyles}
                            />
                            <Card 
                                skill='HTML'
                                img={html}
                                style={cardStyles}
                            />
                            <Card 
                                skill='CSS'
                                img={css}
                                style={cardStyles}
                            />
                        </div>
                    </div>
                    
                    <div className='formacao'>
                        <h1 style={cardStyles.h1}>Formação</h1>
                        <div className='skills'>
                            <Card 
                                skill='Lorem ipsum'
                                img={fotoMinha}
                                style={cardStyles}
                            />
                            <Card 
                                skill='Lorem ipsum'
                                img={fotoMinha}
                                style={cardStyles}
                            />
                            <Card 
                                skill='Lorem ipsum'
                                img={fotoMinha}
                                style={cardStyles}
                            />
                            <Card 
                                skill='Lorem ipsum'
                                img={fotoMinha}
                                style={cardStyles}
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main;
