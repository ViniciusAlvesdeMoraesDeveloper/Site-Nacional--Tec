"use client"
import { useEffect,useRef,useState } from "react";
import {createPortal} from 'react-dom';

interface ModalPortalProps{
    children:React.ReactNode;
}

const ModalPortal= ({children}:ModalPortalProps)=>{
    const portalRef = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);
    
    useEffect(()=>{
        portalRef.current = document.querySelector('#modal-root');
        setMounted(true);
    },[]);

    if(!mounted || !portalRef.current)
        return null;
        return createPortal(children,portalRef.current);

};

export default ModalPortal;