// import { Chip, Tooltip } from '@mui/material'
// import styles from './Card.module.css'

// const Card = ({data, type}) => {
//     const generateCard = (type) =>{
//         switch(type) {
//             case "album": {
//                 const {image, follows, title, songs} = data
//                 return (
//                     <Tooltip title={`${songs.length} songs`} placement='top' arrow>
//                         <div className={styles.wrapper}>
//                             <div className={styles.card}>
//                                 <img src={image} alt='album' height={170} width={159}/>
//                                 <div className={styles.banner}>
//                                     <Chip label={follows} variant="outlined" size='small' className={styles.chip}/>
//                                 </div>
//                             </div>
//                             <div className={styles.titleWrapper}>
//                                 <p>{title}</p>
//                             </div>
//                         </div>
//                     </Tooltip>
//                 )
//             }
//             default:
//                 return <></>
//         }
//     }
//     return generateCard(type);
// }

// export default Card