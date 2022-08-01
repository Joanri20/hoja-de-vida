import React from 'react';
import { MdAssignmentInd, MdAlternateEmail } from 'react-icons/md';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import {
  FaPenSquare,
  FaUserGraduate,
  FaBriefcase,
  FaLanguage,
} from 'react-icons/fa';
import { GiHobbitDwelling } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import { BoxInformation } from 'components/BoxInformation';

const SelectIcon = ({ iconName }) => {
  switch (iconName) {
    case 'name':
      return (
        <>
          <MdAssignmentInd className='icons-style' />
          <BoxInformation title='Nombre:' info='Dairo Joan Rivas García' />
        </>
      );
    case 'email':
      return (
        <>
          <MdAlternateEmail className='icons-style' />
          <BoxInformation title='Email:' info='Joanri20@hotmail.com' />
        </>
      );
    case 'linkedin':
      return (
        <>
          <IoLogoLinkedin className='icons-style' />
          <BoxInformation title='Linkedin:' info='joanrivas' />
        </>
      );
    case 'github':
      return (
        <>
          <IoLogoGithub className='icons-style' />
          <BoxInformation title='GitHub:' info='Joanri20' />
        </>
      );
    case 'descperfil':
      return (
        <>
          <FaPenSquare className='icons-style' />
          <BoxInformation title='Descripción Perfil:' />
        </>
      );
    case 'infoAcademic':
      return (
        <>
          <FaUserGraduate className='icons-style' />
          <BoxInformation title='Información Academica:' />
        </>
      );
    case 'workingInfo':
      return (
        <>
          <FaBriefcase className='icons-style' />
          <BoxInformation title='Información Laboral:' />
        </>
      );
    case 'hobbies':
      return (
        <>
          <GiHobbitDwelling className='icons-style' />
          <BoxInformation title='Hobbies:' />
        </>
      );
    case 'language':
      return (
        <>
          <FaLanguage className='icons-style' />
          <BoxInformation title='Lenguaje:' />
        </>
      );
    case 'coursesCerti':
      return (
        <>
          <TbCertificate className='icons-style' />
          <BoxInformation title='Cursos y Certificaciones:' />
        </>
      );

    default:
      return <BoxInformation title='Información No cargada adecuadamente' />;
  }
};

export { SelectIcon };
