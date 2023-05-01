import React from "react";
import { Divider } from "primereact/divider";

const Header = (props) => {
  return (
    <div><table>
    <thead>
      <tr>
        <th>User Count</th>
        <th>Post Count</th>
        <th>Albums Count</th>
        <th>Comments Count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.userCount}</td>
        <td>{props.postCount}</td>
        <td>{props.albumsCount}</td>
        <td>{props.commentsCount}</td>
      </tr>
    </tbody>
  </table>
  </div>
  );
};

export default Header;
