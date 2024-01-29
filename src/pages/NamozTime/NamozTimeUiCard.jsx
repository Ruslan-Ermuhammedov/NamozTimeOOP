import React, { useContext } from 'react'
import { StateContext } from '../../App'
function text(str){
    return str.slice(0,5);
}
function NamozTimeUiCard({ item }) {
console.log(item)
    const oylar=["Yanvar","Febral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]
    const {shahar}=useContext(StateContext)
    const sana = new Date();
    const yil = sana.getFullYear();
    const oy = sana.getMonth();
    const kun = sana.getDate();
    const soat = sana.getHours();
    const minut = sana.getMinutes();
    const sekund = sana.getSeconds();
    return (
        <div className='NamozTimeUiCardContener'>
            <div className='NamozTimeUiCardTop'>
                <div className='Card1'>
                    <h2>Namoz Vaqtlari {shahar}</h2>
                    <b>Joriy vaqt: <h2>{soat}:{minut} </h2></b>
                </div>
                <div className='Card2'>
                    <h2>{kun}  {oylar[oy]} {yil}</h2>
                </div>
            </div>
            <div className='NamozTimeUiCard'>
                <div className='Box'>
                    <img src="	https://namozvaqtlari.com/templates/new/images/sunrise-3.webp?1" alt="" />
                    <div className='BoxText'>
                        <h1>bomdod</h1>
                        <h2>{text(item.fajr)}</h2>
                        <h3>{shahar}</h3>
                    </div>
                </div>
                <div className='Box'>
                    <img src="https://namozvaqtlari.com/templates/new/images/fajr-2.webp?1" alt="" />
                    <div className='BoxText'>
                        <h1>quyosh</h1>
                        <h2>{text(item.shurooq)}</h2>
                        <h3>{shahar}</h3>
                    </div>
                </div>
                <div className='Box'>
                    <img src="	https://namozvaqtlari.com/templates/new/images/dhuhr-2.webp?1" alt="" />
                    <div className='BoxText'>
                        <h1>Peshin</h1>
                        <h2>{text(item.dhuhr)}</h2>
                        <h3>{shahar}</h3>
                    </div>
                </div>
                <div className='Box'>
                    <img src="https://namozvaqtlari.com/templates/new/images/asr-2.webp?1" alt="" />
                    <div className='BoxText'>
                        <h1>asr</h1>
                        <h2>{text(item.asr)}</h2>
                        <h3>{shahar}</h3>
                    </div>
                </div>
                <div className='Box'>
                    <img src="https://namozvaqtlari.com/templates/new/images/maghrib-2.webp?1" alt="" />
                    <div className='BoxText'>
                        <h1>shom</h1>
                        <h2>{text(item.maghrib)}</h2>
                        <h3>{shahar}</h3>
                    </div>
                </div>
                <div className='Box'>
                    <img src="		https://namozvaqtlari.com/templates/new/images/isha-2.webp?1" alt="" />
                    <div className='BoxText'>
                        <h1>xufton</h1>
                        <h2>{text(item.isha)}</h2>
                        <h3>{shahar}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
// https://namozvaqti.uz/img/logo_new.png
// https://lh3.googleusercontent.com/AB4VLpOeHuf6VdD8GKOfpaABSiHRomGewa_19mJ-j5ZZBkDCXqGcmy4V1Sa-LLnhUzM=s500-rw
// https://namozvaqtlari.com/uploads/namozvaqtlari_logo_new.webp
// https://static5.tgstat.ru/channels/_0/9f/9fc4b34d8e4e2e56caef2fd3f9e98bc0.jpg
export default NamozTimeUiCard
