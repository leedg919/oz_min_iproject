import '../css/MiniMbti.css';

const MiniMbti = ({data}) => {
    return (
        <div className='miniContainer'>
            <div className='miniItems'>
                    <div className="miniTitles">
                        <div className='miniTitle'>{data.title}</div>
                        <div className='miniTitle'>{data.title2}</div>
                    </div>
                    <div className="miniImgBox">
                        <img className="miniImg" src={data.img} />
                    </div>
            </div>
        </div>
    );
}
export default MiniMbti;