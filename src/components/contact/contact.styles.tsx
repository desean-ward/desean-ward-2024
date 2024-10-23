import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { css } from 'react';
import { motion } from 'framer-motion';
import { PulseLoader } from 'react-spinners';

export const ContactContainer = tw.div`
    max-w-[1240px]
    h-screen 
    flex flex-col
    p-4
`;

export const ContactHeader = tw(motion.header)`
    mt-20 md:mt-40
`;

export const ContactWrapper = tw.div`
    w-full
    m-auto 
    px-2 
    pt-[1em]
`;

export const ContentWrapper = tw.div`
    grid lg:grid-cols-5 gap-8
    md:w-[80%]
    m-auto
`;

export const LeftSide = tw(motion.div)`
    col-span-3 
    lg:col-span-2 
    h-full 
    shadow-xl shadow-gray-400 
    rounded-xl 
`;

export const LeftSideWrapper = tw.div`
    p-4 
    h-full
`;

export const SocialIcons = tw.div`
    flex items-center justify-between 
    py-4 
    t-0
`;

export const RightSide = tw(motion.div)`
    col-span-3 
    h-[100%] 
    shadow-xl shadow-gray-400 
    rounded-xl 
    lg:p-4
`;

export const FormWrapper = tw.div`
    p-4
`;

export const NamePhoneWrapper = tw.div`
    grid md:grid-cols-2 gap-4 
    w-full
    py-2 bg-red
`;

export const Field = tw.section`
    flex flex-col
    
    label {
        uppercase text-sm py-2
    }
`;

export const Input = tw.input`
    ${props => (props.error === true ? 'input-error' : '')}
    
    border-2 rounded-lg p-3 border-gray-300 focus:outline-none 
`;
export const TextArea = tw.textarea`
    ${props => (props.error === true ? 'border-red-900' : 'border-gray-300')}

    border-2 rounded-lg p-3 focus:outline-none resize-none
`;

export const BackToTop = tw.div`
     invisible //flex justifycenter py-12
`;

export const ButtonWrapper = styled.div``;

export const Spinner = styled(PulseLoader)`

`;
