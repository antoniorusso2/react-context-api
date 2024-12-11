/* eslint-disable react/prop-types */
import placeholder from '../../assets/placeholder.bmp';
import style from './Card.module.css';
import { URI } from '../../config';
import { Link } from 'react-router-dom';

export default function Card({ post }) {
  console.log(post);
  const { title, image, id } = post;

  console.log(image);
  console.log(URI);

  return (
    <>
      <div className={style.card}>
        <div className={style.head}>
          <img className={style.img} src={`${URI}${image}` || placeholder} alt="" />
        </div>
        <div className={style.body}>
          <h2 className={style.title}>{title}</h2>
          <Link className={`btn ${style.btn}`} to={`${id}`}>
            {/* <button className={`btn ${style.btn}`}> */}
            Leggi di piu
            {/* </button> */}
          </Link>
        </div>
      </div>
    </>
  );
}
