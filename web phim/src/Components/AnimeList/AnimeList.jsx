import React from 'react'
import Anime from '../Anime/Anime'

const AnimeList = (props) => {
    // console.log(props);
    const filteredData = props.data.filter((item) => item.id !== props.selectedId);
    // Ẩn anime được chọn khỏi Animelist

    return filteredData.map((item) => {
        return <Anime item={item} setSelectedId={props.setSelectedId} />
    })
    // render ra danh sách anime, trừ cái được chọn
}
 // trả về danh sách AnimeList sau khi đã được filter 
export default AnimeList