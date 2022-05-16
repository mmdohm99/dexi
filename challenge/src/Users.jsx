import { useState, useEffect } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [queue, setQueue] = useState(5);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      console.log(res.data.users);
      setUsers(res.data.users);
    });
  }, [queue]);

  const loadMore = (queue, users) => {
    let limitedUsers = users.slice(0, queue);
    return limitedUsers;
  };
  const limitedUsers = loadMore(queue, users);

  let loadMoreUsers = () => {
    setQueue(queue + 5);
    // console.log("ss");
    loadMore(queue, users);
  };
  // console.log(queue);
  return (
    <>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">User age</TableCell>
              <TableCell align="right">User gender&nbsp;</TableCell>
              <TableCell align="right">User email&nbsp;</TableCell>
              <TableCell align="right">User height&nbsp;(Cm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {limitedUsers.map((user) => (
              <TableRow
                key={user.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.height}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button onClick={(queue) => loadMoreUsers(queue)}>Load more</button>
      </TableContainer>
    </>
  );
};
