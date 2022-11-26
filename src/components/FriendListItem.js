import { FriendList } from "./FriendList";

function FriendListItem({friends}){
    <ul>
    {friends.map(friend =>(
        <li key={friend.id}>
        <FriendList friennds={friends[0]}/>
        </li>
    ))}
    </ul>;   
}
export default FriendListItem;