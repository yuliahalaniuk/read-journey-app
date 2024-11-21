import { keyframes } from "styled-components";

export const scaleInFromCenter = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0.5);  
    opacity: 0;             
  }
  to {
    transform: translate(-50%, -50%) scale(1);    
    opacity: 1;             
  }
`;

export const scaleOutToCenter = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);    
    opacity: 1;            
  }
  to {
    transform: translate(-50%, -50%) scale(0.5);  
    opacity: 0;             
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const fadeInBackdrop = keyframes`
  from {
    opacity: 0; 
  }
  to {
    opacity: 1;  
  }
`;

export const fadeOutBackdrop = keyframes`
  from {
    opacity: 1;  
  }
  to {
    opacity: 0;  
  }
`;
