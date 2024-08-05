import { Avatar, Skeleton, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import AvatarCard from '../../components/shared/AvatarCard';
import Table from '../../components/shared/Table';
import { transformImage } from '../../lib/features';
import { useAllChatsQuery } from '../../redux/api/adminApi';

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => <AvatarCard avatar={params.row.avatar} />
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "groupChat",
    headerName: "Group",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "table-header",
    width: 200
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "table-header",
    width: 400,
    renderCell: (params) => <AvatarCard max={100} avatar={params.row.members} />
  },
  {
    field: "totalMessage",
    headerName: "Total Messages",
    headerClassName: "table-header",
    width: 120
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassName: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems="center" spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    )
  },

];

const ChatManagement = () => {


  const { isLoading, isError, data, errors } = useAllChatsQuery()

  console.log(data, "69");

  const [rows, setRows] = useState([])


  useEffect(() => {
    if (data) {
      setRows(
        data?.transfromedChats?.map((chat) => ({
          ...chat,
          id: chat._id,
          avatar: chat.avatar.map((i) => transformImage(i, 50)),
          members: chat.members.map((i) => transformImage(i.avatar, 50))
        }))
      )
    }
  }, [data])


  console.log(rows , "88");

  return (
    <AdminLayout>
      {isLoading ? <Skeleton  height={"100vh"} /> :
        <Table heading={"All Chats"} columns={columns} rows={rows} />}
    </AdminLayout>
  )
}

export default ChatManagement
