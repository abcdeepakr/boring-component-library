import React,{FC, ReactNode} from "react";
import '../Modal.css'
export interface ModalProps{
    show: boolean;
    children: ReactNode;
    onClose: any; // TODO change this from any to the actual data type
}
const Modal: FC<ModalProps> = (props: ModalProps) => {

  return (
    <>
    <div onClick={props.onClose} id="myModal" className={`modal ${props.show ? 'show-image-modal': 'hide-image-modal'}`}>
      <span className='close'>&times;</span>
      {props.children}
    </div>
    </>
  );

};

export default Modal;