import propTypes from "prop-types";
import { FriendList } from "./FriendList";

function FriendListItem({friends}){
    <ul>
    {friends.map(friend =>(
        <li key={friend.id}>
        <FriendList friennds={friends[0]}/>
        </li>
    ))}
    </ul>;   
};
FriendListItem.propTypes={
    friends:propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.string.isRequired,
        }),  
    ),
};
export default FriendListItem;