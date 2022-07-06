import React from "react";
import preloader from '../../assets/images/loader.svg';
import style from './Preloader.module.css'

const Preloader = () => {
    return (<div className={style.preloader}><img alt='preloader' src={preloader} /></div>)
}
export default Preloader;