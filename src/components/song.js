import React from "react";
import SongDelete from "./song-delete";
import SongEdit from "./song-edit";

// Shows data and passes the edit and remove functions along through the pread operator
const Song = (props) => {
  const { title, artist } = props;
  return (
    <tr>
      <td> {artist} </td>
      <td> {title} </td>
      <td className="text-end">
        <SongEdit {...props} />
        <SongDelete {...props} />
      </td>
    </tr>
  );
};

export default Song;
