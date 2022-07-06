import Preloader from "../../coomon/Preloader/Preloader";
import style from './Profile.module.css'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src="https://themified.com/friend-finder/images/covers/1.jpg" alt=""/>
            <div>
                <img className={style.photosProfile}
                     src={props.profile.photos.large}
                     alt=""/>
            </div>
            <div className={style.informationMe}>
                <h1>{props.profile.fullName}</h1>
                <h3>{props.profile.aboutMe}</h3>
            </div>
        </div>

    )
}
export default Profile;