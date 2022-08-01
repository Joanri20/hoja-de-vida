import React from 'react';
import Imagen from 'media/foto2.jpg';
import { InformationItem } from 'components/InformationItem';
import { TextInformation } from 'components/TextInformation';
import { BasicInformation } from 'components/BasicInformation';

const Home = () => (
  <main>
    <div className='p-5 flex flex-col h-full gap-3 xl:flex-row xl:place-content-around'>
      <div className='flex flex-col p-2 xl:flex-grow-1 xl:p-1 xl:flex-col xl:max-w-[550px] xl:justify-start max-h-max md:max-h-200 w-full bg-[#f1fcf9] border rounded-xl drop-shadow-lg md:flex-row-reverse md:justify-end md:gap-3'>
        <div className='bg-[#23867f] md:w-full md:max-h-[50px] border rounded-lg p-1 text-center text-white drop-shadow-[3px_3px_4px_rgba(0,0,0,1)]'>
          <span className='text-3xl font-bold drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>
            Hoja de vida
          </span>
        </div>
        <div className='flex flex-col p-4 items-center md:p-0'>
          <div>
            <img className='md:min-w-[150px]' src={Imagen} alt='foto' />
          </div>
        </div>
        <div className='hidden xl:flex xl:flex-col xl:gap-2'>
          <BasicInformation />
        </div>
      </div>

      <div className='flex flex-col p-2 xl:gap-2 md:max-h-max xl:max-w-[800px] bg-[#23867f] border rounded-xl drop-shadow-lg'>
        <div className='flex flex-col gap-1 xl:overflow-x-scroll'>
          <div className='flex flex-col gap-1 xl:hidden '>
            <BasicInformation />
          </div>
          <InformationItem icon='descperfil' />
          <div className='div-info-style md:justify-start'>
            <TextInformation
              text='Estudiante de 27 años, actualmente reside en el municipio de
              Amalfi'
            />
            <TextInformation text='Con conocimiento en lenguaje de programación Java' />
            <TextInformation text='Conocimiento en metodologías ágiles' />
            <TextInformation text='Conocimiento en redes de comunicación' />
            <TextInformation text='Capacidad para trabajo en equipo' />
            <TextInformation text='Conocimiento en herramientas ofimáticas' />
          </div>

          <InformationItem icon='infoAcademic' />
          <div className='div-info-style md:justify-start'>
            <TextInformation text='Estudiante 6to nivel de Ingeniería de Sistemas de la UdeA' />
            <TextInformation text='Tecnólogo en Gestion de Redes de Datos del SENA' />
            <TextInformation text='Técnico en Recursos Humanos del SENA' />
            <TextInformation text='Técnico en Sistemas de IME' />
            <TextInformation text='Bachiller con media técnica en Sistemas' />
          </div>

          <InformationItem icon='workingInfo' />
          <div className='div-info-style'>
            <TextInformation text='Analista de software de Calidad- TCS (Actualmente)' />
            <TextInformation text='Técnico administrativo  telecomunicaciones - AAPA (3 años)' />
          </div>

          <InformationItem icon='hobbies' />
          <div className='div-info-style'>
            <TextInformation text='Montar en Bicicleta' />
            <TextInformation text='Viajar en Moto' />
            <TextInformation text='Ver Películas' />
          </div>

          <InformationItem icon='language' />
          <div className='div-info-style'>
            <TextInformation text='English A2' />
            <TextInformation text='Español Nativo' />
          </div>

          <InformationItem icon='coursesCerti' />
          <div className='div-info-style md:justify-start'>
            <TextInformation text='Diseño de circuitos digitales' />
            <TextInformation text='Arquitectura de computadores' />
            <TextInformation text='Base de datos' />
            <TextInformation text='Técnica de programación' />
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Home;
