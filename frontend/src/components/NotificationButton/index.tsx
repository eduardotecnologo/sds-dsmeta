import icon from '../../assets/img/icon-notification.svg';  
import './style.css';
export function NotificationButton(){
    return(
        <div className="edumeta-red-btn">
            <img src={icon} alt="Notification" />
        </div>
    )
}