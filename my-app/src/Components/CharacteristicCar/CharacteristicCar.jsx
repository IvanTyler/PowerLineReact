import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataCar } from '../../redux/actions/carAC';

import style from './CharacteristicCar.module.css'

function CharacteristicCar() {
    const car = useSelector((state) => state.car.car)
    const dispatch = useDispatch()
    console.log('gateData >>>', car)
    useEffect(() => {
        dispatch(getDataCar())
    }, [])
    return (
        <main className={style.main}>
            <video src="https://cdn.kia.ru/media-data/banners/models/sportage/desc/Kia-Sportage-BE.mp4" muted="muted" autoplay="autoplay" loop="loop" preload="" playsinline="" class={style.videoKiaSportage}></video>
            <div class={style.container + ' ' + style.containerCars}>
                <div className={style.hidden}>
                    <form name="formEditUser" className={style.formEditUser}>
                        <img className={style.formEditUserCloseForm} src="/public/icon/close-white.png" alt="Закрыть форму" />
                        <h3 className={style.formEditUserTitle}>Редактировать данные владельца</h3>
                        <div className={style.addingUserItem}>
                            <input placeholder="Введите имя" type="text" name="nameUser" id="nameUser"
                                className={style.editUserInput + ' ' + style.necessarily} />
                        </div>
                        <div className={style.addingUserItem}>
                            <input placeholder="Введите email" type="email" name="userEmail" id="userEmail"
                                className={style.editUserInput + ' ' + style.necessarily} />
                        </div>
                        <div className={style.addingUserItem}>
                            <input placeholder="Введите владельца" type="text" name="userOwner" id="userOwner"
                                className={style.editUserInput + ' ' + style.necessarily} />
                        </div>

                        <button className={style.buttonEditUserData}>Сохраить</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default CharacteristicCar