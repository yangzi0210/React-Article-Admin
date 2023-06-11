import { Tag } from "antd";
import img404 from "@/assets/404.png";

const formatStatus = (type) => {
  const TYPES = {
    1: <Tag color="red">审核失败</Tag>,
    2: <Tag color="green">审核成功</Tag>,
  };
  return TYPES[type];
};

export const columns = [
  {
    title: "封面",
    dataIndex: "cover",
    width: 120,
    render: (cover) => {
      return (
        <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      );
    },
  },
  {
    title: "标题",
    dataIndex: "title",
    width: 220,
  },
  {
    title: "状态",
    dataIndex: "status",
    render: (data) => formatStatus(data),
  },
  {
    title: "发布时间",
    dataIndex: "pubdate",
  },
  {
    title: "阅读数",
    dataIndex: "read_count",
  },
  {
    title: "评论数",
    dataIndex: "comment_count",
  },
  {
    title: "点赞数",
    dataIndex: "like_count",
  },
];
