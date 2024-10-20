import React from 'react'
import Footer from '../../footer/Footer'
import Header from '../Header'
import '../../app.css'

const Question = () => {
  return (
    <div>
      <Header />
    <div className='body'>
        <div className='container piti'>
                <h1 className='title'>Informacion</h1>
                <div className='questions-div'>
                    <p>MyCode es una innovadora aplicación diseñada para facilitar la gestión de fragmentos de código de manera sencilla y práctica. La app permite guardar, organizar y acceder rápidamente a tu código, lo que te ahorra tiempo cuando necesitas reutilizarlo en proyectos futuros. Con MyCode, copiar y pegar código se convierte en una tarea intuitiva, mejorando la eficiencia en el flujo de trabajo diario.</p>
                    <p>
                    Una de las características más destacadas de MyCode es su librería de códigos por defecto, que incluye fragmentos útiles y comunes para diversos lenguajes de programación. Esto no solo te ayuda a comenzar más rápido, sino que también hace que el uso sea más dinámico, ya que puedes personalizar y ampliar la biblioteca con tus propios códigos a medida que los necesites.
                    </p>
                    <p>
                    La combinación de una interfaz amigable y una librería prediseñada convierte a MyCode en una herramienta muy recomendable para programadores de todos los niveles. ¡Es la solución ideal para quienes valoran la organización y la accesibilidad en el mundo del desarrollo de software!
                    </p>
                </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Question